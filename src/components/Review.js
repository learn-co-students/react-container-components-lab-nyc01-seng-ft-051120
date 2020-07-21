import React from 'react'

const Review = (props) => {

  if (props.id){
   console.log(props.review)
     const {headline, lead_paragraph, news_desk, pub_date, section_name, source, web_url} = props.review
     return (
       <div className="review">
       <h1>{headline.main}</h1>
       <p>date published: {pub_date}</p>
         <header>
         <p>{lead_paragraph}</p>
           <a className="review-link" href={web_url}>
             {web_url}
           </a>
           <br/>
           <span className="author">By: {source}</span>
         </header>
       </div>
       )
 } else {
const { byline, date_updated, headline, link, multimedia, summary_short } = props.review
return (
  <div className="review">
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
  </div>
  )
 }
}

export default Review
