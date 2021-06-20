import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes/routes';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/index.module.scss';
import reportWebVitals from './tools/reportWebVitals';
import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.REACT_APP_PUBLIC_URL}>
    <Header />
      <Switch>
        {routes.map((config, i) => (
            <Route key={i} {...config} />
        ))}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
