import React, { FC, useEffect, useState } from 'react';

import { LoadingPage } from 'src/components/LoadingPage';
import { API } from 'src/constants';

import style from './Pictures.module.scss';

export type Picture = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export const Pictures: FC = () => {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getFetchPictures = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error('something went wrong');
      }
      const data = await response.json();
      setPictures(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFetchPictures();
  }, []);

  return (
    <>
      <h2 className={style.pictures__title}>Pictures</h2>
      {loading && <LoadingPage />}
      <div className={style.pictures__items}>
        {pictures.map((picture) => (
          <div key={picture.id} className={style.pictures__item}>
            <img src={picture.download_url} alt={picture.author} />
          </div>
        ))}

        <button className={style.reload} onClick={() => getFetchPictures()}>
          reload
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};
