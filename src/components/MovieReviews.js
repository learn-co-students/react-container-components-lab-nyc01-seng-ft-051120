import React from 'react'
import Review from './Review'
import SearchReview from './Review'
const MovieReviews = (props) => {

let reviews = props.reviews
  if (props.reviews.docs){
     reviews = props.reviews.docs
   }

  return(
    reviews.map((review, index) =>
    <Review id={props.id} key={index} review={review}/>
    )
  )
}


export default MovieReviews
