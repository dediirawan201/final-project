import React, { Component } from 'react';
import logo from '../logoo.png';
import {Link, Navlink} from 'react-router-dom';

const Header = () => {
    return (
      <div className="container">
<div className="headerlogo">
<div className="crop">
<img src= {logo} alt="" className="right-content" width="400px"/>
</div> 
</div>
<ul>
  <li><Link exact to="/">RUANG BELAJAR</Link></li>
<li><Link to="/profile">PROFIL</Link></li>
<li><Link to="/ruangkelas">RUANG KELAS</Link></li>
<li><Link to="/ruangmentor">RUANG MENTOR</Link></li>
<li><Link to="/login">LOGIN</Link></li>
</ul>
<i className="fas fa-bars menu-mobile"></i>
           </div>
    );
  }

  export default Header;
 