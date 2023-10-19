const express = require('express')
const app = express()
const cors = require('cors')
const connectDb = require('./db/db')
const userRouter = require('./routes/user_routes')


const port  = 9000
app.use(cors())
app.use(express.json())
app.use('/users' , userRouter )

app.listen(port , ()=>{
    connectDb()
    console.log(`sever listen on http://localhost:${port}`)
})