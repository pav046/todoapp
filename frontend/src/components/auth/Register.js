import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Используем useNavigate

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', {
        username,
        email,
        password,
      });
      // После успешной регистрации перенаправляем на страницу логина
      navigate('/login'); // ✅ Правильный вызов
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
    }
  };

  return (
    <div style={styles.container}>
        <div style={styles.formBox}>
            <h2 style={styles.title}>Регистрация</h2>
            <form onSubmit={handleRegister} style={styles.form}>
                <input
                    type="text"
                    placeholder="Имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Зарегистрироваться</button>
            </form>
            <p style={styles.switchText}>
              Уже есть аккаунт?{" "}
              <span style={styles.link} onClick={() => navigate('/login')}>Войти</span>
            </p>
        </div>
    </div>
);
};

const styles = {
container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
},
formBox: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
},
title: {
    marginBottom: '15px',
    fontSize: '24px',
},
form: {
    display: 'flex',
    flexDirection: 'column',
},
input: {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
},
button: {
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#28a745',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
},
link: {
  color: '#007bff',
  cursor: 'pointer',
  textDecoration: 'underline',
},
switchText: {
  marginTop: '10px',
  fontSize: '14px',
},
};

export default Register;
