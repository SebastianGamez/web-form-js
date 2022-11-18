# Web Form 🚀

## Web form es un formulario de registro creado totalmente con TypeScript. Consiste en una interfaz gráfica desarrollada con React; un API REST implementada con Express; y finalmente una base de datos SQL cuyo motor es Postgres.

## GUI (Frontend):

 ### La interfaz gŕafica consiste una página web SPA (Single Page Application) con dos pestañas implementadas con React Router -el login y el registro-. El login consume un API previamente creada y valida la existencia del usario, exponiendo el resultado mediante una alerta personalizada. La pestaña de registro recibe información básica del usuario y cuenta con autocompletado en la entrada de nacionalidad; las naciones sugeridas se consumen de un API gratuito (https://restcountries.com/). El registro también muestra una alerta personalizada según el resultado.

### A continuación encontrará un enlace donde podrá probar la aplicación completa ya enlazada con el servidor:
### Enlace al sitio desplegado: http://webformfront-env.eba-k2mv3bem.us-east-2.elasticbeanstalk.com


## Server (Backend API):

### Peticiones que recibe el servidor:

  ### -POST /api/users/register
  #### Esta petición se utilizara para registrará un nuevo usuario y debe enviar como cuerpo el siguiente JSON:
  
```javascript

{
  "user": {
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "nationality": "string",
        "password": "string"
    }
}
```
  #### Retornará otro JSON con el codigo de respuesta y un mensaje.
  
  ### -POST /api/users/login
  #### Esta petición se utilizara para validar un nuevo usuario y debe enviar como cuerpo el siguiente JSON:
```javascript

{
  "user": {
        "email": "string",
        "password": "string"
    }
}
```
  #### Retornará otro JSON con el codigo de respuesta y un mensaje.
  

### A continuación encontrara un enlace donde podrá probar el API de la aplicación:
### Enlace al sitio desplegado: http://webform-env.eba-hcwxcsrr.us-east-2.elasticbeanstalk.com


## Contact Me

[![Gmail Badge](https://img.shields.io/badge/-juan.gamez1001@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:juan.gamez1001@gmail.com)](mailto:juan.gamez1001@gmail.com)
[![Linkedin Badge](https://img.shields.io/badge/-Sebastian-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/sebastian-gamez-ariza-0963b7228/)](https://www.linkedin.com/in/sebastian-gamez-ariza-0963b7228/)
[![Twitter Badge](https://img.shields.io/badge/-@culturaDmacondo-00acee?style=flat&logo=Twitter&logoColor=white)](https://twitter.com/CulturaDmacondo "Follow on Twitter")
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white&link=https://github.com/SebastianGamez)](https://github.com/SebastianGamez)
