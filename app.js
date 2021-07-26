const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/notfound')
require('dotenv').config()
const errorHandler = require('./middleware/errorHandler')



//middleware
app.use(express.static('./public'))
app.use(express.json())


// routes
app.use('/api/v1/tasks', tasks)

// middleware for route not found error
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3000



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`server is listening on port ${PORT}`))
    } catch (err) {
        console.log(error)
        process.exit(1)
    }

}

start()