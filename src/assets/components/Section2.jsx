import React from 'react'

const Section2 = () => {
  return (
    <div>
      <div className="d-flex align-items-center text-white py-1 px-3 list rounded-3 ">
          <i class="bi bi-journals me-5 fs-4"></i>
          <span className="">Library</span>
        </div>
        <div className="d-flex align-items-center text-white py-1 px-3 list rounded-3 ">
          <i class="bi bi-arrow-counterclockwise me-5 fs-4"></i>
          <span className="">History</span>
        </div>
        <div className="d-flex align-items-center text-white py-1 px-3 list rounded-3 ">
          <i class="bi bi-play-btn me-5 fs-4"></i>
          <span className="">Your videos</span>
        </div>
        <div className="d-flex align-items-center text-white py-1 px-3 list rounded-3 ">
          <i class="bi bi-clock me-5 fs-4"></i>
          <span className="">Watch Later</span>
        </div>
        <div className="d-flex align-items-center text-white py-1 px-3 list rounded-3 ">
          <i class="bi bi-hand-thumbs-up me-5 fs-4"></i>
          <span className="">Liked videos</span>
        </div>
        <div className="d-flex align-items-center text-white py-1 px-3 list rounded-3 ">
          <i class="bi bi-chevron-down me-5 fs-4"></i>
          <span className="">Show more</span>
        </div>
        <hr className="text-white" />
    </div>
  )
}

export default Section2
