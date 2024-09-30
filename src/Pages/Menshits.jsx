import React from 'react'
import Navbar from '../Components/Navbar'
import '../Style/Menshirt.css'
import { Link } from 'react-router-dom'
import Cards from '../Components/Cards'

const Menshits = () => {
  return (
    <div>
<Navbar/>
<div className="btuun ">
<button className="btn btn1 ">Flat 50% Off
</button>
<button className="btn btn1">Upto 50% Off
</button>
<button className="btn btn1">About 50% Off
</button>
<button className="btn">40% Off
</button>
<button className="btn">30% Off
</button>

</div>
<p>
<Link to='/' className='hm'>Home</Link>/Men Casual Shirts</p>

<button class="buon">Men Casual Shirts</button>

<Cards/>
    </div>
  )
}

export default Menshits