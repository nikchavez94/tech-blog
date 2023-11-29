const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use((req, res) => {
    res.send('<h1>wrong route</h1>')
})

module.exports = router; 

//check with Rene, this I think is all done