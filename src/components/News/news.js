import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import * as N from './style';

class News extends Component {
  render() {
    const { news, collapse } = this.props;
    const { articles } = news;

    return (
      <N.Wrapper>
        <N.Header><b>Top</b> headlines</N.Header>

        <N.Container collapse={collapse}>
          {articles && articles.length > 0 && articles.map((article, index) => (
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
                <N.CaptionContainer>
                  <N.Title>{article.title}</N.Title>
                  <N.Source>{article.source.name} · {moment(article.publishedAt).fromNow()}</N.Source>
                  <N.Description>{article.description}</N.Description>
                </N.CaptionContainer>
              </N.Caption>
            </N.Item>
          ))}
        </N.Container>
      </N.Wrapper>
    );
  }
}

function mapStateToProps({ news }) {
  return {
    news
  };
}

export default connect(mapStateToProps)(News);