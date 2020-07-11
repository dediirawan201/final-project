import React, { Component } from 'react';
import Book from '../assets/book.jpg';
export default class RuangMentor extends Component {
  render() {
    return (
      <div> 
          <div className="blog" id="ruangmentor">
<div className="title-wrapper">
<h1>Kenapa Harus Memilih Ruang Belajar?</h1>
</div>
<div className="desc">
<div className="img-wrapper">
<img src={Book} alt="" />
</div>
<div className="desc-wrapper">
<h1>Keunggulan Ruang Belajar dan FAQ</h1>
<p>
 Klik tombol di bawah ini untuk mengetahui keunggulan Ruang Belajar dan pertanyaan yang sering ditanyakan pada program Ruang Belajar.
</p>
<button className="btn">Keunggulan dan FAQ</button>
</div>
</div>
</div>
           </div>
    );
  }
}
 