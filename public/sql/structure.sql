CREATE DATABASE miBase

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rol VARCHAR(100)
)
CREATE TABLE categorias(
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(200) 
)


CREATE TABLE productos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (30) NOT NULL,
    descripcion VARCHAR(500) NOT NULL,
    precio MONEY NOT NULL,
    categoria_id INT ,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
)

CREATE TABLE carrito(
    id INT AUTO_INCREMENT PRIMARY KEY,
    cantidad INT ,
    productos_id INT ,
    FOREIGN KEY (productos_id) REFERENCES productos(id)

)



CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (30) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    telefono INT NOT NULL,
    email VARCHAR (100) NOT NULL,
    rol_id INT,
    carrito_id INT,
    FOREIGN KEY (rol_id) REFERENCES roles(id)
    FOREIGN KEY (carrito_id) REFERENCES carrito(id)
)