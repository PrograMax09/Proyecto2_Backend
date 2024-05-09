const router = require('express').Router()
const {checkAuth} = require("../middlewares/index.js")

const {createComment, getAllComments, getOneComment, updateComment, deleteComment, getUserComments} = require('../controllers/comment.controller.js')

router.post('/:forum_id', /*checkAuth, */createComment)
router.get('/forum/:topic/:comment_id', checkAuth, getOneComment)
router.get('/allComments/:topic/:user_id', checkAuth, getUserComments)
router.get('/:forum_id', /*checkAuth, */getAllComments)
router.patch('/forum/:topic/:comment_id', checkAuth, updateComment)
router.delete('/forum/:topic/:user_id/:comment_id', checkAuth, deleteComment)

module.exports = router