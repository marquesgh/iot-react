import axios from 'axios';
import { API_BASE_URL } from '../config';

const faqService = {
  getActive: async (page = 1) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/equipment-active`, {
        params: {
          page,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getInactive: async (page = 1) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/equipment-status`, {
        params: {
          page,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getSituation: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/equipment-situation`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default faqService;
