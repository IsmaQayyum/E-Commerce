import React from 'react'
import '../Style/Main.css'
import '../Style/Cards.css'
import { Link } from 'react-router-dom'
const Main = () => {
  return (
    <div>
<div className="row">
    <div className="col-sm-6 col-md-4 col-lg-3 col-12 imaagg">
      <Link to='/menshirts'>
    <button className='mn'>Mens Shirts</button></Link>
    </div>
    <div className="col-lg-4 imge1">
   <button className='mn'>Women Shirts</button>
    </div>
    <div className="col-lg-4 imaag2">
   <button className='mn'>Mens Teeshirts</button>
</div>
</div>
<div className="row">
  <div className="col-lg-6 imgg" >
<button className='mni'>Shop Womens</button>
  </div>
  <div className="col-lg-6 imgg1">
    <button className='mni'>Shop Mens</button>
  </div>
</div>



    </div>
  )
}

export default Main