FROM node:latest
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]