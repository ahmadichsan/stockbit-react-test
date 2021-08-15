import { RouteComponentProps } from "react-router-dom";
import { MovieObject, MovieSearch } from "../../interfaces";

export type LandingPageProps = RouteComponentProps;

export interface LandingPageState {
  data: MovieSearch | null;
  movies: MovieObject[];
  page: number;
  isLoading: boolean;
  query: string;
}
