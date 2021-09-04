import React from "react";
import './Header.css'



export const Header = ({changeView, fetchData, view}) => {
  
  return (
    <nav className="nav justify-content-center  ">
    
    
    <div className="nav-wrapper">
      <a href="#" className="brand-logo center">Bit Persons</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><button onClick={fetchData}> <i className="material-icons">refresh</i></button></li>
        <li><button onClick={changeView} >{view ? <i className="material-icons">grid_on</i>:<i className="material-icons">list</i>}</button></li>
      </ul>
    </div>
    </nav>
  );
};
