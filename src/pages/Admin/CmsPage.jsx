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
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 capitalize">
                  {groupName} Settings
                </h2>
              </div>

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
