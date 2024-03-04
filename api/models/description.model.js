const { DataTypes } = require("sequelize")
const { sequelize } = require("../../db/index.js")

const Description = sequelize.define("Description", {
    neurodivergent_trait: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    about_me: {
        type: DataTypes.TEXT,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{timestamps: false}
)

module.exports = Description