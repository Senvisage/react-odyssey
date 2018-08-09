import React from 'react';
import './Signup.css';

const Signup = ({ email, onChange }) => (
  <div className="Signup">
     <h1>{email}</h1>
     <input type="email" name="email" placeholder="Your E-mail" onChange={onChange}/>
  </div>
)
export default Signup
