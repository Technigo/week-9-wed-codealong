import React from 'react'
import { Article } from 'components/Article'

import newsJson from './news.json'

export const App = () => {
  return (
    <div>
      {newsJson.articles.map((article) => (
        <Article
          key={article.title + article.publishedAt}
          title={article.title}
          author={article.author}
          description={article.description} />
      ))}
    </div>
  )
}
