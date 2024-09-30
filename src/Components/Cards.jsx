import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Rating from './Rating';
const Cards = () => {
    const [product , setProduct] =useState([]);
    const getdata =async()=>{
        await axios.get('http://localhost:3001/products').then((data)=>{setProduct(data.data.products)})}
    useEffect(()=>{
        getdata();
    },[])
  return (
    <div>
<div className="row mt-4">
   
{
    product.map((x)=>{
        return(
            <div className="col-sm-6 col-md-4 col-lg-3 col-12 mb-4 cad">
  <div key={x.id} className="card " style={{width:"100%"}}>
           <Link to={`/cards/${x._id}`}> <div className="img-container">
          
  <img className="card-img-top img-fluid pictr" src={x.img} alt={x.altText || 'Description of image'} style={{height:"380px"}} />
  <div className="overlay"></div>
</div></Link>  
           

           
           
           
           
           
            
                <div className="card-body">
                    <h5 className="card-title">{x.title.slice(0,30)}</h5>
                    <p className="card-text"><Rating Rating={x.rating}/></p>
                   
{/* buton */}
<div data-tooltip="Price:-$20" className="button container bun ">
  <div className="button-wrapper">
    <div className="text">{x.price}</div>
    <span className="icon">
      <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
      </svg>
    </span>
  </div>
</div>





                </div>

            </div>
            </div>
        )
    })
}

 
   
</div>


    </div>
  )
}

export default Cards