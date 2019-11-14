-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS burgers_db;

-- Creates the "todolist" database --
CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burgers
(
  id int NOT NULL
  AUTO_INCREMENT,
burger_name  VARCHAR
  (255),
devoured BOOLEAN default false,
PRIMARY KEY
  (id));

