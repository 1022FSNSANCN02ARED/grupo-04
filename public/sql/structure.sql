DROP DATABASE IF EXISTS miBase_db;
CREATE DATABASE miBase_db;
USE miBase_db;


DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
    `id` INT AUTO_INCREMENT,
    `rol` VARCHAR(100),
     PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `categorias`;
CREATE TABLE `categorias`(
    `id` INT AUTO_INCREMENT ,
    `categoria` VARCHAR(200),
     PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos`(
    `id` INT AUTO_INCREMENT,
    `nombre` VARCHAR (30) NOT NULL,
    `descripcion` VARCHAR(500) NOT NULL,
    `precio` INT NOT NULL,
    `categoria_id` INT ,
    FOREIGN KEY (`categoria_id`) REFERENCES `categorias`(`id`),
     PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `carrito`;
CREATE TABLE `carrito`(
    `id` INT AUTO_INCREMENT,
    `cantidad` INT ,
    `productos_id` INT ,
    FOREIGN KEY (`productos_id`) REFERENCES `productos`(`id`),
    PRIMARY KEY(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    `id` INT AUTO_INCREMENT ,
    `nombre` VARCHAR (30) NOT NULL,
    `apellido` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `telefono` INT NOT NULL,
    `email` VARCHAR (100) NOT NULL,
    `rol_id` INT,
    `carrito_id` INT,
    FOREIGN KEY (`rol_id`) REFERENCES `roles`(`id`),
    FOREIGN KEY (`carrito_id`) REFERENCES `carrito`(`id`),
    PRIMARY KEY(`id`)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;