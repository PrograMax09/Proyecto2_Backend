const { DataTypes } = require("sequelize")
const { sequelize } = require("../../db/index.js")

const Achievement = sequelize.define("Achievement", {
    badge: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    badge_img: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{timestamps: true}
)

module.exports = Achievement