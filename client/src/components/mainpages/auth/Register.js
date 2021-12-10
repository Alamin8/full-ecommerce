import React, { useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'


const Register = () => {

  const [user, setUser] = useState({
    name:"",
    email: "",
    password: "",
  });

  const onChaneInput= e =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value})
  }

  const registerSubmit =async e =>{
    e.preventDefault()
    try{
        await axios.post('/user/register', {...user})

        localStorage.setItem('firstLogin', true)
        
        window.location.href="/";
    }catch(err){
        alert(err.response.data.msg)
    }
  }

  return (
    <div className="login-page">
      <form onSubmit={registerSubmit}>
      <h2>Regiser</h2>
      <input
          type="text"
          name="name"
          required
          placeholder="Name"
          value={user.name}
          onChange={onChaneInput}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={user.email}
          onChange={onChaneInput}
        />

        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          value={user.password}
          onChange={onChaneInput}
          autoComplete="on"
        />

        <div className="row">
            <button type="submit">Register</button>
            <Link to='/login'>Login</Link>
        </div>

      </form>
    </div>
  );
};

export default Register;
