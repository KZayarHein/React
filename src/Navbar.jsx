import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container-fluid ">
          <div className=" d-flex align-items-center">
          <i className="bi bi-list text-white fs-4 mx-3"></i>
          
          <a className="navbar-brand logo d-flex align-items-center" href="#">
          
            <i className="bi bi-youtube text-danger fs-4 me-1"></i>
            <span className="text-white fw-bold">YouTube</span>
          </a>
          </div>
          <div className="w-25 d-flex align-items-center">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search"/>
            <button className="input-group-text"><bi className="bi bi-search"></bi></button>
          </div>
          <i class="bi bi-mic-fill text-white bg-secondary rounded-circle text-center ms-2" style={{width: '40px', height:'40px', lineHeight : '40px'}}></i>
          </div>
          
         <div className="text-white d-flex align-items-center">
         <i class="bi bi-plus-circle fs-4 me-4"></i>
         <i class="bi bi-bell fs-4 me-4"></i>
         <span className="purp p-1 rounded-circle fw-bold">Gm</span>
         </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
