const {Sequelize} = require('sequelize')
const sequelize = require('../utils/db')

const Expense = sequelize.define('expense', {
    expenses: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false    
    },

})

module.exports = Expense;