-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS bamazon;
-- Creates the "blogger" database --
CREATE DATABASE bamazon;

USE bamazon;
CREATE TABLE products(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100),
department_name VARCHAR(100),
price INTEGER(11),
stock_quantity INTEGER(11),
PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("mixer", "kitchen and bath", 50, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("shampoo", "kitchen and bath", 10, 3000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("grill", "cooking", 300, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("darts", "games", 10, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("tent", "camping", 50, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("nintendo switch", "gaming", 300, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("propane", "camping", 20, 0);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("cards", "gaming", 5, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("flags", "other", 15, 500);
