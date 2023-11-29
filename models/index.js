const Blog = require('./blog');
const User = require('./user');
const Comment = require('./comment');

User.hasMany(Blog,{
    foreignKey:"user_id",
    onDelte:"CASCADE",
})

Blog.belongsTo(User,{
    foreignKey:"user_id",
    })

    
Comment.belongsTo(User,{
        foreignKey:"user_id",
        })

module.exports = {User, Blog, Comment}

