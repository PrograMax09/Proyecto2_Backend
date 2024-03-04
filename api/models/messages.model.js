const { DataTypes } = require("sequelize")
const { sequelize } = require("../../db/index.js")

const Messages = sequelize.define("Messages", {
    sender_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    receiver_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
},
{timestamps: true}
)

module.exports = Messages