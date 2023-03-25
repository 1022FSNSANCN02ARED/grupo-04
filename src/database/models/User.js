module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        direccion: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        pais: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        telefono: {
            type: dataTypes.BIGINT(15),
            allowNull: false
        },
        tipo: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
       
        rol_id: dataTypes.BIGINT(10),
    };
    let config = {
        timestamps: false,
    }
    const User = sequelize.define(alias, cols, config); 
    

    User.associate = function(models) {
        User.hasOne(models.Rol,  { 
            as: "rol",
            foreignKey: "rol_id"
        })
    }
    
    
    return User
  
    };

    
