import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import cookieParser from 'cookie-parser'
dotenv.config()

//Router
import bookingRouter from './routes/bookingRoute.js'
import adminRouter from './routes/adminRoute.js'
import errorHandlerMiddleware from './middlewares/errorHandleMiddleware.js'


const __dirname = path.resolve();

const app = express()


const PORT = process.env.PORT || 4000

//Middlewares
app.use(express.json())
app.use(cookieParser())


app.use("/api/v1/booking", bookingRouter)
app.use("/api/v1/admin", adminRouter)

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.use(errorHandlerMiddleware)

const dbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        app.listen(PORT, () => {
            console.log("Server is Runnning on PORT : ", PORT);
        })
    } catch (error) {
        console.log(error);
    }
}

dbConn()

