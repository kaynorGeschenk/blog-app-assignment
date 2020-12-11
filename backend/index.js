const express = require('express')
const app = express();
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose')
require ('dotenv').config();
const postRouter = require('./controllers/post')
const userRouter = require('./controllers/user')



const config= {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


mongoose.connect(process.env.MONGODB_URI, config)
.then(() => {
    console.log("Successfully connected to MongoDB")
})

.catch(err => {
    console.error("Some problem occured", err)
})


app.use(bodyParser.json());
app.use(function (error, req, res, next) {
    if(error instanceof SyntaxError){ //Handle SyntaxError here.
      return res.status(500).send({data : "Invalid data"});
    } else {
      next();
    }
  });
app.use('/post', postRouter)
app.use('/user', userRouter)

app.listen(process.env.PORT, () => {
    console.log ("Returning feedback", process.env.PORT)
})