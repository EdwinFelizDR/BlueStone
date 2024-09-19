use bluestone;
select * from products;
select * from users;

-- Insert test shopping cart
INSERT INTO shopping_cart (user_id)
VALUES (1);

-- Insert test cart items
INSERT INTO cart_items (cart_id, product_id, quantity, added_at)
VALUES 
(1, 1, 2, NOW()),
(1, 2, 1, NOW());
