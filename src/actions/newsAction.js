import { fetchNews, fetchNewsByCategory, fetchNewsSources, fetchNewsBySource, searchNews } from '../api/news';

export const fetchNewsArticles = () => dispatch => {
  return fetchNews().then(response => {
    dispatch({
      type: 'FETCH_ARTICLES',
      payload: {
        articles: response.data.articles
      }
    })
  })
}

export const fetchSources = category => dispatch => {
  return fetchNewsSources(category).then(response => {
    dispatch({
      type: 'FETCH_SOURCES',
      payload: {
        sources: response.data.sources
      }
    })
  })
}

export const fetchNewsArticlesBySource = source => dispatch => {
  return fetchNewsBySource(source).then(response => {
    dispatch({
      type: 'FETCH_ARTICLES_BY_SOURCE',
      payload: {
        source: source,
        articles: response.data.articles
      }
    })
  })
}

export const fetchNewsArticlesByCategory = category => dispatch => {
  return fetchNewsByCategory(category).then(response => {
    dispatch(fetchSources(category));
    dispatch({
      type: 'FETCH_ARTICLES_BY_CATEGORY',
      payload: {
        category: category,
        articles: response.data.articles
      }
    })
  })
}

export const searchArticles = key => dispatch => {
  return searchNews(key).then(response => {
    dispatch({
      type: 'SEARCH_ARTICLES',
      payload: {
        search: key,
        articles: response.data.articles
      }
    })
  })
}
