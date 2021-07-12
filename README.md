# api-base-python

## Requisitos
Para poder utilizarlo es necesario tener instalado:

* Docker

## Heroku
* /version
* /ping

### Staging
https://taller-webapi-python1-staging.herokuapp.com/

### Producción
https://taller-webapi-python1.herokuapp.com/

## Ejecutar
* Para correr los tests en docker ejecutar: `make test`
  * Ayuda: se pueden autocorregir algunos errores de lint con $ autopep8 --in-place -a -a ./**/*.py
* Para correr la app en docker ejecutar: `make run`. Se puede acceder mediante localhost:5000 o 127.0.0.1:5000.
* Para correr la app en host ejecutar: `export FLASK_APP=wsgi.py && flask run`. Se puede acceder mediante localhost:5000 o 127.0.0.1:5000.

## Liberias Relevantes Utilizadas
* Behave: es la implementacion de cucumber para python.

## Requests_mock
Esta lib nos permite mockear request.

## Coverage
Nos permite generar un reporte de coverage de los test ejecutados.

## Uso de la API (Versión 4.1)

### /users POST
**Uso**
Utilizado para inscribir un usuario

**Header request:**
{
  service: {int} (mail (1), google(2))
}

**Body request:**
{

id: {string} (solo si viene de google),
first_name: {string},
last_name: {string},
mail: {string} (unique),
password: {string} (solo si viene de mail),
role: {int} (emprendedor (1), patrocinador (2), veedor (3), admin (4))
}

**Body response:**
{
uuid: {string}, 
status: {string} (mensaje), 
}

### /users GET
**Uso**
Utilizado para obtener los datos de los usuarios registrados

**Filtrado de usuarios**
/users?nombre=Juan&role=1

**Header request:**
{
  service: {int} (mail (1), google(2)),
  token: {string}
}

**Body response:**
{
[{uuid: {string}, first_name: {string}, last_name: {string}, mail: {string}, role: {int}, enabled: {boolean}, location: {latitude: {float}, longitude: {float}}, interests: [{ints}]}]
}

### /users/{uuid} GET
**Uso**
Utilizado para obtener los datos de cierto usuario registrado

**Header request:**
{
  service: {int} (mail (1), google(2)),
  token: {string}
}

**Body response:**
{
uuid: {string}, 
first_name: {string}, 
last_name: {string}, 
mail: {string}, 
role: {int}, 
enabled: {boolean},
location: {latitude: {float}, longitude: {float}},
interests: [{ints}]
}

### /users/{uuid} PATCH
**Uso**
Utilizado para cambiar los datos de cierto usuario registrado

**Header request:**
{
  service: {int} (mail (1), google(2)),
  token: {string}
}

**Body request:**
{
first_name: {string}, 
last_name: {string}, 
project_types: [{ints}] (enteros del 0 al 9),
location: {latitude: {float}, longitude: {float}}
}

**Body response:**
{
status: {string} (mensaje)
}

### /users_admin/{uuid} PATCH
**Uso**
Utilizado para cambiar los datos de cierto usuario registrado

**Header request:**
{
  service: {int} (mail (1), google(2)),
  token: {string}
}

**Body request:**
{
enabled: {boolean} (inhabilitado (false), habilitado (true))
}

**Body response:**
{
status: {string} (mensaje)
}
