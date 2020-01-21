import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { simpleAction } from './actions/simpleAction';

import PriceIndexBar from './components/PriceIndexBar';
import NavigationBar from './components/NavigationBar';
import NewsSources from './components/NewsSources';
import News from './components/News';

import * as A from './style';

class App extends Component {
  state = {
    isSideBarCollapsed: true,
    isNewsArticlesCollapsed: true
  };

  toggleSideBar = () => {
    this.setState({
      isSideBarCollapsed: !this.state.isSideBarCollapsed
    })
  };

  toggleNewsArticles = () => {
    const { isNewsArticlesCollapsed } = this.state;

    this.setState({
      isNewsArticlesCollapsed: !isNewsArticlesCollapsed
    });

    if (isNewsArticlesCollapsed) {
      const nextArticle = document.getElementById('news-article-5');
      nextArticle.scrollIntoView({ behavior: 'smooth' });
    } else {
      const recentArticle = document.getElementById('news-article-0');
      recentArticle.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    const { isSideBarCollapsed, isNewsArticlesCollapsed } = this.state;
    const { news } = this.props;

    return (
      <A.Wrapper>
        <A.SideBar>
          <A.Logo>
            K
          </A.Logo>
          <PriceIndexBar />
        </A.SideBar>
        <A.CollapsiblePanel collapse={isSideBarCollapsed}>
          <NewsSources />
        </A.CollapsiblePanel>
        <A.Container collapse={isSideBarCollapsed}>
          <A.TopBar>
            <A.Collapse onClick={this.toggleSideBar}>
              <div />
              <div />
            </A.Collapse>
            <NavigationBar />
          </A.TopBar>
          <News articles={news.articles} collapse={isNewsArticlesCollapsed} />
        </A.Container>
        <A.MoreNews onClick={this.toggleNewsArticles}>
          {isNewsArticlesCollapsed ? '+' : '-'}
        </A.MoreNews>
      </A.Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
