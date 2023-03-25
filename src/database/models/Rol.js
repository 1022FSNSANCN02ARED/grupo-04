<<<<<<< HEAD
const { DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes)=>{
    let alias = "Rol"
    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
=======
module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol';
    let cols = {
        id: {
            type: dataTypes.BIGINT(11).UNSIGNED,
>>>>>>> f06535cc2ab56c474fa45117411994526ec24c54
            primaryKey: true,
            autoIncrement: true
        },
        rol: {
            type: dataTypes.STRING(100),
            allowNull: true,
        },
        
    };
    let config = {
        timestamps: false,
    }
    const Rol = sequelize.define(alias, cols, config); 
    
    Rol.associate = function(models) {
        Rol.hasMany(models.User,{ 
            as: "user",
            foreignKey: "rol_id"
        })
    }
    return Rol
  
    }
