import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { catalogueService } from "../../services/CatalogueService";

const CatalogueManagementPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [catalogues, setCatalogues] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingCatalogue, setEditingCatalogue] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    pdf_url: '',
    order: 0,
    is_active: true,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/user', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        await fetchCatalogues();
      } else {
        localStorage.removeItem('auth_token');
        navigate('/admin/login');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('auth_token');
      navigate('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const fetchCatalogues = async () => {
    try {
      const response = await catalogueService.getAllCatalogues();
      if (response.success) {
        setCatalogues(response.data);
      }
    } catch (error) {
      setErrorMessage('Failed to fetch catalogues');
    }
  };

  const handleImageUpload = async (file) => {
    if (!file) return;

    const uploadFormData = new FormData();
    uploadFormData.append('image', file);
    setUploadingImage(true);

    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch('http://localhost:8000/api/admin/upload-image', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: uploadFormData,
      });

      const data = await response.json();
      if (data.success) {
        setFormData({ ...formData, image_url: data.path });
        setSuccessMessage('Image uploaded successfully!');
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    } catch (error) {
      setErrorMessage('Failed to upload image');
      setTimeout(() => setErrorMessage(''), 5000);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCatalogue) {
        await catalogueService.updateCatalogue(editingCatalogue.id, formData);
        setSuccessMessage('Catalogue updated successfully!');
      } else {
        await catalogueService.createCatalogue(formData);
        setSuccessMessage('Catalogue created successfully!');
      }
      
      setShowModal(false);
      setEditingCatalogue(null);
      setFormData({ title: '', description: '', image_url: '', pdf_url: '', order: 0, is_active: true });
      await fetchCatalogues();
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      setErrorMessage('Operation failed');
      setTimeout(() => setErrorMessage(''), 5000);
    }
  };

  const handleEdit = (catalogue) => {
    setEditingCatalogue(catalogue);
    setFormData({
      title: catalogue.title,
      description: catalogue.description || '',
      image_url: catalogue.image_url,
      pdf_url: catalogue.pdf_url || '',
      order: catalogue.order,
      is_active: catalogue.is_active,
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this catalogue?')) return;
    
    try {
      await catalogueService.deleteCatalogue(id);
      setSuccessMessage('Catalogue deleted successfully!');
      await fetchCatalogues();
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      setErrorMessage('Failed to delete catalogue');
      setTimeout(() => setErrorMessage(''), 5000);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Catalogue Management</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Welcome, {user?.name}</span>
              <button
                onClick={() => navigate('/admin/dashboard')}
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
        {/* Messages */}
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

        {/* Add Button */}
        <div className="mb-6">
          <button
            onClick={() => {
              setEditingCatalogue(null);
              setFormData({ title: '', description: '', image_url: '', pdf_url: '', order: 0, is_active: true });
              setShowModal(true);
            }}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
          >
            Add New Catalogue
          </button>
        </div>

        {/* Catalogues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogues.map((catalogue) => (
            <div key={catalogue.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={catalogue.image_url}
                alt={catalogue.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{catalogue.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{catalogue.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 text-xs rounded ${catalogue.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {catalogue.is_active ? 'Active' : 'Inactive'}
                  </span>
                  <span className="text-xs text-gray-500">Order: {catalogue.order}</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(catalogue)}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(catalogue.id)}
                    className="flex-1 px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {editingCatalogue ? 'Edit Catalogue' : 'Add New Catalogue'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      rows="3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
                    <input
                      type="text"
                      value={formData.image_url}
                      onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                      placeholder="/path/to/image.jpg"
                    />
                    <label className="block">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(e.target.files[0])}
                        disabled={uploadingImage}
                      />
                      <button
                        type="button"
                        onClick={(e) => e.target.previousElementSibling.click()}
                        disabled={uploadingImage}
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
                      >
                        {uploadingImage ? 'Uploading...' : 'Upload Image'}
                      </button>
                    </label>
                    {formData.image_url && (
                      <img
                        src={formData.image_url.startsWith('http') ? formData.image_url : `http://localhost:8000${formData.image_url}`}
                        alt="Preview"
                        className="mt-2 max-w-xs max-h-40 rounded-md border"
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">PDF URL (Optional)</label>
                    <input
                      type="text"
                      value={formData.pdf_url}
                      onChange={(e) => setFormData({ ...formData, pdf_url: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="/path/to/catalogue.pdf"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Order</label>
                    <input
                      type="number"
                      value={formData.order}
                      onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.is_active}
                      onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                      className="mr-2"
                    />
                    <label className="text-sm font-medium text-gray-700">Active</label>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
                    >
                      {editingCatalogue ? 'Update' : 'Create'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        setEditingCatalogue(null);
                      }}
                      className="flex-1 px-6 py-3 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CatalogueManagementPage;
