import { ConfigMovies, MovieSearch } from "../interfaces";

import { apiKey, searchMovieEndpoint, movieConfigEndpoint } from "../constants";

import { qsStringify } from "./Helper";
import { HttpService } from "./HttpService";

export async function getDataSearch(query: string, page: number) {
  const queryString = qsStringify({
    api_key: apiKey,
    query,
    page,
    language: "en-US",
  });

  const result = await HttpService.get<MovieSearch>(`${searchMovieEndpoint}${queryString}`);

  return result.data;
}

export async function getMovieConfig() {
  const queryString = qsStringify({
    api_key: apiKey,
  });

  const result = await HttpService.get<ConfigMovies>(`${movieConfigEndpoint}${queryString}`);

  return result.data;
}
