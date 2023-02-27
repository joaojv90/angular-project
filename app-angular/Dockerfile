#first phase
FROM node:19-alpine3.16 AS build-env
#con el siguiente comando crea una carpeta
WORKDIR /app 
#copy -> copia todo lo que tenemos en nuestro directorio em la carpeta que creamos
COPY . ./

RUN npm install
RUN npm run build

#second phase (nginx)
FROM nginx:1.23.3-alpine

COPY --from=build-env /app/dist/proyecto/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]