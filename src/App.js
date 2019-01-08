import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movieslist from './Movieslist';
import Moviedetail from './Moviedetail';
// const movies = [
//   {
//     id:1,
//     title:'golmaal 1',
//     desc:'first movie'
//   },
//   {
//     id:2,
//     title:'golmaal 2'
//   },
//   {
//     id:3,
//     title:'golmaal 3'
//   },
//   {
//     id:4,
//     title:'golmaal 4'
//   }
// ];

const App  = () => ( 
<Router>
  <div className="App">
    <header className="App-header">
    <Link to="/">
    <h1 className="App-title">Welcome to MovieDB</h1>
    
    </Link>
    </header>
    <Switch>
    <Route exact path="/" component={Movieslist} />
    <Route path="/:id" component={Moviedetail} />
    </Switch>

  </div>
</Router>
);
  

 



export default App;


