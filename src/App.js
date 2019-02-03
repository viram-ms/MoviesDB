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
  <div className="">
    <header className="">
    {/* <h1>sLink</h1> */}
    
     
    </header>
    <nav className="navbar navbar-expand-lg navbar-light " style={{background:'#111',padding:'0px 150px',height:80}}>
    <Link to="/" style={{textDecoration:'none',color:'white'}}>
    <h1 style={{margin:'0px 20px'}}>sLink</h1></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#" style={{color:'white',fontSize:24,margin:'0px 20px'}}><Link to="/">Movie</Link><span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" style={{color:'white',fontSize:24,margin:'0px 20px'}}>Sports</a>
      </li>
   
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    <Switch>
    <Route exact path="/" component={Movieslist} />
    <Route path="/:id" component={Moviedetail} />
    </Switch>

  </div>
</Router>
);
  

 



export default App;


