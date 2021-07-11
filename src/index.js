import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
// import { action } from './redux/action';
import { Provider } from 'react-redux';
import './styles.css';
import 'modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom';

// import reportWebVitals from './reportWebVitals';
// console.log(store);
// console.log(store.getState());
// console.log(store.dispatch(action));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
