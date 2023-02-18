import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const SideBar = ({datas}) => {
    // console.log(datas);
  return (
    <>
      <Section1 />
      <Section2 />
      <div className="text-white px-3 ">
        Subscriptions
        {datas.map(data => (
        <Section3 img = {data.profile} chanel = {data.chanel}/>
      ))}
      </div>
      <hr className="text-white" />
      <div className="text-white px-3">
        Explore
        <Section4 />
      </div>
      <hr className="text-white"/>
      <Section5 />
    </>
  );
};

export default SideBar;
