import axios from 'axios';

export const getCurrentUser = async () => {
  const token = localStorage.getItem('token');  // Пример извлечения токена
  
  try {
    const response = await axios.get('/api/auth/user', {
      withCredentials: true,  // Для cookies
      headers: {
        Authorization: `Token ${token}`  // Передаем токен
      }
    });

    return response.data;
  } catch (error) {
    console.error("Ошибка при получении пользователя:", error);
    return null;
  }
};
