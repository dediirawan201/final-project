import React from 'react';
import G20 from '../assets/G20.svg';
import G18 from '../assets/G18.svg';
import G19 from '../assets/G19.svg';
import G21 from '../assets/G21.svg';

const RuangKelas = () => {
    return (
        
            <div className="card-container" id="ruangkelas">
<div className="title-wrapper">
<h1>Belajar Makin Menyenangkan</h1>
<h1>Bersama Ruang Belajar</h1>
</div>
<div className="container">
<div className="card-wrapper">
<img src={G19} alt="" />
<h3 className="title">Hujan-hujanan Ilmu</h3>
<p>
 Belajar sambil mengingat pengetahuan umum dengan game menarik yang satu ini akan melatih daya ingatmu..
</p>
</div>
<div className="card-wrapper">
<img src={G20} alt="" />
<h3 className="title">Coffee Breaks</h3>
<p>
 Jenuh kamu bakalan hilang tapi otak kamu tetap jalan dong. Kuy cobain game seru-seruan berhitung aritmatika..
</p>
</div>
<div className="card-wrapper">
<img src={G21} alt="" />
<h3 className="title">Kadoin Aja Part 1</h3>
<p>
 Pengen yang lebih menantang? Game yang satu ini bakalan membuat kamu lebih tertantang dengan ilmu sosialnya. Jangan nyerah ya..
</p>
</div>
<div className="card-wrapper">
<img src={G18} alt="" />
<h3 className="title">Kadoin Aja Part 2</h3>
<p>
 Setelah kamu bisa melewati Part 1, siap-siap deh buat naikin level otak kamu.. Gas sekarang juga!
</p>
</div>
</div>
</div>
       
    );
}

export default RuangKelas;