use bluestone;
select * from products;
DELETE FROM users WHERE user_id>10;
select * from users;


drop DATABASE bluestone;

select * from cart_items;
-- Insert test cart items
INSERT INTO cart_items (cart_item_id, product_id, quantity)
VALUES 
(1, 1, 2, 1),
(1, 2, 1, 1),
(2, 4, 2, 2),
(2, 5, 1, 2);


select * from cart_items;
SELECT * from shopping_Cart;
select * from users;
-- show products by user
SELECT 
    u.first_name,
    u.last_name,
    p.name AS product_name,
    p.description,
    p.price,
    ci.quantity,
    (p.price * ci.quantity) AS total_price
FROM 
    users u
JOIN 
    Shopping_Cart sc ON u.user_id = sc.user_id
JOIN 
    Cart_Items ci ON sc.cart_id = ci.cart_id
JOIN 
    Products p ON ci.product_id = p.product_id
WHERE 
    u.user_id = 1;  -- Replace '?' with the specific user's ID
