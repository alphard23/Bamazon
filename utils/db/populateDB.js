const mysql = require('mysql')


let connection = mysql.createConnection({
  host     : 'localhost',
  user     : process.env.MYSQL_USR,
  password : process.env.MYSQL_PWD,
});

connection.connect()

// Creates new DB if it doesn't yet exist
connection.query(`CREATE DATABASE IF NOT EXISTS bamazon`, function(err, result) {
  if (err) throw err;
})

// Select 'bamazon' db
connection.query(`USE bamazon`, function(err, result) {
  if (err) throw err;
})

/////////////////////////////////////////////////
// PRODUCTS
/////////////////////////////////////////////////

connection.query(`DROP TABLE IF EXISTS products;`, function(err, result) {
  if (err) throw err;
});

connection.query(`CREATE TABLE products (
  item_id integer unsigned auto_increment not null,
  product_name varchar(64) not null,
  department_id integer unsigned,
  price numeric(10,2) not null,
  stock_quantity integer unsigned not null,
  product_sales numeric(10,2) default 0,
  PRIMARY KEY (item_id)
);`, function(err, result) {
  if (err) throw err;
});

connection.query(`INSERT INTO products (product_name, department_id, price, stock_quantity) VALUES 
  ('Super Mario Odyssey', 1, 59.99, 11),
  ('Xenoblade Chronicles 2', 1, 59.99, 3),
  ('Macbook Pro 2016', 2, 2599.99, 20),
  ('Sony Bravia XBR 2018 65"', 2, 2999.99, 10),
  ('Cracking the Coding Interview', 3, 24.99, 5),
  ('The subtle Art of not giving a Fuck', 3, 19.99, 9),
  ('How Google works', 3, 9.99, 10),
  ('Google Pixel 2 XL', 2, 849.59, 20),
  ('Apple iPhone X', 2, 1000.00, 50),
  ('Thinking fast and slow', 3, 9.99, 12),
  ('Python for data analysis', 3, 9.99, 2),
  ('Mandarin for Beginners', 3, 14.99, 11),
  ('German for Beginners', 3, 16.99, 12),
  ('Two Scoops of Django', 3, 34.59, 6),
  ('Nintendo Switch', 2, 299.99, 1),
  ('Nintendo Wii U', 2, 199.99, 15),
  ('Steamworld Dig 2', 1, 15.99, 10),
  ('Stardew Valley', 1, 14.99, 100),
  ('Factorio', 1, 19.99, 1000)
;`, function(err, result) {
  if (err) throw err;
})

/////////////////////////////////////////////////
// DEPARTMENTS
/////////////////////////////////////////////////

connection.query(`DROP TABLE IF EXISTS departments;`, function(err, result) {
  if (err) throw err;
});

connection.query(`CREATE TABLE departments (
  department_id integer unsigned auto_increment not null,
  department_name varchar(64) not null,
  over_head_costs numeric(10,2) not null,
  PRIMARY KEY (department_id)
);`, function(err, result) {
  if (err) throw err;
});

connection.query(`INSERT INTO departments (department_name, over_head_costs) VALUES 
  ('video games', 1000),
  ('electronics', 2400),
  ('books', 300);`, function(err, result) {
  if (err) throw err;
});

/////////////////////////////////////////////////
// FOREIGN KEY
/////////////////////////////////////////////////

connection.query(`ALTER TABLE products ADD FOREIGN KEY (department_id) 
  REFERENCES departments(department_id)`, function(err, result) {
    if (err) throw err;
  })

connection.end();
