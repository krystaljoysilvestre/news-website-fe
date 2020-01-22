import axios from 'axios';
import config from '../config';

export const fetchNews = () => {
  return axios.get(`${config.mwUrl}/news`);
};

export const fetchNewsByCategory = category => {
  return axios.get(`${config.mwUrl}/news?category=${category}`);
};

export const fetchNewsBySource = source => {
  return axios.get(`${config.mwUrl}/news?sources=${source}`);
};

export const fetchNewsSources = category => {
  return axios.get(`${config.mwUrl}/sources${category ? `?category=${category}` : ''}`);
};

export const searchNews = key => {
  return axios.get(`${config.mwUrl}/news?q=${key}`);
};