import React from 'react'

const Rating = (props) => {
    const {rating}=props;
  return (
    <div className='strs'>
    <div className="rating">
  <input defaultValue={5} name="rate" id="star5" type="radio" />
  <label title="text" htmlFor="star5" />
  <input defaultValue={4} name="rate" id="star4" type="radio" />
  <label title="text" htmlFor="star4" />
  <input defaultValue={3} name="rate" id="star3" type="radio" defaultChecked />
  <label title="text" htmlFor="star3" />
  <input defaultValue={2} name="rate" id="star2" type="radio" />
  <label title="text" htmlFor="star2" />
  <input defaultValue={1} name="rate" id="star1" type="radio" />
  <label title="text" htmlFor="star1" />
</div>


    </div>
  )
}

export default Rating