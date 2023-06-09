create database MapsDB

CREATE TABLE admissions (
	id serial primary key,
  name VARCHAR(255),
  age varchar(255),
  email VARCHAR(255),
  course VARCHAR(255),
  phoneNumber VARCHAR(20)
);