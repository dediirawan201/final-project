import React, { useState } from 'react';

const Login  = () => {
  const [ value, setValue] = useState("");

  const handleFormSubmit = e => {
    e.preventDefault();
    alert(value); 
    console.log("value", value);
  };

    return (
      <div> 
          <div className="form-container" id="contact">
<div className="form-content">
<h1>Send Us Message</h1>
<input type="text"  value={value} onChange={e => setValue(e.target.value)} placeholder="Your Name" />
<input type="email" value={value} onChange={e => setValue(e.target.value)}  placeholder="Email Address" />
<input type="Phone" value={value} onChange={e => setValue(e.target.value)} placeholder="Phone" />
<textarea name="" id="" rows="5" value={value} onChange={e => setValue(e.target.value)} placeholder="Text Message"></textarea>
<button className="btn">CONTACT US</button>
</div>
</div>
<footer>
Copyright 2020. All Rights Reserved.    </footer>
           </div>
    );
  }

  export default Login;
