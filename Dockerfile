FROM nginx

LABEL varsion="1.0.0" description="portal academico" maintainer="Felipe Henrique <contato.tech.developer@outlook.com>"

WORKDIR /app

COPY ./start.sh /start.sh
COPY ./backend /app/backend
COPY ./frontend /app/frontend

RUN curl -fsSl https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs
RUN cd ./backend & npm install & cd ../
RUN cd ./frontend & npm install & npm run build & cd ../

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./frontend/build /usr/share/nginx/html

ENV PORT=3000

EXPOSE 80

CMD ["/start.sh"]

#docker rm -f v1
#docker build -t nginx-nodejs -f Dockerfile .
#docker run --name v1 -p  80:80 -d -e PORT=4000 nginx-nodejs