
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
import GoogleMap from './components/GoogleMap';
import Navigator from './components/Navigator';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Project from './components/Project';
import Features from './components/Features';
import Footer from './components/Footer';
import Messages from './components/Messages';
import Home from './components/Home';
//import WebFont from 'webfontloader';

// WebFont.load({
//   google: {
//     families: ['Roboto Slab', 'Raleway', 'Lato']
//   }
// });

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
      <div className="main">
        <Navigator />
        <Route exact path="/" component={Home} />
        <Route exact path="/about-me" component={AboutMe} />
        <Route exact path="/thanh-locations" component={GoogleMap} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:project" component={Project} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/messages" component={Messages} />
        <Footer/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();


