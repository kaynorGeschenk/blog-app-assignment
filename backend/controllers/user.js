const userRouter = require ('express').Router()
const Post = require('../models/user')
const bcrypt = require('bcrypt')




userRouter.get('/', (request, response,next) => {
    Post.find ({}).then(res =>{
        response.status(200).send(res)
        next();
    })
})

//to add a sign up info into the database
userRouter.post('/SignUp',async (request, response, next) => {
    const Email =request.body.Email
    const PasswordHash = bcrypt.hashSync(request.body.password)
    const FullName =request.body.FullName
    const Username =request.body.Username
    if (Email && PasswordHash && FullName && Username){

        const newUser = new user({
            Email: Email,
            PasswordHarsh: PasswordHarsh,
            FullName: FullName,
            Username: Username

        })

        newUser.save()
        .then (res => {
            response.status(201).send("You have successfully signed up");
        })
        .catch(err => {
            console.log(err)
            response.sendStatus(501).send("Sign Up failed");
        })
    }

    else {
        response.status(400).send({message: "Incorrect Email or Password"})
    }
    next()
});

userRouter.post('/SignIn', async (request, response, next) => {
    const Email = request.body.Email
    const password = request.body.password

    if(Email && password) {
        const user = await User.findOne({Email: Email})
        if(bcrypt.compareSync(password, user.PasswordHash)) {
            response.status(200).send("Welcome. You have signed in")

        } else{
            response.status(401).send('Sign in unsuccessful')
        }
        
    }else {
        response.status(400).send('No username or password')
    }
    next()
})


module.exports = userRouter


