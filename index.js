import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import cookieParser from 'cookie-parser'
dotenv.config()
import cors from 'cors';
//Router
import bookingRouter from './routes/bookingRoute.js'
import adminRouter from './routes/adminRoute.js'
import bookingPlanRouter from './routes/bookingPlanRoute.js'
import datesRouter from './routes/datesRoutes.js'
import dinnerDateRoutes from './routes/dinnerDateRoutes.js'
import ramadanDinnerDateRoutes from './routes/ramadanDinnerDateRoutes.js'
import lunchDateRoutes from './routes/lunchDateRoutes.js'
import teaDateRoutes from './routes/teaDateRoutes.js'
import errorHandlerMiddleware from './middlewares/errorHandleMiddleware.js'


const __dirname = path.resolve();

const app = express()
app.use(cors());


const PORT = process.env.PORT || 4000

//Middlewares
app.use(express.json())
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '/client/dist')))

app.use("/api/v1/booking", bookingRouter)
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/bookingplan", bookingPlanRouter)
app.use("/api/v1/dates-manage", datesRouter)
app.use("/api/v1/dinner-dates-manage", dinnerDateRoutes)
app.use("/api/v1/lunch-dates-manage", lunchDateRoutes)
app.use("/api/v1/tea-dates-manage", teaDateRoutes)
app.use("/api/v1/ramadan-dinner-dates-manage", ramadanDinnerDateRoutes)


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

