const postSchema = require('../schemas/postSchema')
const bcrypt = require('bcrypt')
const { uid } = require('uid')
const sendRes = require("../modules/universal-res")
const session = require('express-session')

module.exports = { 
    register: async (req, res) => {
        const {email, password} = req.body

        const hash = await bcrypt.hash(password, 10)

        async function newUser() {
                const user = new userSchema({
                    email: email,
                    password: hash,
                    secret: uid(),
                })
                console.log(user)
                const member = await user.save()
       }
        res.send({OK:'ok'})
        newUser()
    },
    login: async (req, res) => {
        const {email,password} = req.body
        const user = await taskSchema.findOne({email})
        if(user){
            const compare = await bcrypt.compare(password, user.password)
            
            if(compare) return sendRes(res, false, 'all good', {secret: user.secret})

        } else {
            return res.send({error: 'user not found'})
        }
    },
    postuser: async(req, res) => {
        const {email} = req.body
        req.session.email = email
        if(req.session.email) return sendRes(res, false, 'all good', {session: req.session.email})
    },
    createpost: async(req,res) => {
        const {title, photo} = req.body
        console.log(title,photo)
        if(req.session.email) {
            async function newPost() {
                const post = new postSchema({
                    title: title,
                    photo: photo,
                })
                console.log(post)
                const member = await post.save()
       }
       sendRes(res, false, 'post created', {session: req.session.email})
       newPost()
        } else {
            sendRes(res, true, 'user has no email',{error: 'user no email'})
        }
    },
    mainpage: async(req, res) => {
        if(req.session.email){
           const allPosts = await postSchema.find({})
           sendRes(res, false, 'OK', {email: req.session.email, allPosts})
        } else {
            return res.send({error: 'email doesnt exist'})
        }
    }
}

