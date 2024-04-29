const { DataTypes } = require("sequelize")
const { sequelize } = require("../../db/index.js")

const Forum = sequelize.define("Forum", {
    topic: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING
    }
},
{timestamps: true}
)

module.exports = Forum