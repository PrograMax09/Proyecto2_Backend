const { DataTypes } = require("sequelize")
const { sequelize } = require("../../db/index.js")

const User = sequelize.define("user", {
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM("user", "admin"),
        defaultValue: "user"
    },
    gender: {
        type: DataTypes.ENUM("male", "female", "non-binary", "prefer not to tell"),
        defaultValue: "prefer not to tell"
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
},
{timestamps: false}
)

module.exports = User