# Билдим React-приложение внутри контейнера
FROM node:20-alpine AS builder

WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
