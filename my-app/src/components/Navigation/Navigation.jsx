import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";


function Navigation() {
  return (
    <div className="navbar">
      <ul>
        <li><Link to={'/a'} >Главная страница</Link></li>
        <li><Link to={'/api'} >api</Link></li>
        <li><Link to={'/chat'}>Чат</Link></li>
      </ul>
    </div>
  );
}
export default Navigation;