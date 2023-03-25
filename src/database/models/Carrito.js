module.exports = (sequelize,DataTypes)=>{
    let alias = "Carrito"
    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad: {
            type: DataTypes.INT,
            allowNull: false
        },
    
}
let config = {
    timestamps: false,
}
const Carrito = sequelize.define(alias, cols, config); 
    return Carrito
}