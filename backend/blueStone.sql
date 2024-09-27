use bluestone;
select * from products;
DELETE FROM users WHERE user_id>10;
select * from users;


drop DATABASE bluestone;

DELETE FROM cart_items
WHERE `cart_item_id` >= 5;

select * from cart_items;
select * from  order_items;
-- Insert test cart items
INSERT INTO cart_items (cart_item_id, product_id, quantity,user_id)
VALUES 
(1, 1, 2, 1),
(2, 2, 1, 1),
(3, 4, 2, 2),
(4, 5, 1, 2);


show columns from users;
show columns from products;
show columns from cart_items;

select * from cart_items;
SELECT * from shopping_Cart;
select * from users;
-- show products by user
SELECT 
    p.product_id,
    p.name,
    p.description,
    p.image_url,
    p.material,
    p.price,
    ci.quantity,
    (ci.quantity * p.price) AS total_price
FROM 
    cart_items ci
JOIN 
    products p ON ci.product_id = p.product_id
WHERE 
    ci.user_id = 1; -- Replace ? with the specific user's ID
