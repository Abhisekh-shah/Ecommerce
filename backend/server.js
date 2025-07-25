import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongoDB.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/user.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// Middlewares
app.use(express.json())
app.use(cors())

//Api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)

app.get('/',(req,res)=>{
    res.send('API Working')
})

app.listen(port,()=> console.log('Server started on PORT : ' +port))
