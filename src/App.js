import React from 'react';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './resources/styles/css/styles.css';
import Main from './components/Main';
import reducer from './components/store/reducer';

const logger = store => {

  return next => {

      return action => {

          console.log('[Middleware] Dispatching', action);
          const result = next(action);
          console.log('[Middleware] next state', store.getState());
          return result;

      }

  }

}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

function App() {

    return (

        <Provider store = {store}>
            <Main/>
        </Provider> 

    );

}

export default App;
