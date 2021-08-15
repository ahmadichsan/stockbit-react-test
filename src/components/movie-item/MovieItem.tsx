//  Region Import External Lib (e.g React, Reactstrap, etc)
import React from 'react';
import { Card, CardBody } from 'reactstrap';
import classnames from 'classnames';
import { Link, withRouter } from 'react-router-dom';

//  Region Import Constants

//  Region Import Interfaces
import { MovieItemProps } from './MovieItem.interfaces';

//  Region Import Redux Action Type and Redux Action

//  Region Import Helper Function

//  Region Import Custom Hook
import { useConfigMovieSelector } from '../../custom-hook';

//  Region Import Components/Cards
import { PreviewImage } from '../preview-image';
import { ReactTooltipWrapper } from '../react-tooltip-wrapper';
import { Favorite } from '../favorite';

//  Region Import Assets

//  Region Import Style
import './MovieItem.scss';

function MovieItem(props: MovieItemProps) {
  const { data, isPosterMode, setIsPosterMode, isInsideModal } = props;

  const { result } = useConfigMovieSelector();

  /**
   * TODO ICHSAN
   * nanti cek loading spinner nya
   */
  if (!result) return <div>Waiting for movie config...</div>;

  const posterSize = isPosterMode ? "original" : "w185";
  const poster = `${result.images.secure_base_url}${posterSize}/${data.poster_path}`;

  const showPoster = () => {
    setIsPosterMode(true);
  };

  const idTooltip = `id${(data.id || '').toString()}`;

  return (
    <Card
      className={classnames(
        "movie-item border-radius-10px",
        {
          "me-3 mb-4": !isInsideModal,
          "border-0": isInsideModal,
        }
      )}
    >
      <CardBody
        className="p-0 w-100"
      >
        <CardBody
          className={classnames(
            "p-0 poster-container",
            {
              "cursor-pointer": !isPosterMode,
              "poster-mode": isInsideModal,
            }
          )}
          onClick={showPoster}
        >
          <PreviewImage
            path={poster}
            fileName={data.title}
            className={classnames(
              "w-100 border-radius-10px",
              {
                "limit-height fit-img": isPosterMode,
              },
              {
                "height-img": !isInsideModal,
              }
            )}
          />

          <div className="favorite-wrap">
            <Favorite data={data} />
          </div>
        </CardBody>

        <CardBody className="font-size-16">
          <div className="ellipsis-one-line">
            <span data-for={idTooltip} data-tip={data.title}>
              {data.title}
            </span>
          </div>
          <ReactTooltipWrapper
            id={idTooltip}
          />

          <div>
            Rating: {data.vote_average}
          </div>

          <span>
            <Link
              className="text-end mt-3 font-size-14 d-flex align-items-center justify-content-end"
              to={`/movie/${data.id}`}
            >
              About this movie

              <i className="fa fa-arrow-circle-right ms-2 font-size-16" />
            </Link>
          </span>
        </CardBody>
      </CardBody>
    </Card>
  );
}

export default withRouter(MovieItem);
