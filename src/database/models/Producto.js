const { DataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        precio: {
            type: dataTypes.DECIMAL(6,2),
            allowNull: false
        },
        categoria_id: {
            type: dataTypes.INTEGER,
           allowNull: false
            
        },
         
    };
    let config = {
        timestamps: false,
    }
    const Producto = sequelize.define(alias, cols, config); 
//UN PRODUCTO PERTENECE A UNA CATEGORIA
    Producto.associate = function (models) {
        Producto.belongsTo(models.Categoria, {
            as: "categoria",
            foreignKey: "categoria_id"
        })
    }
// UN PRODUCTO CORRESPONDE A UN SOLO CARRITO? 


    return Producto
  
    }