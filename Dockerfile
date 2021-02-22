FROM node:14
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn dev
EXPOSE 3003
