const router = require('express').Router();
const {User, Blog} = require('../models');

router.get('/', async (req, res) => {
    try {
    const userData = await Blog.findAll ({
        include: [
            {
                model: User, 
                attributes: ['userName'],
            }
        ],
        
    }) 
    const blogs = userData.map((blog)=> blog.get({plain: true}))
    console.log(blogs)
    res.render('homepage', {blogs})
    } catch (error) {
    res.status(500).json(error)    
    }
})

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("/profile", async (req, res) => {
    try {
      const blogData = await Blog.findAll({
        where:{
            user_id: req.session.user_id, 

        }

      })

      const userPosts = blogData.map((blog) => blog.get({plain: true}))
      console.log(userPosts)  
    res.render("profile", userPosts)
     
    } catch (err) {
    console.error(err) 
    res.status(500).json(err)   
    }
  
})

module.exports = router
