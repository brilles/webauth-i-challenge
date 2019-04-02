import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LoginForm({ login }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    login({
      username,
      password
    });
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-form">
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
        <button>Login</button>
      </form>
    </div>
  );
}

export default function Login() {
  const login = creds => {
    axios
      .post('endpoint', creds)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return <LoginForm login={login} />;
}
