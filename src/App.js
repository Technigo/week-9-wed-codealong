import React from 'react'
import { Article } from 'components/Article'
import './app.css'
import newsJson from './news.json'

export const App = () => {
  return (
    <div className="list">
      {newsJson.articles.map((article) => (
        <Article
          key={article.title + article.publishedAt}
          article={article} />
      ))}
    </div>
  )
}
