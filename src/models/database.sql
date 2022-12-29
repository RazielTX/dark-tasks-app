CREATE SCHEMA IF NOT EXISTS dtasks;

USE dtasks;

CREATE TABLE users (
    user_id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    nickname VARCHAR(45) NOT NULL UNIQUE,
    PRIMARY KEY (user_id)
);

CREATE TABLE tasks (
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT DEFAULT NULL,
    user_id INT(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);