import React from 'react'

const Section1 = () => {
  return (
    <div>
         <div className="d-flex align-items-center text-white py-1 px-3 list rounded-3 active">
          <i class="bi bi-house-door-fill me-5 fs-4"></i>
          <span className="">Home</span>
        </div>
        <div className="d-flex align-items-center text-white py-1 px-3 list rounded-3 ">
          <i class="bi bi-lightning-charge me-5 fs-4"></i>
          <span className="">Shorts</span>
        </div>
        <div className="d-flex align-items-center text-white py-1 px-3 list rounded-3 ">
          <i class="bi bi-collection-play me-5 fs-4"></i>
          <span className="">Subscriptions</span>
        </div>
        <hr className="text-white" />
    </div>
  )
}

export default Section1
