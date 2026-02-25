--Database creation:
CREATE DATABASE IF NOT EXISTS factory_db;
USE factory_db;

--Storing Raw_materials)
CREATE TABLE IF NOT EXISTS raw_materials(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    stock_quantity INT NOT NULL DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Storing Products information
CREATE TABLE IF NOT EXISTS products(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHA(255) NOT NULL price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Linking materials to products (Ingredients - Recipe)
CREATE TABLE IF NOT EXISTS product_ingredients(
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    raw_material_id INT NOT NULL,
    quantity_needed DECIMAL(10, 2) NOT NULL,
    --Foreingn keys for data integrity
    CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    CONSTRAINT fk_material_id FOREIGN KEY (raw_material_id) REFERENCES raw_materials(id);
);