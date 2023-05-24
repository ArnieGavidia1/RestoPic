FROM httpd
WORKDIR /usr/local/apache2/htdocs/
COPY . /usr/local/apache2/htdocs/

LABEL desarrollador="Grupo3"
LABEL version="1.1"
RUN apt update

