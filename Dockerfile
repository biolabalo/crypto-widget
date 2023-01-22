FROM node:19-alpine

COPY . .

RUN npm install
RUN npm run build

EXPOSE 5173 8001

CMD ["npm", "run", "dev"]
