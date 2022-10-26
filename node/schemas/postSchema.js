const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    photo: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
})

const exportUser = mongoose.model('postSchema', postSchema)

module.exports = exportUser