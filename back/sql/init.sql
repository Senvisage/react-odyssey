CREATE TABLE users
(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(90) UNIQUE NOT NULL,
    password VARCHAR(90) NOT NULL,
    name VARCHAR(90),
    lastname VARCHAR(90)
);
