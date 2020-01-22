/* eslint-disable */
import appDevConfig from './app.dev.config.json';
import appProdConfig from './app.prod.config.json';

let appConfig = {};

switch (process.env.location) {
  case 'production':
    appConfig = appProdConfig;
    break;

  default:
    appConfig = appDevConfig;
}

const config = Object.assign({}, appConfig);

export default config;
