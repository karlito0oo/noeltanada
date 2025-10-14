/**
 * Centralized API Service for all HTTP requests
 * Handles authentication, error handling, and common request patterns
 */

class ApiService {
  constructor() {
    this.baseURL = 'http://127.0.0.1:8000/api';
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  /**
   * Get authentication headers
   */
  getAuthHeaders() {
    const token = localStorage.getItem('auth_token');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  }

  /**
   * Get combined headers
   */
  getHeaders(customHeaders = {}) {
    return {
      ...this.defaultHeaders,
      ...this.getAuthHeaders(),
      ...customHeaders,
    };
  }

  /**
   * Handle API response
   */
  async handleResponse(response) {
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }
      
      return data;
    }
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response;
  }

  /**
   * Generic GET request
   */
  async get(endpoint, params = {}) {
    const url = new URL(`${this.baseURL}${endpoint}`);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    const response = await fetch(url, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    return this.handleResponse(response);
  }

  /**
   * Generic POST request
   */
  async post(endpoint, data = {}) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });

    return this.handleResponse(response);
  }

  /**
   * Generic PUT request
   */
  async put(endpoint, data = {}) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });

    return this.handleResponse(response);
  }

  /**
   * Generic DELETE request
   */
  async delete(endpoint) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });

    return this.handleResponse(response);
  }

  /**
   * PATCH request
   */
  async patch(endpoint, data = {}) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'PATCH',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });

    return this.handleResponse(response);
  }

  /**
   * File upload request (multipart/form-data)
   */
  async uploadFile(endpoint, formData) {
    const headers = {
      ...this.getAuthHeaders(),
      // Don't set Content-Type for FormData - browser will set it with boundary
    };

    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: headers,
      body: formData,
    });

    return this.handleResponse(response);
  }

  /**
   * File upload with PUT method (for updates)
   */
  async updateWithFile(endpoint, formData) {
    const headers = {
      ...this.getAuthHeaders(),
      // Don't set Content-Type for FormData
    };

    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST', // Laravel requires POST with _method=PUT for file uploads
      headers: headers,
      body: formData,
    });

    return this.handleResponse(response);
  }

  // ==================== AUTH METHODS ====================
  
  /**
   * User login
   */
  async login(credentials) {
    return this.post('/auth/login', credentials);
  }

  /**
   * User logout
   */
  async logout() {
    return this.post('/auth/logout');
  }

  /**
   * Get user profile
   */
  async getUserProfile() {
    return this.get('/auth/profile');
  }

  // ==================== PRODUCT METHODS ====================
  
  /**
   * Get all products (public)
   */
  async getProducts(params = {}) {
    return this.get('/products', params);
  }

  /**
   * Get single product (public)
   */
  async getProduct(id) {
    return this.get(`/products/${id}`);
  }

  /**
   * Get featured products (public)
   */
  async getFeaturedProducts() {
    return this.get('/products/featured');
  }

  /**
   * Get admin products (protected)
   */
  async getAdminProducts(params = {}) {
    return this.get('/admin/products', params);
  }

  /**
   * Create new product (admin)
   */
  async createProduct(productData) {
    if (productData instanceof FormData) {
      return this.uploadFile('/admin/products', productData);
    }
    return this.post('/admin/products', productData);
  }

  /**
   * Update product (admin)
   */
  async updateProduct(id, productData) {
    if (productData instanceof FormData) {
      productData.append('_method', 'PUT'); // Laravel method spoofing
      return this.updateWithFile(`/admin/products/${id}`, productData);
    }
    return this.put(`/admin/products/${id}`, productData);
  }

  /**
   * Delete product (admin)
   */
  async deleteProduct(id) {
    return this.delete(`/admin/products/${id}`);
  }

  /**
   * Toggle product featured status (admin)
   */
  async toggleProductFeatured(id) {
    return this.patch(`/products/${id}/toggle-featured`);
  }

  // ==================== EMAIL METHODS ====================
  
  /**
   * Send contact form email
   */
  async sendContactEmail(contactData) {
    return this.post('/contact', contactData);
  }

  /**
   * Subscribe to newsletter
   */
  async subscribeNewsletter(email) {
    return this.post('/newsletter/subscribe', { email });
  }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService;
