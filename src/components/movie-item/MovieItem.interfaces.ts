import { RouteComponentProps } from "react-router-dom";
import { MovieObject } from "../../interfaces";

export interface MovieItemProps extends RouteComponentProps {
  data: MovieObject;
  isPosterMode: boolean;
  isInsideModal?: boolean;
  setIsPosterMode(value: boolean): void;
}
