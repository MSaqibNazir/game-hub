import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchData } from "./useData";
import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],

    queryFn: () =>
      apiClient.get<FetchData<Genre>>("/genres").then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000, // 24 h
    initialData: { count: genres.length, results: genres },
  });

export default useGenre;
