
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import BookTracking from './components/BookTracking';
import Readable from './components/Readable';
import MobileFlashCard from './components/MobileFlashCard';
import MemoryGame from './components/MemoryGame';
import Neighborhoodmap from './components/Neighborhoodmap';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/booktracking" component={BookTracking} />
        <Route path="/readable" component={Readable} />
        <Route path="/memorygame" component={MemoryGame} />
        <Route path="/neighborhoodmap" component={Neighborhoodmap} />
        <Route path="/mobileflashcard" component={MobileFlashCard} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

