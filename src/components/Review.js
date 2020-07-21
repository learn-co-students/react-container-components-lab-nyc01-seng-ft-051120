import React from 'react'

const Review = (props) => {
  const { byline, date_updated, headline, link, multimedia, summary_short } = props.review
return (
  <div key={""} className="review">
  <h1>{headline}</h1>
  <p>{date_updated}</p>
  <img src={multimedia.src} alt={multimedia.type}/>
    <header>
    <p>{summary_short}</p>
      <a className="review-link" href={link.url}>
        {link.suggested_link_text}
      </a>
      <br/>
      <span className="author">By: {byline}</span>
    </header>
    <blockquote>{""}</blockquote>
  </div>
 )
}

export default Review
