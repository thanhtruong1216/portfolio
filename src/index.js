
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewsDetail from './components/NewsDetail';
import RecruitmentInfo from './components/RecruitmentInfo';
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
        <Route path="/news" component={NewsDetail} />
        <Route path="/recruitment" component={RecruitmentInfo} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

