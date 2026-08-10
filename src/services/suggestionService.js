import axios from "axios";

const API_BASE_URL = "https://searchit-backend.onrender.com";

export const getSuggestions = async (query) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/search/suggestions`,
    {
      params: { query },
    }
  );

  return response.data;
};