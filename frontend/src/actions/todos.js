import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_TODO_LIST, ADD_TODO, DELETE_TODO, TOGGLE_TODO, GET_ERRORS } from '../actions/types';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

// Функция для конфигурации заголовков с токеном
const tokenConfig = () => {
    const token = localStorage.getItem('token'); // Берём токен из localStorage

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
};

// Получить список задач (только для текущего пользователя)
export const getTodos = () => (dispatch) => {
    axios.get('/api/todo/', tokenConfig())
        .then(result => {
            dispatch({
                type: GET_TODO_LIST,
                payload: result.data
            });
        }).catch(error => dispatch(returnErrors(error.response.data, error.response.status)));
};

// Добавить задачу
export const addTodo = (todo) => (dispatch) => {
    axios.post('/api/todo/', todo, tokenConfig())
        .then(result => {
            dispatch(createMessage({ todoAdded: "Todo added!" }));
            dispatch({
                type: ADD_TODO,
                payload: result.data
            });
        }).catch(error => dispatch(returnErrors(error.response.data, error.response.status)));
};

// Удалить задачу
export const deleteTodo = (id) => (dispatch) => {
    axios.delete(`/api/todo/${id}/`, tokenConfig())
        .then(() => {
            dispatch(createMessage({ todoDeleted: "Todo deleted!" }));
            dispatch({
                type: DELETE_TODO,
                payload: id
            });
        }).catch(error => console.log(error));
};

// Изменить статус задачи
export const toggleTodo = (todo) => (dispatch) => {
    const updatedTodo = { ...todo, done: !todo.done };
    axios.put(`/api/todo/${todo.id}/`, updatedTodo, tokenConfig())
        .then(result => {
            dispatch({
                type: TOGGLE_TODO,
                payload: result.data
            });
        }).catch(error => console.log(error));
};
