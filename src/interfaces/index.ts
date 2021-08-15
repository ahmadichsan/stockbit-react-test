import { History } from 'history';
import React from 'react';
import { SweetAlertProps } from 'react-bootstrap-sweetalert/dist/types';
import { RouteComponentProps } from 'react-router-dom';

export interface KeyValue {
  [key: string]: any;
}

export interface ReduxState<Payload = any, Result = any> {
  fetch: boolean;
  payload: Payload;
  result: Result;
  error?: string;
  action: string;
}

export interface ReduxAction extends KeyValue {
  type: string;
  error?: string;
  data: any;
}

export interface HistoryProps {
  history: History;
}

export interface ColSizes {
  md: number;
  lg: number;
  sm: number;
  xs: number;
}

export interface SweetAlertConfig extends Omit<SweetAlertProps, 'onConfirm'> {
  children: React.ReactNode | string;
  confirmAction?: string;
  cancelAction?: string;
}

export interface RoutePath {
  path: string;
  name: string;
  exact: boolean;
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

export interface MovieObject {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieSearch {
  page: number;
  results: MovieObject[];
  total_pages: number;
  total_results: number;
}

export interface QuerySearch { query?: string }

export interface ConfigMoviesImage {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: string[];
  logo_sizes: string[];
  poster_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
}

export interface ConfigMovies {
  images: ConfigMoviesImage;
  change_keys: string[];
}
