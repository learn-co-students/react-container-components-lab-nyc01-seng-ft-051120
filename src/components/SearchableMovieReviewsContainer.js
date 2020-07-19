import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component{

  state = {
    reviews: [],
    searchTerm: ' '
  }

  inputHandler = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  submitMe = (e) => {
    e.preventDefault();
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ&query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviews: data.results
        })
      })
      this.setState({
        searchTerm: ' '
      })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <h1>Search Movies</h1>
        <form onSubmit={this.submitMe}>
        <input onChange={this.inputHandler} type="text" placeholder="Search Movie" value={this.state.searchTerm}/>
        </form>
        {typeof this.state.reviews === 'object' &&
    this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
