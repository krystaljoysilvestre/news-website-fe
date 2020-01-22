import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchNewsArticlesBySource } from '../../actions/newsAction';

import * as NS from './style';

class NewsSources extends Component {
  render() {
    const { news, fetchNewsArticlesBySource } = this.props;
    const { sources } = news;

    return (
      <div>
        <NS.Header>
          Sources
        </NS.Header>

        <div style={{ paddingTop: '100px' }}>
          {sources.length > 0 && sources.map((source, index) => (
            <NS.Item onClick={() => fetchNewsArticlesBySource(source.id)} current={index === 1} key={index}>
              <NS.Source>{source.name}</NS.Source>
              <NS.Category>{source.category}</NS.Category>
            </NS.Item>
          ))}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchNewsArticlesBySource
    },
    dispatch
  );
}

function mapStateToProps({ news }) {
  return {
    news
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsSources);