import React from "react";

const Card = ({ data }) => {
//   console.log(data);
const excerpt = (str, maxLength) => {
    if(str.length > maxLength) {
        return str.substring(0, maxLength)+'...';
    }
    return str;
}

  return (
    <>
      <div className="col-3">
            <div className="card-vid">
              <img src={data.thumbnail} className="round" width="100%" alt="" />
              <div className="text-white d-flex mt-3 ">
                <img
                  src={data.profile}
                  height="40px"
                  className="rounded-circle me-3"
                  alt=""
                />
                <div className="">
                  <h6 className="lh-sm">{excerpt(data.title, 40)}</h6>
                  <p
                    className="small  text-color mb-0"
                    
                  >
                    {excerpt(data.chanel, 20)}
                    <i class="bi bi-check-circle-fill fs-6 ms-2"></i>
                  </p>
                  <small className="text-color">
                    {data.viewers} . {data.time}
                  </small>
                </div>
                <i className="bi bi-three-dots-vertical dot ms-auto"></i>
              </div>
            </div>
          </div>
    </>
  );
};

export default Card;

