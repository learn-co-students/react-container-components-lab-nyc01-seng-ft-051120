import React from 'react';
import ReactDOM from 'react-dom';

import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';
import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);
