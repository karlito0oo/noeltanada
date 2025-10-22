import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCms } from "../../contexts/CmsContext";
import RichTextEditor from "../../components/RichTextEditor";
import { cmsService } from "../../services/CmsService";
import usePageTitle from "../../hooks/usePageTitle";

const CmsPage = () => {
  usePageTitle("CMS Management");

  const navigate = useNavigate();
  const { settings, isLoading: cmsLoading } = useCms();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [adminSettings, setAdminSettings] = useState([]);
  const [formData, setFormData] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [expandedGroups, setExpandedGroups] = useState({});
  const [uploadingImages, setUploadingImages] = useState({});

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        navigate("/admin/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:8000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
          await fetchAdminSettings();
        } else {
          localStorage.removeItem("auth_token");
          navigate("/admin/login");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        localStorage.removeItem("auth_token");
        navigate("/admin/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const fetchAdminSettings = async () => {
    try {
      const response = await cmsService.getAdminSettings();
      if (response.success) {
        setAdminSettings(response.data.all);
        // Initialize form data with current values
        const initialFormData = {};
        response.data.all.forEach((setting) => {
          initialFormData[setting.key] = setting.value;
        });
        setFormData(initialFormData);
      }
    } catch (error) {
      console.error("Failed to fetch admin settings:", error);
      setErrorMessage("Failed to load CMS settings");
    }
  };

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleImageUpload = async (key, file) => {
    if (!file) return;

    // Create FormData for file upload
    const uploadFormData = new FormData();
    uploadFormData.append('image', file);

    setUploadingImages(prev => ({ ...prev, [key]: true }));

    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch('http://localhost:8000/api/admin/upload-image', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: uploadFormData,
      });

      const data = await response.json();

      if (data.success) {
        // Update form data with the uploaded image path
        handleInputChange(key, data.path);
        setSuccessMessage(`Image uploaded successfully!`);
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        throw new Error(data.message || 'Upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setErrorMessage(error.message || 'Failed to upload image');
      setTimeout(() => setErrorMessage(''), 5000);
    } finally {
      setUploadingImages(prev => ({ ...prev, [key]: false }));
    }
  };

  const toggleGroup = (groupName) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupName]: !prev[groupName]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      // Prepare settings array for bulk update
      const settingsToUpdate = Object.keys(formData).map((key) => ({
        key,
        value: formData[key],
      }));

      const response = await cmsService.updateMultipleSettings(
        settingsToUpdate
      );

      if (response.success) {
        setSuccessMessage("CMS settings updated successfully!");
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        throw new Error(response.message || "Failed to update settings");
      }
    } catch (error) {
      console.error("Error updating settings:", error);
      setErrorMessage(error.message || "Failed to update CMS settings");
      setTimeout(() => setErrorMessage(""), 5000);
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/admin/login");
  };

  const renderFormField = (setting) => {
    const { key, type, label, description, value } = setting;
    const currentValue = formData[key] || value || "";

    switch (type) {
      case "textarea":
        return (
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            rows="4"
            value={currentValue}
            onChange={(e) => handleInputChange(key, e.target.value)}
          />
        );

      case "richtext":
        return (
          <RichTextEditor
            value={currentValue}
            onChange={(value) => handleInputChange(key, value)}
            placeholder={`Enter ${label.toLowerCase()}...`}
          />
        );

      case "email":
        return (
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={currentValue}
            onChange={(e) => handleInputChange(key, e.target.value)}
          />
        );

      case "phone":
        return (
          <input
            type="tel"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={currentValue}
            onChange={(e) => handleInputChange(key, e.target.value)}
          />
        );

      case "url":
        return (
          <input
            type="url"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={currentValue}
            onChange={(e) => handleInputChange(key, e.target.value)}
            placeholder="https://example.com"
          />
        );

      case "image":
        const getImageUrl = (path) => {
          if (!path) return '';
          // If it's already a full URL, use it as-is
          if (path.startsWith('http://') || path.startsWith('https://')) {
            return path;
          }
          // If it's a relative path, prepend the backend URL
          return `http://localhost:8000${path}`;
        };

        return (
          <div className="space-y-2">
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={currentValue}
              onChange={(e) => handleInputChange(key, e.target.value)}
              placeholder="/path/to/image.jpg or full URL"
            />
            <div className="flex items-center gap-2">
              <label className="flex-1">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(key, e.target.files[0])}
                  disabled={uploadingImages[key]}
                />
                <button
                  type="button"
                  onClick={(e) => e.currentTarget.previousElementSibling.click()}
                  disabled={uploadingImages[key]}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {uploadingImages[key] ? 'Uploading...' : 'Upload Image'}
                </button>
              </label>
            </div>
            {currentValue && (
              <div className="mt-2 p-2 bg-gray-50 rounded-md">
                <p className="text-xs text-gray-500 mb-2">Preview:</p>
                <img
                  src={getImageUrl(currentValue)}
                  alt="Preview"
                  className="max-w-xs max-h-40 rounded-md border border-gray-300 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                  onLoad={(e) => {
                    e.target.style.display = 'block';
                    if (e.target.nextElementSibling) {
                      e.target.nextElementSibling.style.display = 'none';
                    }
                  }}
                />
                <p className="text-xs text-red-500 mt-2" style={{ display: 'none' }}>
                  Failed to load image. Please check the path.
                </p>
              </div>
            )}
          </div>
        );

      default:
        return (
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={currentValue}
            onChange={(e) => handleInputChange(key, e.target.value)}
          />
        );
    }
  };

  if (loading || cmsLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">
            Loading CMS Management...
          </p>
        </div>
      </div>
    );
  }

  // Group settings by their group
  const groupedSettings = adminSettings.reduce((groups, setting) => {
    const group = setting.group || "general";
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(setting);
    return groups;
  }, {});

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                CMS Management
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Welcome, {user?.name}
              </span>
              <button
                onClick={() => navigate("/admin/dashboard")}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Back to Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Success/Error Messages */}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {Object.keys(groupedSettings).map((groupName) => (
            <div
              key={groupName}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div 
                className="px-6 py-4 bg-gray-50 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => toggleGroup(groupName)}
              >
                <h2 className="text-xl font-semibold text-gray-900 capitalize">
                  {groupName} Settings
                </h2>
                <svg
                  className={`w-6 h-6 text-gray-600 transform transition-transform ${
                    expandedGroups[groupName] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {expandedGroups[groupName] && (
                <div className="p-6 space-y-6">
                  {groupedSettings[groupName].map((setting) => (
                    <div key={setting.key} className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        {setting.label}
                      </label>
                      {setting.description && (
                        <p className="text-xs text-gray-500">
                          {setting.description}
                        </p>
                      )}
                      {renderFormField(setting)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? (
                <>
                  <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                  Saving...
                </>
              ) : (
                "Save All Settings"
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CmsPage;
