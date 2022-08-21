import React from 'react';
import './App.css';
import { Versus } from './components/Versus/Versus';
import { MatchStatistics } from './components/MatchStatistics/MatchStatistics';
import { AllStatistics } from './components/AllStatistics/AllStatistics';

export const App = (): JSX.Element => {
  return (
      <React.Fragment> 
        <Versus></Versus>
        <MatchStatistics></MatchStatistics>
        <AllStatistics></AllStatistics>
      </React.Fragment>
  )
}

 
