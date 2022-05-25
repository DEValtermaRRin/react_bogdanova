import React, { FC } from 'react';
import './LoadingPage.scss';

export const LoadingPage: FC = () => (
  <div className="wrapper-loading">
    <div className="loading">
      <div className="circle blue"></div>
      <div className="circle yellow"></div>
      <div className="circle orange"></div>
      <div className="circle red"></div>
    </div>
  </div>
);
