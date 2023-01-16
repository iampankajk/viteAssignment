import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'

// const users = [ 
//     {username: "admin", password: "password", role: "r1"},
//     {username: "user1", password: "password1", role: "r2"},
//     {username: "user2", password: "password2", role: "r3"}]

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'password' && role === 'r1') {
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('role', role);
      navigate('/dashboard');
    } else if (username === 'user1' && password === 'password1' && role === 'r2') {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('role', role);
        navigate.push('/dashboard');
    } else if (username === 'user2' && password === 'password2' && role === 'r3') {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('role', role);
        navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };
 
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
      <label>
        Role:
        <select name="role" onChange={e => setRole(prevState=>prevState=e.target.value)}>
          <option value="select">select</option> 
          <option value="r1">r1</option>
          <option value="r2">r2</option>
          <option value="r3">r3</option>
        </select>
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};

export default Login;
