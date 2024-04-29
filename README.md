# Proyecto2_Backend

API de Backend para Autenticación, Usuarios, Foro y Comentarios

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Introduction

Este proyecto es un backend desarrollado con Node.js y Express, utilizando MySQL como sistema de gestión de base de datos. Está diseñado para manejar autenticación de usuarios, gestión de usuarios, foros y comentarios.

## Installation

```bash
git clone https://your-repository-url.git
cd your-project-name
npm install
``` 

## API Endpoints

Todas las rutas parten de <b>/api</b> 

Ejemplo: <i>http://localhost:3000<b>/api</b>/auth/signup</i>

#### Autenticación - /auth
| Método | Ruta           | Params  | Descripción               |
|--------|----------------|---------|---------------------------|
| POST   | `/auth/login`  |         | User login                |
| POST   | `/auth/signup` |         |  User signup              |


#### User - /user
| Método | Ruta                     | Params        | Descripción                              |
|------- |----------------          |---------      |---------------------------               |
| GET    | `/users`                 |               |  Get all Users                           |
| GET    | `/users/profile`         |               |  Get My Profile                          |
| GET    | `/users/profile/:userId` |<i>userId</i>  |  Get User' profile                       |
| PATCH  | `/users/profile/:userId` |               |  Update my profile                       |


#### Forum - /forum
| Método | Ruta             | Params       | Descripción                  |
|--------|----------------  |---------     |---------------------------   |
| POST   | `/forum`         |              |  (Admin) Create a forum      |
| GET    | `/forum`         |              |  Get All Forums              |
| GET    | `/forum/:topic`  | <i>topic</i> |  Get One Forum               |
| PATCH  | `/forum/:topic ` | <i>topic</i> |  Update a Forum              |
| DELETE | `/forum/:topic ` | <i>topic</i> |  Delete a Forum              |

#### Comment - /comment
| Método | Ruta                                     | Params                           | Descripción                     |
|--------|----------------                         |---------                          |---------------------------      |
| POST   | `/comment`                              |                                   |   Create a comment              |
| GET    | `/comment/forum/:topic/:commentId`      | <i>topic</i> /  <i>commentId</i>  |  Get One Comment From A Forum   |
| GET    | `/comment/allComments/:topic/:user_id`  | <i>topic</i> /  <i>userId</i>     |  Get User's Comments From a Forum|
| GET    | `/comment/:topic `                      |                                   |  Get all Comments From a Forum   |
| PATCH | `/comment/forum/:topic/:commentId `      | <i>topic</i> /  <i>commentId</i>  | Update a Comment' Forum          |
| DELETE | `/comment/forum/:topic/:userId/:commentId ` |<i>topic</i> / <i>userId</i> / <i>commentId</i> | Delete a Comment' Forum |
