const { Sequelize, DataTypes } = require("sequelize");
const db = require('../db');
const sequelize = db.sequelize;
const Employee = sequelize.define("employee", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Employee;