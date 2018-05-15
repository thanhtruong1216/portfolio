
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewsPage from './components/NewsPage';
import RecruitmentInfo from './components/RecruitmentInfo';
import RecruitmentInfoPage from './components/RecruitmentInfoPage';
import Introduction from './components/Introduction';
import Contact from './components/Contact';
import SoonerNews from './components/SoonerNews';
import ProductInfo from './components/ProductInfo';
import CareerTips from './components/CareerTips';
import DownloadForm from './components/DownloadForm';
import ApplyForm from './components/ApplyForm';

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
        <Route path="/contact" component={Contact} />
        <Route path="/soonerNews" component={SoonerNews} />
        <Route path="/productInfo" component={ProductInfo} />
        <Route path="/careerTips" component={CareerTips} />
        <Route path="/downloadForm" component={DownloadForm} />
        <Route path="/applyForm" component={ApplyForm} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

