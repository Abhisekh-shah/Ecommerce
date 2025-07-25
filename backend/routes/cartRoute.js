import express from 'express'
import { addToCart, getUserCart,updateCart } from '../controllers/cartController.js'
import authUser from '../middleware/auth.js'

const cartRouter =express()

cartRouter.post('/get' , authUser, getUserCart)
cartRouter.post('/add' ,authUser, addToCart)
cartRouter.post('/get' ,authUser, updateCart)

export default cartRouter;