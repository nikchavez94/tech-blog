const {Blog} = require('../models');
const blogData = [
    {
        title: "sometitle",
        content: "Loving yoyos isn't just about the skillful flick of the wrist or the satisfying hum of the spinning disk; it's an embrace of an art form that whirls with nostalgia and endless possibilities. The connection formed between a yoyo and its enthusiast transcends mere mechanics. It's an affair woven with patience, dedication, and an unwavering belief in the beauty of the circular motion. The rhythmic dance of the yoyo's ascent and descent mirrors life's ebbs and flows, teaching patience, resilience, and the joy of mastering a craft. In the heart of a yoyo lover resides a tapestry of memories spun from the simple pleasure of looping string and spinning plastic—a love that transcends the ordinary, elevating the ordinary into the extraordinary.",
        user_id: 1
    },


    
]

const seedBlogs = () => Blog.bulkCreate(blogData)


module.exports = seedBlogs