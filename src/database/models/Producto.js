
module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
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
            type: dataTypes.STRING(11),
           allowNull: false
            
        },
        imagen: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        talle: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        color: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
         
    };
    let config = {
        timestamps: false,
       
    }
    const Producto = sequelize.define(alias, cols, config); 


    Producto.associate = function (models) {
        Producto.belongsTo(models.Categoria, {
        as: "categoria",
        foreignKey: "categoria_id",
        tableName: "categorias",
        targetKey: "id",
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        constraints: true,
      
        })
    }
    Producto.associate = function(models){
         Producto.belongsToMany(models.User, {
             through: models.Productocarrito,
             });  
    }

    return Producto
}
