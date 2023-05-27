FROM node:16-alpine
ENV APP_PORT=3000s
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "server.js" ]