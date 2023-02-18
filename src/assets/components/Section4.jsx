import React from 'react'

const Section4 = () => {
  return (
    <div>
      <div className="d-flex align-items-center text-white py-1 list rounded-3 ">
          <i class="bi bi-gear me-5 fs-4"></i>
          <span className="">Settings</span>
        </div>
      <div className="d-flex align-items-center text-white py-1 list rounded-3 ">
          <i class="bi bi-flag me-5 fs-4"></i>
          <span className="">Report history</span>
        </div>
      <div className="d-flex align-items-center text-white py-1 list rounded-3 ">
          <i class="bi bi-question-circle me-5 fs-4"></i>
          <span className="">Help</span>
        </div>
      <div className="d-flex align-items-center text-white py-1 list rounded-3 ">
          <i class="bi bi-exclamation-circle me-5 fs-4"></i>
          <span className="">Send feedback</span>
        </div>
    </div>
  )
}

export default Section4
