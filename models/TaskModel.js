const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:',{
    
});

class TaskModel extends Model{
    title;
    description;
}

TaskModel.init({
    id:{
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    taskToken: DataTypes.TEXT,
    title: DataTypes.TEXT,
    description: DataTypes.TEXT
},{
    sequelize,
    modelName: 'TaskModel',
    tableName: 'Tasks'
});
(async ()=> await sequelize.sync({ force: true }))()

module.exports = TaskModel;