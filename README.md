# MediApp

Back-End de aplicación ficticia para empresa MediApp. Orientada al diagnóstico y
las consultas médicas online.

Desarrollada con Node JS, Express y Sequelize 


## Instrucciones para levantar proyecto en entorno local

1.- Clone el repositorio en el directorio de su computador en el que quiera guardar el proyecto. 
Puede hacerlo ejecutando el siguiente comando:
```
git clone https://github.com/ViloriaUrdaneta/atix-back.git
```

2.- Instale las dependencias necesarias para ejecutar la aplicación.
Puede hacerlo con el siguiente comando:
```
npm install
```

3.- Cree un archivo en la raiz del proyecto llamado .env para las variables de entorno y copie en él las siguientes variables:
```
DB_USER=postgres
DB_PASSWORD=admin
DB_HOST=localhost
DB_NAME=atix
DB_PORT=5432
PORT=3000
SECRET=default_jwtsecret
```
*El valor de estas variables debe adaptarse a las credenciales propias de la base de datos postgres local a la que conectará su proyecto

4.- Para hacer correr su programa ejecute:
```
npm run dev