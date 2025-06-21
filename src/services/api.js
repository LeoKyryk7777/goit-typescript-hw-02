import axios from "axios";

export const searchPhotos = async (topic, page = 1) => {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`,
    },
    params: {
      query: topic,
      per_page: 15,
      orientation: "landscape",
      page: page,
    },
  });
  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
};
