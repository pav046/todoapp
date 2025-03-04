# Базовый образ для Python
FROM python:3.11

# Установка зависимостей для React
RUN apt-get update && apt-get install -y \
    curl \
    gnupg2 \
    lsb-release \
    && curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файл зависимостей и устанавливаем Python зависимости
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Копируем весь проект
COPY . .

# Устанавливаем зависимости для React
WORKDIR /app/frontend
RUN npm install

# Запуск Django
WORKDIR /app
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
