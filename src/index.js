
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewsPage from './components/NewsPage';
import RecruitmentInfo from './components/RecruitmentInfo';
import RecruitmentInfoPage from './components/RecruitmentInfoPage';
import Introduction from './components/Introduction';
import Contact from './components/Contact';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';


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
        <Route path="/news" component={NewsPage} />
        <Route path="/recruitment" component={RecruitmentInfoPage} />
        <Route path="/introduction" component={Introduction}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

