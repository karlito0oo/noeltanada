const API_BASE_URL = 'http://localhost:8000/api';

export const cmsService = {
  // Get all CMS settings
  getAllSettings: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/cms/settings`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching CMS settings:', error);
      throw error;
    }
  },

  // Get settings by group
  getSettingsByGroup: async (group) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cms/settings/group/${group}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching CMS settings by group:', error);
      throw error;
    }
  },

  // Update a single setting (Admin only)
  updateSetting: async (key, settingData) => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`${API_BASE_URL}/admin/cms/settings/${key}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(settingData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating CMS setting:', error);
      throw error;
    }
  },

  // Update multiple settings at once (Admin only)
  updateMultipleSettings: async (settings) => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`${API_BASE_URL}/admin/cms/settings/bulk-update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ settings }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating multiple CMS settings:', error);
      throw error;
    }
  },

  // Create a new setting (Admin only)
  createSetting: async (settingData) => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`${API_BASE_URL}/admin/cms/settings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(settingData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating CMS setting:', error);
      throw error;
    }
  },

  // Get admin CMS settings with full details (Admin only)
  getAdminSettings: async () => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`${API_BASE_URL}/admin/cms/settings`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching admin CMS settings:', error);
      throw error;
    }
  },

  // Get admin settings by group (Admin only)
  getAdminSettingsByGroup: async (group) => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`${API_BASE_URL}/admin/cms/settings/group/${group}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching admin CMS settings by group:', error);
      throw error;
    }
  },
};
