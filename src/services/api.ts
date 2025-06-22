import axios from "axios";
import { Image } from "../types";

interface SearchPhotosResponse {
  results: Image[];
  total_pages: number;
}

export const searchPhotos = async (
  topic: string,
  page: number = 1
): Promise<SearchPhotosResponse> => {
  const response = await axios.get<SearchPhotosResponse>(
    "https://api.unsplash.com/search/photos/",
    {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`,
      },
      params: {
        query: topic,
        per_page: 15,
        orientation: "landscape",
        page: page,
      },
    }
  );
  return {
    results: response.data.results,
    total_pages: response.data.total_pages,
  };
};
