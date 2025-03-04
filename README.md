# Todo App

Todo App — это веб-приложение для управления списком задач. Оно позволяет пользователям регистрироваться, входить в систему, добавлять новые задачи, отмечать их выполненными и удалять. Проект разработан с использованием React для фронтенда и Django REST Framework для бэкенда.

---

## Функционал

- Регистрация и аутентификация пользователей
- Добавление новых задач
- Отметка задач как выполненных
- Удаление задач
- API на основе Django REST Framework

---

## Технологии

### Фронтенд:
- React — библиотека для создания интерфейсов
- React Router — маршрутизация в приложении
- Axios — работа с API
- Bootstrap — стилизация интерфейса
- React Alert — всплывающие уведомления

### Бэкенд:
- Django — веб-фреймворк на Python
- Django REST Framework — создание REST API
- Django Knox — безопасная аутентификация по токенам
- SQLite — база данных

---

## Установка и запуск

### Запуск без Docker

#### 1. Установка и запуск фронтенда (React)
```sh
# Клонируем репозиторий
git clone https://github.com/pav046/todoapp
cd todo-app

# Устанавливаем зависимости
npm install

# Запускаем фронтенд
npm run dev
```

#### 2. Установка и запуск бэкенда (Django + DRF)
```sh

# Создаем виртуальное окружение и активируем его
python -m venv venv
source venv/bin/activate  # Для Linux & macOS
.\venv\Scripts\activate  # Для Windows

# Устанавливаем зависимости
pip install -r requirements.txt

# Применяем миграции
python manage.py migrate

# Запускаем сервер
python manage.py runserver
```

---

### Запуск с Docker
```sh
# Клонируем репозиторий
git clone https://github.com/pav046/todoapp
cd todo-app

# Запускаем контейнеры
docker-compose up --build
```

---
