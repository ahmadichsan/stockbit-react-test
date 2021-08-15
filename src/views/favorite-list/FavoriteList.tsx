//  Region Import External Lib (e.g React, Reactstrap, etc)
import React from 'react';
import { Col, Row } from 'reactstrap';

//  Region Import Constants

//  Region Import Interfaces

//  Region Import Redux Action Type and Redux Action

//  Region Import Helper Function

//  Region Import Custom Hook
import { useFavoriteMoviesSelector } from '../../custom-hook';

//  Region Import Components/Cards
import { MovieCard } from '../../components';

//  Region Import Assets

//  Region Import Style
import './FavoriteList.scss';

export default function FavoriteList() {
  //  useDispatch declaration

  //  useState declaration

  //  props object destruction

  //  useCustomHook
  const { favoriteMovies } = useFavoriteMoviesSelector();

  //  onHandleFunction declaration

  //  useEffect declaration

  //  return element
  return (
    <div className="p-5">
      <Row className="mb-3">
        <Col>
          <div>
            My Favorites: {favoriteMovies.result.length} movies
          </div>
        </Col>
      </Row>

      <Row className="m-0 p-0">
        {favoriteMovies.result.map(item => {
          return (
            <Col
              md={2}
              lg={2}
              sm={2}
              xs={12}
              key={item.id}
              className="m-0 p-0 border-radius-10px"
            >
              <MovieCard data={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
