const router = require('express').Router()
const {checkAuth} = require("../middlewares/index.js")
const {
    getAllUsers,
    getMyProfile,
    changeProfile,
} = require("../controllers/user.controller.js")

router.get("/", getAllUsers)
router.get("/profile", checkAuth, getMyProfile)
router.patch("/profile", checkAuth, changeProfile)

module.exports = router