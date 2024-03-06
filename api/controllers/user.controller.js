const User = require('../models/user.model.js') 
const Description = require('../models/description.model.js')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({attributes: {exclude: ['password']}, 
    include: Description 
  })
    res.status(200).json(users)
  } catch (error) {
    console.log('Error getting all users', error)
    res.status(400).send('Error getting all users', error)
  }
}

const getMyProfile = async (req, res) => {
    try {
        const user = await User.findByPk(res.locals.user.id, {
            attributes: {
              exclude: ['password']
            },
            include: Description 
          })
      
          if (!user) {
            return res.status(404).send('User not found')
          }
      
          return res.status(200).json(user)
    } catch (error) {
    console.log('Error getting your profile', error)
    res.status(400).send('Error getting your profile', error)
    }
}

const changeProfile = async (req, res) => {
  try {
      const user = await User.findByPk(res.locals.user.id, {
          attributes: {
            exclude: ['password']
          },
          include: Description 
        })
    
        if (!user) {
          return res.status(404).send('User not found')
        }
        user.update(req.body)
        user.save()
        return res.status(200).json(user)
  } catch (error) {
  console.log('Error getting your profile', error)
  res.status(400).send('Error getting your profile', error)
  }
}

module.exports = {
  getAllUsers,
  getMyProfile,
  changeProfile,
}