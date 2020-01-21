import React from 'react';
import moment from 'moment';

import * as N from './style';

const News = props => {
  const { articles, collapse } = props;
  console.log("ARTICLES ===", articles);

  const recentArticles = articles.sort((x, y) => {
    return x.publishedAt - y.publishedAt
  });

  return (
    <N.Wrapper>
      <N.Header><b>Top</b> headlines</N.Header>

      <N.Container collapse={collapse}>
        {recentArticles.map((article, index) => (
          <N.Item
            recent={index === 0}
            hasImage={article.urlToImage}
            className="animated slideInUp"
            transition={index}
            id={`news-article-${index}`}
            key={index}
          >
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} />
            )}
            <N.Caption
              href={article.url}
              target="_blank"
            >
              <N.Title>{article.title}</N.Title>
              <p>{moment(article.publishedAt).fromNow()}</p>
              <p>{article.description}</p>
            </N.Caption>
          </N.Item>
        ))}
      </N.Container>
    </N.Wrapper>
  );
}

export default News;