import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import UnverifiedContainer from './containers/UnverifiedContainer'
import VerifiedContainer from './containers/VerifiedContainer'
import ItemForm from './components/ItemForm'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path="/" component={App} />
      <Route exact path="/items" component={VerifiedContainer} />
      <Route path="/items/unverified" component={UnverifiedContainer} />
      <Route path="/items/new" component={ItemForm} />
    </React.Fragment>
  </Router>),
document.getElementById('root'));

serviceWorker.unregister();
