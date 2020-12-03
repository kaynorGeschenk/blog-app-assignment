const postRouter = require ('express').Router()
const Post = require('../models/post')



postRouter.get('/', (request, response,next) => {
    Post.find ({}).then(res =>{
        response.status(200).send(res)
        next();
    })
})


postRouter.post('/',async (request, response, next) => {
    const {title,content,author,name} =request.body;

    if (title && content && name && author){
        const postCount = await Post.countDocument();

        const newPost = new Note ({
            id:PostCount +1,
            name: name,
            author: author,
            title: title,
            date: (""),
            upvote: [0],
            downvote: [0],
            content:content

        })

        newPost.save()
        .then (res => {
            response.status(201).send(res);
        })
        .catch(err => {
            console.log(err)
            response.sendStatus(501);
        })
    }

    else {
        response.status(400).send({message: "Check your request body"})
    }
});


module.export = noteRouter