--Cria o Banco de Dados:

CREATE DATABASE IF NOT EXISTS
factory_db;
USE factory_db;

--Cria tabela de  matérias-primas(Raw_materials)
CREATE TABLE IF NOT EXISTS
raw_materials(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    stock_quantity INT NOT NULL DEFAULT 0,
    creatd_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Tabela de produtos(Products)
CREATE TABLE IF NOT EXISTS products(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHA(255) NOT NULL´
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Tabele de Associação (Product Ingredients)
--Esta tabela liga produtos aos materiais 
CREATE TABLE IF NOT EXISTS
product_ingredients(
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    raw_material_id INT,
    needed_quantity INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (raw_material_id) REFERENCES raw_materials(id) ON DELETE CASCADE
);