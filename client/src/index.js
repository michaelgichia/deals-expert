import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import './globalStyles.css';
import store, { history } from '../src/store';
import App from '../src/containers/App';
import registerServiceWorker from './registerServiceWorker';
// App
const WithStoreApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>
);

render(<WithStoreApp />, document.getElementById('root'));

registerServiceWorker();
