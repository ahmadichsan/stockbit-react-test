//  Region Import External Lib (e.g React, Reactstrap, etc)
import React from 'react';
import classnames from 'classnames';

//  Region Import Constants

//  Region Import Interfaces
import { FavoriteProps } from './Favorite.interfaces';

//  Region Import Redux Action Type and Redux Action

//  Region Import Helper Function

//  Region Import Custom Hook
import { useFavoriteMoviesSelector } from '../../custom-hook';

//  Region Import Components/Cards

//  Region Import Assets

//  Region Import Style
import './Favorite.scss';

export default function Favorite(props: FavoriteProps) {
  const { data } = props;

  const { addToFavorites, favoriteMovies, removeFavorites } = useFavoriteMoviesSelector();

  const isMovieFavorite = favoriteMovies.result.find(item => item.id === data.id);

  const handleAddToFavorite = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();

    if (isMovieFavorite) {
      removeFavorites(data);
      return;
    }

    addToFavorites(data);
  };

  return (
    <div
      className="favorite cursor-pointer"
      onClick={handleAddToFavorite}
    >
      <i
        className={classnames(
          "fa fa-heart",
          {
            highlighted: isMovieFavorite,
          }
        )}
      />
    </div>
  );
}
