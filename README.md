<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Descripción

Pokedex es una aplicación desarrollada en __Nest.js__. Es una RESTFul Api que provee información de los pokemones. Pudees _crear pokemones, buscarlos, filtrarlos, eliminarlos y actualizarlos_. Es un pequeña aplicación que sirvió de inicio en mi aprendizaje sobre __Nest.js__ 


# Ejecutar en desarrollo

1. Clonar el repositiorio
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```
5. Clonar el archivo __.env.template__ y renombrar a __.env__
6. LLenar las variables de entorno definidas
7. Ejecutar la aplicación en modo dev:
```
yarn start:dev
```
8. Reconstruir la base de datos con la semilla
```
GET http://localhost:3000/api/v2/seed
```


## Stack usado
* MongoDB
* Nest
