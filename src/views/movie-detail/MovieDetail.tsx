//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'reactstrap';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

//  Region Import Constants

//  Region Import Interfaces
import { MovieDetailData, MovieDetailProps } from './MovieDetail.interfaces';

//  Region Import Redux Action Type and Redux Action

//  Region Import Helper Function
import { getMovieDetail } from './helpers';

//  Region Import Custom Hook
import { useConfigMovieSelector } from '../../custom-hook';

//  Region Import Components/Cards
import { Favorite, PreviewImage } from '../../components';

//  Region Import Assets

//  Region Import Style
import './MovieDetail.scss';

function MovieDetail(props: MovieDetailProps) {
  //  useDispatch declaration

  //  useState declaration
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<MovieDetailData | null>(null);

  //  props object destruction

  //  useCustomHook
  const { result } = useConfigMovieSelector();

  //  onHandleFunction declaration

  //  useEffect declaration
  useEffect(() => {
    const getData = async () => {
      try {
        const id = props.match.params.movieId;

        const result = await getMovieDetail(id);

        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };

    getData();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  //  return element
  if (isLoading || !result) {
    return (
      <div className="h-100 d-flex align-items-center justify-content-center">
        <Spinner />
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        Something went wrong when get the detail of this movie. Please try again later.
      </div>
    );
  }

  const posterSize = "original";
  const poster = `${result.images.secure_base_url}${posterSize}/${data.poster_path}`;


  return (
    <div
      className="p-5 movie-detail"
    >
      <Row className="mb-3">
        <Col
          lg={2} md={2} sm={2} xs={12}
        >
          <div
            className="d-flex align-items-center cursor-pointer"
            onClick={props.history.goBack}
          >
            <i className="fa fa-chevron-circle-left me-2" style={{ fontSize: 50 }} />
            Back to List
          </div>
        </Col>
      </Row>

      <Row>
        <Col
          lg={4}
          md={4}
          sm={4}
          xs={12}
          className="poster-movie p-0"
        >
          <div>
            <PreviewImage
              fileName={data.title}
              path={poster}
            />
          </div>

          <div className="favorite-wrap">
            <Favorite data={{ ...data, genre_ids: [] }} />
          </div>
        </Col>

        <Col
          lg={7}
          md={7}
          sm={7}
          xs={12}
          className="p-0 ms-4"
        >
          <div>
            <div>
              <b>Title</b>
            </div>

            <div>
              {data.title}
            </div>
          </div>

          <div>
            <div>
              <b>
                Rating
              </b>
            </div>

            <div>
              {data.vote_average}
            </div>
          </div>

          <div>
            <div>
              <b>
                Release on
              </b>
            </div>

            <div>
              {moment(data.release_date).format("DD MMM YYYY")}
            </div>
          </div>

          <div>
            <div>
              <b>
                Genres
              </b>
            </div>

            <div>
              {data.genres.map(item => item.name).join(', ')}
            </div>
          </div>

          <div>
            <div>
              <b>
                Overview
              </b>
            </div>

            <div>
              {data.overview}
            </div>
          </div>

          <div>
            <div>
              <b>
                Production Companies
              </b>
            </div>

            <div>
              {data.production_companies.map(item => item.name).join(', ')}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default withRouter(MovieDetail);
