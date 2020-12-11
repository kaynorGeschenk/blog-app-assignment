const postRouter = require ('express').Router();
const Post = require('../models/post')

// Get all posts
postRouter.get('/', (request, response, next) => {
    console.log("hello")
    Post.find({}).then(res =>{
        response.status(200).send(res)
        next();
    })
})
// Get posts by passing name of specific author
postRouter.get('/:author', (request, response,next) => {
    const author = request.params.author 
    Post.find ({author: author}).then((res) =>{
        response.status(200).send(res)
        next();
    })
})

//Adding a new post to blog
postRouter.post('/',async (request, response, next) => {
    const {title,content,author} =request.body;

    if (title && content && author){
        const postCount = await Post.countDocuments();

        const newPost = new Post ({
            id:postCount +1,
            author: author,
            title: title,
            content:content,
            date: new Date(),
            upvotes: 0,
            downvote: 0,

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
        response.status(400).send({message: "Check your request body."})
    }
});

postRouter.delete('/:id', (request, response, next) => {
    deleteID = req.params.id
    Post.findOneAndDelete({id: deleteID}).then((res) => {
        response.status(200)
        next()
    }).catch((err) => console.log(err))
})





module.exports = postRouter