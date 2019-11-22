import React from 'react'
import { Eye } from 'icons/Eye'
import './article.css'

// background - image: url(http://image.jpg);
export const Article = (props) => (
  <div
    className="article"
    style={{ backgroundImage: `url(${props.article.urlToImage})` }}>
    <h1>{props.article.title}</h1>

    <div className="moreDetails">
      <a href={props.article.url}>
        <Eye />
      </a>
    </div>
  </div>
)
