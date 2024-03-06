const { where } = require('sequelize')
const Forum = require('../models/forum.model.js')

const createForum = async function(req, res) {
    if (res.locals.user.role === "admin") {
        try {
            const checkForum = await Forum.findOne({where: {topic: req.body.topic}})
            if (checkForum) {
                return res.status(400).send('Forum already exists')
            }
            const newForum = await Forum.create(req.body)
            res.status(200).send({message: 'Forum created!', newForum})
        } catch (error) {
            console.log('Error creating a forum', error)
            res.status(400).send('Error creating a forum')
        }
    } else {
        res.status(500).send('Unauthorized')
    }
}

const getAllForums = async function(req, res) {
    try {
        const allForums = await Forum.findAll()
        if (!allForums) {
            return res.status(400).send('Error getting all forums')
        }
        res.status(200).send(allForums)
    } catch (error) {
        console.log('Error getting all forums', error)
        res.status(400).send('Error getting all forums')
    }
}

const getOneForum = async function(req, res) {
    try {
        const oneForum = await Forum.findOne({where: {topic: req.params.topic}})
        if (!oneForum) {
            return res.status(400).send('Error getting a forum')
        }
        res.status(200).send(oneForum)
    } catch (error) {
        console.log('Error getting a forum', error)
        res.status(400).send('Error getting a forum')
    }
}

const deleteOneForum = async function(req, res) {
    try {
        const deleteForum = await Forum.destroy({where: {topic: req.params.topic}})
        if (!deleteForum) {
            return res.status(400).send('Error deleting a forum')
        }
        res.status(200).send('Forum deleted')
    } catch (error) {
        console.log('Error deleting a forum', error)
        res.status(400).send('Error deleting a forum')
    }
}

const updateOneForum = async function(req, res) {
    try {
        const forum = await Forum.findOne({where: {topic: req.params.topic}})
        if (!forum) {
            return res.status(400).send('Error updating a forum')
        }
        const updateForum = await forum.update(req.body)
        updateForum.save()
        res.status(200).send(updateForum)
    } catch (error) {
        console.log('Error updating a forum', error)
        res.status(400).send('Error updating a forum')
    }
}

module.exports = {createForum, getAllForums, getOneForum, deleteOneForum, updateOneForum}