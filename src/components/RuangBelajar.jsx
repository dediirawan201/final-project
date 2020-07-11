import React, { Component } from 'react';
import Student from '../assets/student.png';

export default class RuangBelajar extends Component {
  render() {
    return (
      <div> 
        <div className="top-wrapper">
<div className="showcase">
<div className="left-content">
<h1>RUANG BELAJAR</h1>
<h3>
 Ruang Belajar merupakan perusahaan startup teknologi asal Indonesia yang berfokus pada pendidikan.
 Ruang Belajar menawarkan platform pembelajaran berbasis kurikulum sekolah melalui video tutorial interaktif oleh
 guru dan animasi di aplikasi ponsel.
</h3>
</div>
<img src={Student} alt="" className="right-content" />
</div>
</div>  
           </div>
    );
  }
}
