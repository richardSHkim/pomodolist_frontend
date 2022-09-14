FROM nginx:1.23.1

RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

COPY build/ /usr/share/nginx/html