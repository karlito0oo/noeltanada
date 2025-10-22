import React, { createContext, useContext, useState, useEffect } from 'react';
import { cmsService } from '../services/CmsService';

const CmsContext = createContext();

export const useCms = () => {
  const context = useContext(CmsContext);
  if (!context) {
    throw new Error('useCms must be used within a CmsProvider');
  }
  return context;
};

export const CmsProvider = ({ children }) => {
  const [settings, setSettings] = useState({});
  const [groupedSettings, setGroupedSettings] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSettings = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await cmsService.getAllSettings();
      
      if (response.success) {
        setSettings(response.data.flat);
        setGroupedSettings(response.data.grouped);
      } else {
        setError(response.message || 'Failed to fetch CMS settings');
      }
    } catch (err) {
      console.error('Error fetching CMS settings:', err);
      setError('Failed to fetch CMS settings');
    } finally {
      setIsLoading(false);
    }
  };

  const updateSetting = async (key, value) => {
    try {
      const response = await cmsService.updateSetting(key, { value });
      
      if (response.success) {
        setSettings(prev => ({
          ...prev,
          [key]: value
        }));
        
        // Also update grouped settings
        const updatedSetting = response.data;
        if (updatedSetting.group) {
          setGroupedSettings(prev => ({
            ...prev,
            [updatedSetting.group]: {
              ...prev[updatedSetting.group],
              [key]: value
            }
          }));
        }
        
        return response;
      } else {
        throw new Error(response.message || 'Failed to update setting');
      }
    } catch (err) {
      console.error('Error updating CMS setting:', err);
      throw err;
    }
  };

  const updateMultipleSettings = async (settingsArray) => {
    try {
      const response = await cmsService.updateMultipleSettings(settingsArray);
      
      if (response.success) {
        // Refresh settings after bulk update
        await fetchSettings();
        return response;
      } else {
        throw new Error(response.message || 'Failed to update settings');
      }
    } catch (err) {
      console.error('Error updating multiple CMS settings:', err);
      throw err;
    }
  };

  const getSetting = (key, defaultValue = null) => {
    return settings[key] || defaultValue;
  };

  const getSettingsByGroup = (group) => {
    return groupedSettings[group] || {};
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const value = {
    settings,
    groupedSettings,
    isLoading,
    error,
    fetchSettings,
    updateSetting,
    updateMultipleSettings,
    getSetting,
    getSettingsByGroup
  };

  return (
    <CmsContext.Provider value={value}>
      {children}
    </CmsContext.Provider>
  );
};

export default CmsContext;
