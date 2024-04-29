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

const getOneProfile = async (req, res) => {
  try {
      const user = await User.findByPk(req.params.userId, {
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

  if (res.locals.user.role === "admin" || String(res.locals.user.id ) === req.params.userId) {
    try {
      const user = await User.findByPk(req.params.userId, {
          attributes: {
            exclude: ['password']
          },
          include: {
            model: Description,
          }  
        })
    
        if (!user) {
          return res.status(404).send('User not found')
        }
        
        //user.update(req.body)

        if (req.body.Description) {
          console.log(user)
          let descriptionData = {...user?.Description}
          console.log('descriptionData ', descriptionData)
          
           if ( req.body.Description?.neurodivergent_trait) {
          descriptionData.neurodivergent_trait = req.body.Description.neurodivergent_trait;
          }
          if ( req.body.Description?.about_me ) {
            descriptionData.about_me = req.body.Description.about_me;
          }

        // Actualizar la descripción si hay datos para actualizar
        if (user?.Description && Object.keys(descriptionData).length > 0) {
          await user?.Description.update(descriptionData)
          

          }else {
            console.log(descriptionData, user)
            await user.createDescription({
               ...descriptionData,
               //userId: user.id
            })
          }
        } 
        
        await user.save()
        return res.status(200).json(user)
    } catch (error) {
      console.log('Error getting your profile' + error.message)
      return res.status(500).send('Error getting your profile' + error.message)
    }
  }
  else {
    res.status(500).send("Unauthorized")
  }
}

module.exports = {
  getAllUsers,
  getMyProfile,
  getOneProfile,
  changeProfile,
}