const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model{}

Comment.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
               
        content: {
            type: DataTypes.TEXT, 
            allowNull: false,
    },
    
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "comment",
    },
)

module.exports = Comment