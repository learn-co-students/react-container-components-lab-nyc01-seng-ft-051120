import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: '',
    reviews: []
  };

  handleSearchInputChange = event =>
    this.setState({ searchTerm: event.target.value })

  handleSubmit = event => {
    event.preventDefault();

    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ reviews: res.response })
          console.log(this.state)
      })
  };

  render() {
    console.log(this.state)
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input
            id="search-input"
            type="text"
            style={{ width: 300 }}
            onChange={this.handleSearchInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews ?
        <MovieReviews id={"search"}reviews={this.state.reviews}/> :
         null }
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
