import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const fetchOpportunities = async (params: Record<string, string | undefined> = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/opportunities`, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching opportunities:", error);
    throw error;
  }
};
