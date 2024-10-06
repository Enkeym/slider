# Этап 1: Сборка приложения
FROM node:18 AS build

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY ./client/package*.json ./
RUN npm install

# Копируем остальные файлы и собираем приложение
COPY ./client .
RUN npm run build

# Этап 2: Запуск приложения на Vite
FROM node:18

# Копируем собранные файлы из предыдущего этапа
WORKDIR /app
COPY --from=build /app .

# Устанавливаем зависимости для продакшн-окружения (опционально)
RUN npm install --only=production

# Экспонируем стандартный порт Vite (5173)
EXPOSE 5173

# Запускаем Vite в режиме продакшн
CMD ["npm", "run", "preview"]
