
import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
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
import GoogleMap from './components/GoogleMap';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto Slab']
  }
});

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
        <Route path="/projects/booktracking" component={BookTracking} />
        <Route path="/projects/readable" component={Readable} />
        <Route path="/projects/memorygame" component={MemoryGame} />
        <Route path="/projects/neighborhoodmap" component={Neighborhoodmap} />
        <Route path="/projects/mobileflashcard" component={MobileFlashCard} />
        <Route path="/thanh-location" component={GoogleMap} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/home" component={App} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();


