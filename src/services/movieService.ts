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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjNjNTMyNjU3MmE5Yzk0NTdiODhkZDg1NjgwMGQ0OCIsIm5iZiI6MTc2NzM0NTcwOS4zNTYsInN1YiI6IjY5NTc4ZTJkNmFmOGEyNmNkYWMzNzU4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QM20psvuzkQPsK-7m7EbwenJRiEkWgZptBgKZJqd3vM`,
      },
    }
  );
  return response.data.results;
};
