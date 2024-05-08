const Forum = require('../models/forum.model.js')
const Comment = require('../models/comment.model.js')
const User = require('../models/user.model.js')

const createComment = async function(req, res) { 
    try {
        const forum = await Forum.findByPk(req.params.forum_id)

        if (!forum) {
            return res.status(500).send("Forum not found")
        }
        const comment = await Comment.create({content: req.body.content, forum_id: forum.id, user_id: res.locals.user.id})
        res.status(200).send(comment)
    } catch (error) {
        console.log('Error creating a comment', error)
        res.status(400).send('Error creating a comment')
    }
}

const getAllComments = async function(req, res) { 
    try {
        const forum = await Forum.findByPk(req.params.forum_id)
        if (!forum) {
            return res.status(500).send("Forum not found")
        }
        const comments = await Comment.findAll({where: {forum_id: forum.id}, 
        include: [{
            model: User,
            as: "user",
            attributes: ["username", "id"]
        }]})
        if (comments.length === 0) {
            return res.status(500).send("This forum has no comments yet")
        }
        res.status(200).send(comments)
    } catch (error) {
        console.log('Error getting all comments', error)
        res.status(400).send('Error getting all comments')
    }
}

const getOneComment = async function(req, res) { 
    try {
        const forum = await Forum.findOne({where: {topic: req.params.topic}})
        if (!forum) {
            return res.status(500).send("Forum not found")
        }
        const comment = await Comment.findOne({where: {forum_id: forum.id, id: req.params.comment_id}})
        if (!comment) {
            return res.status(500).send("This forum has no comment yet")
        }
        res.status(200).send(comment)
    } catch (error) {
        console.log('Error getting a comment', error)
        res.status(400).send('Error getting a comment')
    }
}

const updateComment = async function(req, res) { 
    try {
        const forum = await Forum.findOne({where: {topic: req.params.topic}})
        if (!forum) {
            return res.status(500).send("Forum not found")
        }
        const comment = await Comment.findOne({where: {forum_id: forum.id, id: req.params.comment_id}})
        if (!comment) {
            return res.status(500).send("This forum has no comment yet")
        }
        await comment.update({content: req.body.content})
        comment.save()
        res.status(200).send(comment)
    } catch (error) {
        console.log('Error updating a comment', error)
        res.status(400).send('Error updating a comment')
    }
}

const deleteComment = async function(req, res) { 
    if (res.locals.user.role === 'admin' || res.locals.user.id === req.params.user_id) {
        try {
            const forum = await Forum.findOne({where: {topic: req.params.topic}})
            if (!forum) {
                return res.status(500).send("Forum not found")
            }
            const comment = await Comment.findOne({where: {forum_id: forum.id, id: req.params.comment_id}})
            if (!comment) {
                return res.status(500).send("This forum has no comment yet")
            }
            await comment.destroy()
            res.status(200).send("Deleted comment succesfully!")
        } catch (error) {
            console.log('Error deleting a comment', error)
            res.status(400).send('Error deleting a comment')
        }
    } else  {
        res.status(500).send('Unauthorized!!')
    }
}

const getUserComments = async function(req, res) { 
    try {
        const forum = await Forum.findOne({where: {topic: req.params.topic}})
        const user = await User.findOne({where: {id: req.params.user_id}})
        if (!forum) {
            return res.status(500).send("Forum not found")
        }
        
        if (!user) {
            return res.status(500).send("User not found")
        }
        const comments = await Comment.findAll({where: {forum_id: forum.id, user_id: user.id}})
        if (comments.length === 0) {
            return res.status(500).send("This forum has no comments from that user yet")
        }
        res.status(200).send(comments)
    } catch (error) {
        console.log("Error getting a user's comments", error)
        res.status(400).send("Error getting a user's comments")
    }
}

module.exports = {createComment, getAllComments, getOneComment, updateComment, deleteComment, getUserComments}

