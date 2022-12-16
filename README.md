# Proyecto Aplicaciones Interactivas - Grupo 33

### Plataforma de cursos online

Base de datos:
Decidimos usar una base NO SQL (MongoDB), la cual esta desplegada en un entorno sandbox de mongo cloud, si desea conectarse y explorar o modificar la data, puede descargar un cliente como mongo compass y conectrase con la siguiente URI:

(buscar en documento enviado)

se han cargado algunas colecciones de pruebas.

Usuarios precargados:

Alumno:
mail: a@mail.com
clave: 1234

Profesor:
mail: g@mail.com
clave: 1234

UTILS:

Iniciar el proyecto:
npm install

Correr el proyecto completo:

Correr frontend:
npm run frontend

Correr backend:
npm run backend

Local frontend:
http://localhost:5173/

En caso de error:
Verificar tener node.js actualizado


Sobre el recupero de contraseña

Esta funcionalidad envia un código por mail para el recupero de contraseña. 
Como los mails no son reales, pueden verificar el codigo del funcionamiento en la base de datos: Users
El campo "otp" se actualiza con un nuevo código cada vez que se intenta recuperar la contraseña, que se utiliza como identificador para el cambio
