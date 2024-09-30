import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { RiTiktokLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className='foter'>
<div className="row ">
    <div className="col-lg-3 tst">
    CUSTOMER SUPPORT<br></br>
Email Us<br></br>
cs@furorjeans.com<br></br>

021-37175353<br></br>

MON-SAT 9:00 TO 6:00
    </div>
    <div className="col-lg-3 txx">
    ABOUT FUROR<br></br>
Store Locator<br></br>
Our Story<br></br>
Return & Exchange<br></br>
Terms & Conditions<br></br>
Privacy Policy<br></br>
Track Your Order
    </div>
    <div className="col-lg-3 tx">
    TOP CATEGORIES<br></br>
Monochrome Collection<br></br>
Summer Drop '24<br></br>
Women Shirts<br></br>
Tops & Blouses<br></br>
Men Tees<br></br>
Shoes
    </div>
    <div className="col-lg-3 cont">
    CONNECT WITH US<br></br>
    <FaFacebookSquare style={{height:"30px" , width:"25px"}} className='mx-2'/>
    <FaInstagram style={{height:"30px" , width:"25px"}} className='mx-2'/>
    <IoLogoYoutube style={{height:"30px" , width:"25px"}} className='mx-2'/>
    <FaWhatsapp style={{height:"30px" , width:"25px"}} className='mx-2'/>
    <RiTiktokLine style={{height:"30px" , width:"25px"}} className='mx-2'/>
    <h5 className='mt-2'>Payment Methodes</h5>
    
    </div>


    <hr ></hr>
    <h6 className='text-center text-white'>COPYRIGHT © 2024 FURORJEANS
    </h6>
</div>





    </div>
  )
}

export default Footer