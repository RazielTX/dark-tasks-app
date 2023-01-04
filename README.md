# Dark Tasks

## Table of content

- [Intro](#intro)
- [Technologies used](#technologies-used)
- [Structure of the project](#structure-of-the-project)
- [Deployment of the project](#deployment-of-the-project)
- [Author](#author)

## Intro

Welcome to Dark Tasks! This project is being built for educational purposes, to test and apply different concepts of the development and deployment of web applications, as well as networking and security.

The project is in an early stage, hence I will be updating it constantly.

## Technologies used

The project is built using two core technologies:

1. **NodeJS** and its framework **Express**
    - The logic and the server itself its created with Express
    - Routes and controls the different HTTP requests received

        > So far, I've been using only the GET and POST HTTP methods, which are the default ones used by the HTML forms. Later will work on this to use DELETE and PATCH directly, insted of just routing them using the controllers.

    - Manage and send the views to the client
    - Retrieves and manipulates the information stored in the database

2. **MySQL**
    - The model section of the application
    - It has two entities: One for the users and one for the tasks, which are related.
    - To connect NodeJS with MySQL, the project uses mysql2, which is an npm module.

For the frontend of the project I'm using:

- **EJS**: It's a template engine very useful to write HTML together with JavaScript, importing variables directly to the HTML, etc.
- **CSS**: Mmm... Yes, CSS. Not too much to say about it.

I'm also using some dev dependencies:

- **Nodemon**: To keep alive the server while working on it
- **Morgan**: Very useful when tracking the HTTP requests from the client

## Structure of the project

The architecture used for the project is quite simple. It's using the Model-view-controller (MVC) architecture.

- **Model (M)**: I'm using MySQL for the models.

- **View (V)**: For this layer, EJS and CSS are the main techs.

- **Controller (C)**: NodeJS/Express handles the inputs, routes the HTTP request and connects with the MySQL database. 
To keep the code more readable, scalable and maintainable, the routes and the controller functions are in different files.



<details>
  <summary>The directory structure of the project can be found here.</summary>
  
```
.
├── README.md
├── layout
│   └── index.html
├── package-lock.json
├── package.json
└── src
    ├── app.js
    ├── config.js
    ├── controllers
    │   ├── index.controller.js
    │   ├── tasks.controller.js
    │   └── users.controller.js
    ├── db.js
    ├── index.js
    ├── models
    │   └── database.sql
    ├── public
    │   └── styles
    │       ├── reset.css
    │       └── styles.css
    ├── routes
    │   ├── index.routes.js
    │   ├── tasks.routes.js
    │   └── users.routes.js
    └── views
        ├── access.ejs
        ├── create.ejs
        ├── edit.ejs
        ├── index.ejs
        ├── partials
        │   ├── _footer.ejs
        │   ├── _header.ejs
        │   └── _header_tasks.ejs
        ├── register.ejs
        ├── register_failed.ejs
        ├── register_success.ejs
        └── tasks.ejs
```
</details>

## Deployment of the project

This project is currently live in an AWS EC2 instance:

[Dark Tasks](http://3.94.114.229:8080)

### Networking protocols used

- **HTTP**: 
    - The project is not intended for public usage (yet), hence I'm not using SSL/TLS certificates. To access the instance, HTTP is the protocol used currently, not HTTPS.
    - Since the project is currently in progress, I'm not routing to Port 80 yet. In the meantime, it's using Port 8080.
    - Having said that, if you are going to take a look into the project, *do not enter personal/sensitive information.* The data packets are not being encrypted.

- **SSH**: 
    - I use the SSH protocol to connect remotely to the EC2 instance, as well as to connect the instance to GitHub and keep updating it.

## Author

And last but not least, this project is developed by **Fabian Bejarano**.

[LinkedIn](https://www.linkedin.com/in/fabianbejarano/)
[GitHub - *just in case*](https://github.com/RazielTX)
[Twitter](https://twitter.com/ThePianistFB)

Thank you to taking the time to take a look at the project!