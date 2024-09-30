import React from 'react'
import { LiaSmsSolid } from "react-icons/lia";
import { RiExchangeBoxLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaArrowsAltV } from "react-icons/fa";
const Crd = () => {
  return (
    <div>
      <hr></hr>
<div className="row">
    <div className="col-lg-3">
<div className="mann d-flex mt-4">
<div className="icon ">
    <LiaSmsSolid style={{height:"55px", width:"45px"}
    } className='li'/>
</div>
<div className="txt"><p className='fw-bold fs-20px'>Customer Support</p><p>Mon-Sat,9am to 6pm</p>
</div>
</div>
    </div>
    <div className="col-lg-3">
    <div className="mann d-flex mt-4">
<div className="icon ">
    <RiExchangeBoxLine style={{height:"55px", width:"45px"}
    } className='li'/>
</div>
<div className="txt"><p className='fw-bold fs-20px'>Easy Exchange</p><p>14 days easy exchange

</p>
</div>
</div>
    </div>
    <div className="col-lg-3">
    <div className="mann d-flex mt-4">
<div className="icon ">
    <IoLocationOutline style={{height:"55px", width:"45px"}
    } className='li'/>
</div>
<div className="txt"><p className='fw-bold fs-20px'>Store Locator</p><p>See all our outlets</p>
</div>
</div>
    </div>
    <div className="col-lg-3">
    <div className="mann d-flex mt-4">
<div className="icon ">
    <CiDeliveryTruck style={{height:"55px", width:"45px"}
    } className='li'/>
</div>
<div className="txt"><p className='fw-bold fs-20px'>Worldwide Delivery</p><p>T&C Applied</p>
</div>
</div>
    </div>
</div>
<hr></hr>
<h1 className='text-center'>Newsletter</h1>
<p className='text-center'>Sign up for our newsletter and receive exclusive offers!</p>
<input type="text" placeholder='Email' className='inpt ' />
<div>
    <input type="checkbox" id="scales" name="scales"   className='inm mt-2'/>

    <label for="scales" className='mx-2'>

    I agree to receiving marketing emails and special deals</label>
  </div>
    </div>
  )
}

export default Crd