import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

// Sample product object for demonstration
const product = {
    img: 'product.img', // Replace with your image path or URL
    name: 'Sample Product'
};

const ProductImage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});


    const getdata = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/products/${id}`);
            setProduct(response.data.products || {}); // Ensure product is not undefined
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getdata();
    }, [id]); // Include `id` as a dependency to refetch if `id` changes

    return (
        <div className="product-image-container">
            <ReactImageMagnify
                {...{
                    smallImage: {
                        alt: product.name || "Product Image",
                        isFluidWidth: true,
                        src: product.img || "placeholder-image-url" // Fallback image URL
                    },
                    largeImage: {
                        src: product.img || "placeholder-image-url", // Fallback image URL
                        width: 1200, // Adjust width according to your image
                        height: 1800 // Adjust height according to your image
                    }
                }}
            />
        
        </div>
    );
};

export default ProductImage;