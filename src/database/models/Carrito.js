module.exports = (sequelize,DataTypes)=>{
    let alias = "Carrito"
    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad: {
            type: DataTypes.BIGINT(20),
            allowNull: false
        },
        producto_id: {
            type:DataTypes.INTEGER
        },
        user_id:{
            type:DataTypes.INTEGER
        }

    
}
let config = {
    timestamps: false,
}
const Carrito = sequelize.define(alias, cols, config); 
    return Carrito
}