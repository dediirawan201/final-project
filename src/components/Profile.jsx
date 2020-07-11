import React, { Component } from 'react';
import Guru from '../assets/guru.jpg';

export default class Profile extends Component {
  render() {
    return (
      <div> 
        <div className="desc" id="profil">
<div className="desc-wrapper">
<h1>Mata Pelajaran dan
Tentor Ruang Belajar</h1>
<p>
Klik tombol di bawah ini untuk menemukan pelajaranmu dan tentor yang cocok dengan diri kamu.
</p>
<button className="btn">Mata Pelajaran dan Tentor</button>
</div>
<div className="img-wrapper">
<img src={Guru} alt="" />
</div>
</div>  
           </div>
    );
  }
}


