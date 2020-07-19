// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
  return(

    <div className="review-list">
     {props.reviews.map((review, index) =>
       <div key={index} className="container">
         <h2>{review.display_title}</h2>

         <h3>{review.headline}</h3>
         <h4>{review.byline}</h4>
         <h5>{review.date_updated}</h5>
         <p>{review.summary_short}</p>
         <a href={review.link.url}>Movie Review Here</a>
       </div>
      )}
    </div>
  )
}

export default MovieReviews
