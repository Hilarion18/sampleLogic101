// A:  Write a query which select all female customers answer:
// B:  Write a query which prints out all customer names with the number of orders they did
// answer:
// C:  Write a query which prints out customers with the money they spend excluding customers without any orders
// answer:
// D:  Write a query which prints out the order nr of all orders with at least 2 items answer:

const A = 
      "SELECT *"
      "FROM customer"
      "WHERE gender customer.gender = 'female'"

const B =
      "SELECT first_name, last_name, order_nr"
      "FROM customer"
      "LEFT JOIN order ON order.fk_customer = customer.id"

const C =
      "SELECT first_name, last_name, sum"
      "FROM customer"
      "LEFT JOIN order ON order.fk_customer = customer.id"

const D = 
      "SELECT count(fk_order) AS total_order, "
      "FROM order_item"
      "LEFT JOIN order ON order_item.fk_order = order.id"
      "WHERE order_item.fk_order >= 2"