import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './components/Navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import VideosList from './components/Videos/VideoList';
import VideoForm from './components/Videos/VideoForm';
import 'bootswatch/dist/materia/bootstrap.min.css';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
          <Navbar/>
        <div className="container-fluid p-4">
        <Switch>
            <Route exact path="/" component={VideosList} />
            <Route path="/new-video" component={VideoForm}/>
            <Route path="/update/:id" component={VideoForm}/>
        </Switch>
        </div>
     <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
