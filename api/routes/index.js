const router = require('express').Router()

const userRouter = require('./user.router.js');
const authRouter = require('./auth.router.js')
const forumRouter = require('./forum.router.js')
const commentRouter = require('./comment.router.js')

router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use('/forum', forumRouter)
router.use('/comment', commentRouter)

module.exports = router