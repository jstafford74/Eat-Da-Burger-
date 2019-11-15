-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS cvvtecuov1ejv2a2;

-- Creates the "todolist" database --
CREATE DATABASE cvvtecuov1ejv2a2;

USE cvvtecuov1ejv2a2;
CREATE TABLE burgers
(
  id int NOT NULL
  AUTO_INCREMENT,
burger_name  VARCHAR
  (255),
devoured BOOLEAN default false,
PRIMARY KEY
  (id));


DESCRIBE burgers
