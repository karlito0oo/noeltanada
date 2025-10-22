const API_URL = "http://localhost:8000/api";

export const catalogueService = {
  /**
   * Get all catalogues
   */
  async getAllCatalogues() {
    try {
      const res = await fetch(`${API_URL}/catalogues`);
      if (!res.ok) throw new Error("Error fetching catalogues");
      return await res.json();
    } catch (error) {
      console.error("Error fetching catalogues:", error);
      throw error;
    }
  },

  /**
   * Get single catalogue
   */
  async getCatalogue(id) {
    try {
      const res = await fetch(`${API_URL}/catalogues/${id}`);
      if (!res.ok) throw new Error("Error fetching catalogue");
      return await res.json();
    } catch (error) {
      console.error("Error fetching catalogue:", error);
      throw error;
    }
  },

  /**
   * Create new catalogue (admin only)
   */
  async createCatalogue(catalogueData) {
    try {
      const token = localStorage.getItem("auth_token");
      const res = await fetch(`${API_URL}/admin/catalogues`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body:
          catalogueData instanceof FormData
            ? catalogueData
            : JSON.stringify(catalogueData),
      });
      if (!res.ok) throw new Error("Error creating catalogue");
      return await res.json();
    } catch (error) {
      console.error("Error creating catalogue:", error);
      throw error;
    }
  },

  /**
   * Update catalogue (admin only)
   */
  async updateCatalogue(id, catalogueData) {
    try {
      const token = localStorage.getItem("auth_token");
      let headers = {
        Authorization: `Bearer ${token}`,
      };
      let body = catalogueData;
      if (!(catalogueData instanceof FormData)) {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify(catalogueData);
      }
      const res = await fetch(`${API_URL}/admin/catalogues/${id}`, {
        method: "PUT",
        headers,
        body,
      });
      if (!res.ok) throw new Error("Error updating catalogue");
      return await res.json();
    } catch (error) {
      console.error("Error updating catalogue:", error);
      throw error;
    }
  },

  /**
   * Delete catalogue (admin only)
   */
  async deleteCatalogue(id) {
    try {
      const token = localStorage.getItem("auth_token");
      const res = await fetch(`${API_URL}/admin/catalogues/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Error deleting catalogue");
      return await res.json();
    } catch (error) {
      console.error("Error deleting catalogue:", error);
      throw error;
    }
  },
};
