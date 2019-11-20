import React from 'react'
import './article.css'

export const Article = (props) => (
  <div className="article">
    <h1>{props.title}</h1>

    <div className="moreDetails">
      <h3>{props.author}</h3>
      <p>{props.description}</p>
    </div>
  </div>
)
