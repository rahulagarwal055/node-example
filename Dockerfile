FROM node:14
WORKDIR /Users/rahul/Documents/Personal Projects/node-example
COPY package*.json app.js ./
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]