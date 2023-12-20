const router = require('express').Router();
const {User} = require('../../models');


router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password

      });
  
      req.session.save(() => {
        req.session.userId = userData.id;
        req.session.userName = userData.userName;
        req.session.email = userData.email;
        req.session.loggedIn = true;
        console.log(userData)
  
        res.status(200).json(userData);
      });

    } catch (err) {
      console.error(err)
      res.status(400).json(err);
    }
  });

  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  console.log(userData, "This is my user data")
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  console.log(req.body.password, "This is my password info")
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  

router.get('/all',async (req, res)=>{
    try {
        const userData = await User.findAll()
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json(error)
    }
})


  module.exports = router;



