# Bamazon

## Baby-Amazon

A CLI node application that allows you to purchase and manage inventory 
using MySQL for storage.


## Customer View

1. Allows the purchase of products.
![Customer View](/screenshots/customer_view.png?raw=true "Customer")


## Manager View

1. Displays products for sale along with corresponding inventory count.
2. Displays items that are below a specified inventory count (low stock).
3. Allows adding additional stock of an existing product.
4. Allows the manager to add an entirely new product.
![Manager View](/screenshots/manager_view.png?raw=true "Manager")

## Supervisor View
1. Displays the sale and profit grouped by department.
2. Allows the creation of new departments.
![Supervisor View](/screenshots/supervisor_view.png?raw=true "Supervisor")


## Dependencies
This application requires the following npm packages:

* easy-table
* inquirer
* mysql
* moment

The easiest way to install all dependencies is via the `npm install --save` command.