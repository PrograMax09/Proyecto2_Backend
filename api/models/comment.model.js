const { DataTypes } = require("sequelize")
const { sequelize } = require("../../db/index.js")

const Comment = sequelize.define("Comment", {

    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

},
{timestamps: true}
)

module.exports = Comment