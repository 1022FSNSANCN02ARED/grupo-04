const { DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes)=>{
    let alias = "Rol"
    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        rol: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
    
}
let config = {
    timestamps: false,
}
const Rol = sequelize.define(alias, cols, config); 
    return Rol
}