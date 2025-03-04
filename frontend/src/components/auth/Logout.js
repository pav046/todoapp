import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Для перенаправления после выхода

  useEffect(() => {
    let isMounted = true;  // Флаг для отслеживания монтирования компонента

    const performLogout = async () => {
      const token = localStorage.getItem('token');
      
      try {
        const response = await axios.post('/api/auth/logout', null, {
          withCredentials: true,  // Для cookies
          headers: {
            Authorization: `Token ${token}`,
          },
        });


        localStorage.removeItem('token');
        localStorage.removeItem('username');
        
        // Проверяем, монтирован ли компонент перед обновлением состояния
        if (isMounted) {
          navigate('/login'); // Перенаправляем на страницу логина
          window.location.reload();
        }
      } catch (error) {
        console.error("Ошибка при выходе:", error);
        if (isMounted) {
          setError("Ошибка при выходе");
        }
      } finally {
        // Проверяем, монтирован ли компонент перед обновлением состояния
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    performLogout();

    // Очистка: когда компонент размонтируется, меняем флаг на false
    return () => {
      isMounted = false;
    };
  }, [navigate]); // Хук useEffect вызовется при монтировании компонента

  if (loading) {
    return <div>Logging out...</div>; // Показываем индикатор загрузки
  }

  if (error) {
    return <div>{error}</div>; // Если произошла ошибка, выводим сообщение
  }

  return <div>Successfully logged out</div>; // После выхода показываем сообщение
};

export default Logout;
