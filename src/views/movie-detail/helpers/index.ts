import { apiKey, movieDetailEndpoint } from "../../../constants";
import { HttpService, qsStringify } from "../../../helpers";
import { MovieDetailData } from "../MovieDetail.interfaces";

export async function getMovieDetail(id: string) {
  const queryString = qsStringify({
    api_key: apiKey,
    language: "en-US",
  });

  const result = await HttpService.get<MovieDetailData>(`${movieDetailEndpoint}/${id}${queryString}`);

  return result.data;
}
