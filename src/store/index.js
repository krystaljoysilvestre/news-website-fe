import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';

import { fetchNewsArticles, fetchSources } from '../actions/newsAction';
import rootReducer from '../reducers/rootReducer';

const configureStore = preloadedState => {
  const middlewares = [thunkMiddleware];
  const persistConfig = {
    key: 'root',
    storage
  };

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    preloadedState,
    middlewareEnhancer
  );
  const persistor = persistStore(store, null, () => {
    store.dispatch(fetchNewsArticles());
    store.dispatch(fetchSources());
  });

  return { store, persistor };
};

export default configureStore;
