import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Переименовали history -> navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { username, password }, {
        withCredentials: true, // Отправляем cookie
      });

      const token = response.data.token; // Предположим, что токен приходит в response.data.token
      const user = response.data.user; // Предполагаем, что данные пользователя приходят в response.data.user

      localStorage.setItem('token', token); // Записываем токен в localStorage
      localStorage.setItem('username', user.username); // Записываем имя пользователя в localStorage

      // console.log(localStorage.getItem('token'));
      // console.log(localStorage.getItem('username'));
      

      // После успешного входа перенаправляем на Todo список
      navigate('/'); // ✅ Используем navigate, а не history.push
      window.location.reload();
    } catch (error) {
      console.error('Ошибка при входе:', error);
    }
  };

  return (
    <div style={styles.container}>
        <div style={styles.formBox}>
            <h2 style={styles.title}>Вход</h2>
            <form onSubmit={handleLogin} style={styles.form}>
                <input
                    type="text"
                    placeholder="Имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Войти</button>
            </form>
            <p style={styles.switchText}>
              Нет аккаунта?{" "}
              <span style={styles.link} onClick={() => navigate('/register')}>Регистрация</span>
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
      height: '100vh', // Занимает всю высоту экрана
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
      backgroundColor: '#007bff',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
  },
  switchText: {
    marginTop: '10px',
    fontSize: '14px',
  },
  link: {
      color: '#007bff',
      cursor: 'pointer',
      textDecoration: 'underline',
  }

};

export default Login;
