const { DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes)=>{
    let alias = "Categoria"
    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        categoria: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
    
}
let config = {
    timestamps: false,
}
const Categoria = sequelize.define(alias, cols, config); 

Categoria.associate = function(models) {
    Categoria.hasMany(models.Producto, { 
        as: "producto",        
        foreignKey: "categoria_id"
    })
}


    return Categoria
}