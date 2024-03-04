const { DataTypes } = require("sequelize")
const { sequelize } = require("../../db/index.js")

const Friend = sequelize.define("Friend", {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    friend_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{timestamps: true}
)

module.exports = Friend