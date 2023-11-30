const {Comment} = require('../models');
const commentData = [
    {
        content:"Yoyos succcckkkk"
    },
    
]

const seedComments = () => Comment.bulkCreate(commentData)


module.exports = seedComments