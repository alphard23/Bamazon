DROP TABLE IF EXISTS products;

-- Product table
CREATE TABLE products (
  item_id integer unsigned auto_increment not null,
  product_name varchar(64) not null,
  department_name varchar(64) not null,
  price numeric(10,2) not null,
  stock_quantity integer unsigned not null,
  product_sales numeric(10,2) default 0,
  PRIMARY KEY (item_id)
);

-- Populating product table with dummy data
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES 
  ('Super Mario Odyssey', 'video games', 59.99, 11),
  ('Xenoblade Chronicles 2', 'video games', 59.99, 3),
  ('Macbook Pro 2016', 'electronics', 2599.99, 20),
  ('Sony Bravia XBR 2018 65"', 'electronics', 2999.99, 10),
  ('Cracking the Coding Interview', 'books', 24.99, 5),
  ('The subtle Art of not giving a Fuck', 'books', 19.99, 9),
  ('How Google works', 'books', 9.99, 10),
  ('Google Pixel 2 XL', 'electronics', 849.59, 20),
  ('Apple iPhone X', 'electronics', 1000.00, 50),
  ('Thinking fast and slow', 'books', 9.99, 12),
  ('Python for data analysis', 'books', 9.99, 2),
  ('Mandarin for Beginners', 'books', 14.99, 11),
  ('German for Beginners', 'books', 16.99, 12),
  ('Two Scoops of Django', 'books', 34.59, 6),
  ('Nintendo Switch', 'electronics', 299.99, 1),
  ('Nintendo Wii U', 'electronics', 199.99, 15),
  ('Steamworld Dig 2', 'video games', 15.99, 10),
  ('Stardew Valley', 'video games', 14.99, 100),
  ('Factorio', 'video games', 19.99, 1000)
;
