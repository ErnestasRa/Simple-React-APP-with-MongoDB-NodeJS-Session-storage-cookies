const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    secret: {
        type: String,
        required: true,
    },
})

const exportUser = mongoose.model('newNdTask', taskSchema)

module.exports = exportUser