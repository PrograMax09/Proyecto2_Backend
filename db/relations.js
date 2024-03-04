const User = require("../api/models/user.model.js")
const Comment = require("../api/models/comment.model.js")
const Description = require("../api/models/description.model.js")
const Forum = require("../api/models/forum.model.js")


function addRelations() {
    try {
        
        //one to one - User & Description
        User.hasOne(Description)
        Description.belongsTo(User)

        //one to many - User & Comment
        User.hasMany(Comment, {
            onDelete: "SET NULL",
            foreignKey: {
                name: "user_id",
            },
        })
        Comment.belongsTo(User, {
            onDelete: "SET NULL",
            foreignKey: {
                name: "user_id",
            },
        })

        //one to many - Forum & Comment
        Forum.hasMany(Comment, {
            foreignKey: {
                name: "forum_id",
                allowNull: false,
            },
        })
        Comment.belongsTo(Forum, {
            foreignKey: {
                name: "forum_id",
                allowNull: false,
            },
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports = addRelations