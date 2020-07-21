import React from 'react'
import Review from './Review'
const MovieReviews = (props) => {
  return(
    props.reviews.map((review, index) =>
    <Review key={index} review={review}/>
  )
  )
}


export default MovieReviews
