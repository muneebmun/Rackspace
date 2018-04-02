import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const store = configureStore();

render(
  <Provider store={store}>
  <Router history={browserHistory} routes={routes}/>
</Provider>, document.getElementById('app'));

        