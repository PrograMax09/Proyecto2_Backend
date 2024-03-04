const { checkDB, syncModels } = require("./db/index.js")
const addRelations = require('./db/relations.js')

const User = require("./api/models/user.model.js")
const Comment = require("./api/models/comment.model.js")
const Friend = require("./api/models/friend.model.js")

async function dbConnect() {
    try {
        await checkDB()
        addRelations()
        await syncModels()
    } catch (error) {
        console.log(error)
    }
}

dbConnect()