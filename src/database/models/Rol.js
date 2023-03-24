module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol';
    let cols = {
        id: {
            type: dataTypes.BIGINT(11).UNSIGNED,
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