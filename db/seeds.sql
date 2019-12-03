CREATE TABLE goods (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(25),
    price INTEGER,
    image TEXT
);

INSERT INTO goods (product_name, price, image)
VALUES ('shoes', 70, 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
       ('pants', 40, 'https://www.duluthtrading.com/dw/image/v2/BBNM_PRD/on/demandware.static/-/Sites-dtc-master-catalog/default/dw5d08bba3/images/large/71703_BRN.jpg?sw=331&sh=331&sm=fit'),
       ('jacket', 90, 'https://image.shutterstock.com/image-photo/red-bomber-jacket-isolated-on-260nw-777866674.jpg');