import React, { Component } from 'react';

class Header extends Component {
    handleLogout = () => {
        window.location.href = "http://217.114.14.129:8000/logout"; // Перенаправляем на серверный logout
    };

    render() {
        const token = localStorage.getItem('token'); // Проверяем наличие токена
        const username = localStorage.getItem('username'); // Получаем имя пользователя из localStorage

        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="#">Todoapp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {token ? (
                            <>
                                <li className="nav-item">
                                    <span className="navbar-text">{username} /</span> {/* Показываем имя пользователя */}
                                </li>
                                <span 
                                        className="nav-link text-danger" 
                                        style={{ cursor: "pointer" }} 
                                        onClick={this.handleLogout}
                                    >
                                        Выйти
                                    </span>                                             {/* Кнопка выхода */}
                            </>
                        ) : null}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
