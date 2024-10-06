# Этап 1: Сборка приложения
FROM node:18 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock для установки зависимостей
COPY ./client/package.json ./client/yarn.lock ./

# Устанавливаем все зависимости, включая devDependencies
RUN yarn install

# Копируем остальные файлы и собираем приложение
COPY ./client ./
RUN yarn build

# Этап 2: Запуск приложения на Vite
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем все файлы из этапа сборки
COPY --from=build /app /app

# Экспонируем стандартный порт Vite (5173)
EXPOSE 5173

# Устанавливаем зависимости, включая devDependencies (чтобы использовать `vite preview`)
RUN yarn install --production=false

# Запускаем Vite в режиме продакшн
CMD ["yarn", "preview"]
