import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RegisterForm({ register }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    register({
      username,
      password
    });
    setUsername('');
    setPassword('');
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
}

export default function Register() {
  const register = creds => {
    console.log(creds);
    axios
      .post('https://users-app1.herokuapp.com/api/register', creds)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return <RegisterForm register={register} />;
}
