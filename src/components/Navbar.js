import React from "react";

export default function Navbar(props){
  const toggleMode=()=>{
   
  props.toggleMode();
  
  }
    return (
<nav class={`navbar navbar-expand-lg bg-${props.mode==='light'?'light':'dark'}`}>
      <div class="container-fluid ">
        <a class={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="#">
          {props.title}
        </a>
       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="#">
                {props.aboutText}
              </a>
            </li>
          </ul>
          {/* <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            
          </form> */}
         <div class="form-check form-switch ">
     <input class="form-check-input " onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
       <label class={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode==='light'?"Enable Dark mode":"Disable Dark Mode"}</label>
      </div>
        </div>
      </div>
    </nav>
    
    ) 
}