const router = require('express').Router()
const {checkAuth} = require("../middlewares/index.js")
const {
    getAllUsers,
    getMyProfile,
    getOneProfile,
    changeProfile,
} = require("../controllers/user.controller.js")

router.get("/", checkAuth, getAllUsers)
router.get("/profile", checkAuth, getMyProfile)
router.get("/profile/:userId", checkAuth, getOneProfile)
router.patch("/profile/:userId", checkAuth, changeProfile)

module.exports = router