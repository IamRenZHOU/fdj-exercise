FROM node:18-alpine

RUN npm install pm2 -g

RUN mkdir -p /webapp
WORKDIR /webapp
COPY .. /webapp

EXPOSE 4100

CMD ["ls", "/webapp"]