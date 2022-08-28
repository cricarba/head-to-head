import React from 'react';
import './App.css';
import { Versus } from './sections/Versus/Versus';
import { MatchStatistics } from './sections/MatchStatistics/MatchStatistics';
import { AllStatistics } from './sections/AllStatistics/AllStatistics';

export const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="versus">
          <Versus></Versus>
        </div>
        <div className="match-statistics ">
          <MatchStatistics></MatchStatistics>
        </div>
        <div className="all-statistics">
          <AllStatistics></AllStatistics>
        </div>
      </div>



    </React.Fragment>
  )
}


