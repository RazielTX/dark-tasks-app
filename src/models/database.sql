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

INSERT INTO users (name, nickname)
VALUES ('Fabian B', 'FabsB'),
('Daniel J', 'dj97'),
('Andrew A', 'aan07');

INSERT INTO tasks (title, description, user_id)
VALUES ('Lavar la loza', 'No olvidar hacerlo antes de las 9', 1),
('Tender cama', 'Intentar con la moneda', 1),
('Codear', 'Hasta el cansancio', 1);