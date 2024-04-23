import mongoose from 'mongoose'

const cartItemSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    }
})

const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    items:[cartItemSchema],
    createdAt: {
        type: Date,
        default: Date.now
      }
})

const cartModel = new mongoose.model('Cart',cartSchema)
export default cartModel;