import React   from 'react';
import {Switch,Route} from "react-router-dom";
//import {useEffect,useState} from 'react'
import { Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import  AddEdit  from './pages/AddEdit';
import About from './pages/About';
import View from './pages/View';
import {Home} from './pages/Home';

function App() {
  return (
    <div>

<nav className="navbar navbar-expand navbar-dark bg-dark">   
        <Link to={"/"}  className="navbar-brand ms-3 ">
        <img src="https://cdn-icons-png.flaticon.com/512/6659/6659395.png" className="navbar-brand" width="60"  alt="logo"/>

          
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item float-right">
            <Link to={"/add"} className="nav-link  navbar-brand">
              Añadir
            </Link>
          </li>   
          <li className="nav-item">
            <Link to={"/about"} className="nav-link  navbar-brand">
              Lista
            </Link>
          </li>         
        </div>
      </nav>

          <div  className="container mt-3">
            <Switch>
            <Route exact path="/"  component={Home}/>
            <Route path="/add" component={AddEdit}/>
            <Route path="/update/:id" component={AddEdit}/>
            <Route path="/view/:id"  component={View}/> 
            <Route path="/about" component={About}/>
            </Switch>

          </div>
      
    </div>


    

        
  );
}

export default App;
