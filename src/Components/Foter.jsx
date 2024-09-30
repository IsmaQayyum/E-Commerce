import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { RiTiktokLine } from "react-icons/ri";
const Foter = () => {
  return (
    <div>
<hr></hr>
<div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">    CUSTOMER SUPPORT<br></br>





</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Email Us</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">cs@furorjeans.com</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">021-37175353</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">MON-SAT 9:00 TO 6:00</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">    ABOUT FUROR<br></br>




Track Your Order</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Store Locator</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Our Story</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Return & Exchange</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Terms & Conditions</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Privacy Policy</a></li>
         
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">    TOP CATEGORIES Shoes</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Monochrome Collection</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Summer Drop '24</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Women Shirts</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Tops & Blouses</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">
          Men Tees</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Tops & Blouses</a></li>
        </ul>
      </div>
      <div className="col-md-5 offset-md-1 mb-3 ">
        <form>
       <h5> CONNECT WITH US<br></br></h5>
    <FaFacebookSquare style={{height:"30px" , width:"25px"}} className='mx-2'/>
    <FaInstagram style={{height:"30px" , width:"25px"}} className='mx-2'/>
    <IoLogoYoutube style={{height:"30px" , width:"25px"}} className='mx-2'/>
    <FaWhatsapp style={{height:"30px" , width:"25px"}} className='mx-2'/>
    <RiTiktokLine style={{height:"30px" , width:"25px"}} className='mx-2'/>
    <h5 className='mt-2'>Payment Methodes</h5>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top ">
      <p className='ct'>© 2024 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
      </ul>
    </div>
  </footer>
</div>




    </div>
  )
}

export default Foter