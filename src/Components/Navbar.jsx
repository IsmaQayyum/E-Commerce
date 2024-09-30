import React from 'react'
import '../Style/Navbar.css'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";




const Navbar = () => {
  const data = useSelector((state)=>state.cartReducer.cartItems)
  return (
    <div>
<marquee className=" bg-dark pt-2 pb-2"><a className=' text-white text-decoration-none'> Free Delivery Accross Pakistan With Card Payment Apply code "Free Shipping"</a>
<a className='text-decoration-none fw-bold mx-5 ab'>Summer Markdowns-upto 50% off</a></marquee>

<div className="nav-section">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand fw-bold logo" to="/">FUROR</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
   
        <li className="nav-item">
        <Link class="nav-link active abx " to="/men" >
            Mens
          </Link>
        </li>
        <li className="nav-item">
        <Link class="nav-link active abc " to="/women" >
            Womens
          </Link>
        </li>
        <li className="nav-item">
        <a class="nav-link active abc dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accessories
          </a>
        </li>
        <li className="nav-item">
        <a class="nav-link active abc dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Footwear
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  active abc" href="#">Monochrome Collection</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link  active abs" to="/register">Login</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link  active abd" href="#"><IoMdSearch style={{width:"30px" , height:"25px"}}/></a>
        </li>
        <li className="nav-item">
          
         
 <Link to="/cart">       <Badge badgeContent={4} color="primary">
        <a className="nav-link  active abd" href="#"><FaCartShopping style={{width:"30px" , height:"25px"}}/></a>
        
</Badge></Link>
</li>
           
           <li className="nav-item">
          <a className="nav-link  active abd" href="#"><SiWhatsapp style={{width:"30px" , height:"25px"}}/></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>

    </div>
  )
}

export default Navbar