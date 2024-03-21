-- Drop existing tables if they exist
DROP TABLE IF EXISTS "Order";
DROP TABLE IF EXISTS "Menu";
DROP TABLE IF EXISTS "Log";

-- Create Order table
CREATE TABLE "Order" (
    orderId INTEGER PRIMARY KEY,
    customerName TEXT,
    totalPrice Float NOT NULL,
    items JSON -- Store items as JSON array [{menuId: 1, quantity: 2}, {menuId: 3, quantity: 1}, ...]
);

-- Create Menu table
CREATE TABLE "Menu" (
    menuId INTEGER PRIMARY KEY,
    itemName TEXT,
    category TEXT,
    price FLOAT NOT NULL
);

-- Create Log table
CREATE TABLE "Log" (
    logId INTEGER PRIMARY KEY,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    totalPrice Float NOT NULL
    message TEXT
);