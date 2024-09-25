use bluestone;
select * from products;
DELETE FROM users WHERE user_id>10;
select * from users;
select * from  shopping_cart;

drop DATABASE bluestone;

-- Insert test shopping cart
INSERT INTO shopping_cart (user_id)
VALUES (1), (2);

-- Insert test cart items
INSERT INTO cart_items (cart_id, product_id, quantity, added_at)
VALUES 
(1, 1, 2, NOW()),
(1, 2, 1, NOW()),
(2, 4, 2, NOW()),
(2, 5, 1, NOW());


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
    u.user_id = 2;  -- Replace '?' with the specific user's ID
users