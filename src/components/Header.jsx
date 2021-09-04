import React from "react";

import { Link } from "react-router-dom";




export const Header = ({changeView, fetchData, view, viewModeOff}) => {
  
  const rightMenu = () =>{
    if (viewModeOff){
      return ""
    }
    return (
      <ul id="nav-mobile" className="right">
        <li><Link to='/about'>About</Link></li>
        <li><Link to="/" onClick={fetchData}> <i className="material-icons">refresh</i></Link></li>
        <li><Link to="/" onClick={changeView} >{view ? <i className="material-icons">grid_on</i>:<i className="material-icons">list</i>}</Link></li>
      </ul>
    )
  }
  

  return (
    <nav className="nav justify-content-center  ">
    
    
    <div className="nav-wrapper">
      
      <Link to="/" className="brand-logo center">Bit Persons</Link>
   
      {rightMenu()}
    </div>
    </nav>
  );
};
