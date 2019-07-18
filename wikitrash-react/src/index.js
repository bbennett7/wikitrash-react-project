import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import UnverifiedContainer from './containers/UnverifiedContainer';
import VerifiedContainer from './containers/VerifiedContainer';
import ItemForm from './components/ItemForm';
import manageItems from './reducers/manageItems';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';

const store = createStore(manageItems, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route path="/" component={App} />
        <Route exact path="/items" component={VerifiedContainer} />
        <Route path="/items/unverified" component={UnverifiedContainer} />
        <Route path="/items/new" component={ItemForm} />
      </React.Fragment>
    </Router>
  </Provider>,
document.getElementById('root'))

serviceWorker.unregister();
