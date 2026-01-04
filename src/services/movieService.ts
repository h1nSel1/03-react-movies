import type { Movie } from "../types/movie";
import axios from "axios";

interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<FetchMoviesResponse>(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        query: query,
        language: "en-US",
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    }
  );
  return response.data.results;
};
