import React, { useState } from 'react';
import classnames from 'classnames';

import { PreviewImageProps } from './PreviewImage.interfaces';

import './PreviewImage.scss';

export default function PreviewImage(props: PreviewImageProps) {
  const { path, fileName, className } = props;

  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const toggleLoading = () => setLoading(false);
  const onError = () => {
    setIsError(true);
    setLoading(false);
  };

  return (
    <div>
      <div className={isLoading ? 'display-block' : 'display-none'}>
        <div className={className} id="loading-preview" />
      </div>

      <div className={!isLoading && isError ? 'display-block' : 'display-none'}>
        <div className={className} id="error-img" />
      </div>

      <div className={isLoading || isError ? 'display-none' : 'display-block'}>
        <img
          src={path}
          alt={fileName}
          className={classnames(
            "img-prev",
            className,
          )}
          onLoad={toggleLoading}
          onError={onError}
        />
      </div>
    </div>
  );
}
