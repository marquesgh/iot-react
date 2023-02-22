import axios from 'axios';
import { API_BASE_URL } from '../config';

const messageService = {
  getAll: async (page = 1) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/messages`, {
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

export default messageService;
