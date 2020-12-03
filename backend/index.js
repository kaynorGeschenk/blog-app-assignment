const express = require('express')
const app = express();
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose')
require ('dotenv').config();
const noteRouter = require('./controllers/note')
// const port = 5000

const config= {
    useNewURLParser: true,
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
app.use('/note', noteRouter)

app.listen(process.env.PORT, () => {
    console.log ("Express app is working")
})