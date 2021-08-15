//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { useEffect, useState } from 'react';
import { Modal } from 'reactstrap';

//  Region Import Constants

//  Region Import Interfaces
import { MovieCardProps } from './MovieCard.interfaces';

//  Region Import Redux Action Type and Redux Action

//  Region Import Helper Function

//  Region Import Custom Hook

//  Region Import Components/Cards
import { MovieItem } from '../movie-item';

//  Region Import Assets

//  Region Import Style
import './MovieCard.scss';

export default function MovieCard(props: MovieCardProps) {
  const { data } = props;

  const [isPosterMode, setIsPosterMode] = useState(false);
  const [key, setKey] = useState(new Date().getTime());

  useEffect(() => {
    setKey(new Date().getTime());
  }, [isPosterMode]);

  return (
    <>
      <Modal
        isOpen={isPosterMode}
        toggle={() => setIsPosterMode(false)}
        contentClassName="border-radius-10px"
      >
        <MovieItem
          data={data}
          isPosterMode={isPosterMode}
          key={key}
          setIsPosterMode={value => setIsPosterMode(value)}
          isInsideModal
        />
      </Modal>

      <MovieItem
        data={data}
        isPosterMode={isPosterMode}
        setIsPosterMode={value => setIsPosterMode(value)}
      />
    </>
  );
}
