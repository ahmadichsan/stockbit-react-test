import { RouteComponentProps } from "react-router-dom";
import { MovieObject } from "../../interfaces";

export type AutoCompleteSearchProps = RouteComponentProps

export interface AutoCompleteSearchState {
  query: string;
  suggestions: MovieObject[];
  page: number;
  totalPage: number;
  isLoading: boolean;
  isInputFocused: boolean;
}
