import axios from 'axios';
import { API_BASE_URL } from '../config';

const faqService = {
  getAll: async (page = 1) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/faqs`, {
        params: {
          page,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default faqService;
