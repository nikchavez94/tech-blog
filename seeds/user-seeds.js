const {User} = require('../models');
const userData = [
    {
        userName: "user1",
        email: "user1@email.com",
        password: "pass123",
    },
    {
        userName: "user2",
        email: "user2@email.com",
        password: "pass123",
    },

    {
        userName: "user3",
        email: "user2@email.com",
        password: "pass123",
    },

    {
        userName: "user4",
        email: "user4@email.com",
        password: "pass123",
    },
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers