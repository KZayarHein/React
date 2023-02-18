import React from "react";


const Section3 = ({ img, chanel }) => {
//   console.log(img, title);
    const trunc = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        }
        return str;
    }
  return (
    <>
      <div className="d-flex align-items-center text-white py-2 list rounded-3 ">
        <img src={img} className='sub-img' alt="" />
        <small className="ms-3 fs-">{trunc(chanel, 28)}
        {/* <i class="bi bi-broadcast text-danger"></i> */}
        </small>
      </div>
    </>
  );
};

export default Section3;
