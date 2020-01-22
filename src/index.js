import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import { addedFeatureReducer } from './reducers/AddedFeatureReducer';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(addedFeatureReducer);
  console.log(store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider>
    <App />
</Provider>,
rootElement);
