import Product from "../model/product.js"
import asyncHandler from "express-async-handler"
export const addProduct = asyncHandler(
    async(req, res)=>{
        try {
            const product = req.body;
            const products = await Product.create(product)
               res.status(200).json({
                  message: "product created successfully",
                  products: products,
                  pagination:{}
               })
               
        } catch (error) {
           res.status(500).json({
             message: error.message,
             data: null
           }) 
        }
        
        }
)

export const fetchProduct = asyncHandler(
    async(req, res)=>{
        try {
    
            const products =await Product.find()
            res.status(200).json({
                message: 'product fetch successfully',
                products:products,
                status:200
                
            })
        } catch (error) {
            res.status(500).json({
                message: 'internal server error',
                error:error,
                status:500
            })
        }
        
        }
)

export const fetchProductbyid = asyncHandler(
    async(req, res)=>{
        try {
            const id = req.params.id
            const products = await Product.findById(id)
            res.status(200).json({
                message: 'product fetch successfully',
                products:products,
                status:200
                
            })
        } catch (error) {
            res.status(500).json({
                message: 'internal server error',
                error:error,
                status:500
            })
        }
        
        }
)
export const fetchProductbyidandupdate = asyncHandler(
    async(req, res)=>{
        try {
            const id = req.params.id
            const detail = req.body;
            const products = await Product.findByIdAndUpdate(id, detail)
            res.status(200).json({
                message: 'product update successfully',
                products:products,
                status:200
                
            })
        } catch (error) {
            res.status(500).json({
                message: 'internal server error',
                error:error,
                status:500
            })
        }
        
        }
)

export const productdelete = asyncHandler(
    async(req, res)=>{
        try {
            const id = req.params.id
            const products = await Product.findByIdAndDelete(id)
            res.status(200).json({
                message: 'product delete successfully',
                products:products,
                status:200
                
            })
        } catch (error) {
            res.status(500).json({
                message: 'internal server error',
                error:error,
                status:500
            })
        }
        
        }
)