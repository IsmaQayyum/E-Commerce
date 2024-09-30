import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
    title:{
    type:String,
   
},
description:{
    type:String,
  
},

category:{
    type:String,
    
},
price:{
    type:Number,
  
},

discountPercentage:{
    type:Number,
}
    ,
    rating:{
        type:Number,
      
    },
    stock:{
        type:Number,
        
    },
    thumbnail:{
        type:String,
    },
    img:{
        type:String,
    }
  
   
})

const Product = mongoose.model('products', productSchema);

export default Product;