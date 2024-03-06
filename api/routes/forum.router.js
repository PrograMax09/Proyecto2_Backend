const router = require('express').Router()
const { 
    createForum,
    getAllForums,
    getOneForum,
    deleteOneForum,
    updateOneForum,
  } = require('../controllers/forum.controller.js')
const {
    checkAdmin,
    checkAuth,
  } = require('../middlewares/index.js')

  router.post('/', checkAuth, checkAdmin, createForum)
  router.get('/', checkAuth, getAllForums)
  router.get('/:topic', checkAuth, getOneForum)
  router.patch('/:topic', checkAuth, checkAdmin, updateOneForum)
  router.delete('/:topic', checkAuth, checkAdmin, deleteOneForum)
module.exports = router