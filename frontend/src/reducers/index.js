import { combineReducers } from 'redux';
import todos from './todos';
import errors from './errors';
import messages from './messages';

// Создаем корневой reducer. Сюда передаем все наши reduer'ы нашего приложения

export default combineReducers({
    todos,
    errors,
    messages,
});