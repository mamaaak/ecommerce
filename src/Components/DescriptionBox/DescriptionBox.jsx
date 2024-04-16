import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae numquam animi, nemo culpa explicabo, est, alias vitae amet nulla provident repudiandae libero nihil at. Optio dolorum ab accusamus aperiam? Repudiandae!</p>
      </div>
    </div>
  )
}

export default DescriptionBox
