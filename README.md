# Dark Tasks

## Table of content

- [Intro](#intro)
- [Technologies used](#technologies-used)
- [Structure of the project](#structure-of-the-project)
- [Deployment of the project](#deployment-of-the-project)
- [Author](#author)
- [Disclaimers](#disclaimers)

## Intro

Welcome to Dark Tasks! This project is being built for educational purposes, to test and apply different concepts of the development and deployment of web applications, as well as networking and security.

## Technologies used

The architecture used for the project is quite simple. It's using the Model-view-controller (MVC) architecture.

The project is built using two core technologies:

1. **NodeJS** and its framework **Express**
    - The logic and the server itself its created with Express
    - Routes and controls the different HTTP requests received *
    - Manage and send the views to the client
    - Retrieves and manipulates the information stored in the database

    > So far, I've been using the GET and POST methods, which are the default ones used by the HTML forms. Later will work on this to use DELETE and PATCH directly, insted of just routing them using the controllers.

2. **MySQL**
    - The model section of the application
    - It has two entities: One for the users and one for the tasks, which are related.

I'm also using some dev dependencies:

- **Nodemon**: To keep alive the server while working on it
- **Morgan**: Very useful when tracking the HTTP requests from the client

*Work in progress...*