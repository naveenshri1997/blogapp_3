import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import logo from '../bloglogo.png';
import { useSearchContext } from '../context/searchcontext';
const Header = () => {
    const navigate = useNavigate();
    const {filters:{text},updateFilterValue} = useSearchContext();

    const searchHandler = (e) => {
      e.preventDefault()
      if (text) {
          navigate(`/search/${text}`)
      } else {
          navigate('/')
      }
  }
  const logosty ={
    marginTop: "-15px",
  };
  const button_style={
    borderLeft:"none",
    borderRadius:"0px 3px 3px 0px",
    border:'1px solid #dee2e6'
  }
  const inputstyle={
    // borderRight:"none",
  }
  return (
    <>
    <nav class="cus-navbar navbar navbar-expand-lg navbar-light">
  <div class="container-fluid justify-content-start">
    <Link style={logosty} to='/' class="navbar-brand" href="#"><img width="30px" src={logo} /></Link>
    
    <div>      
      <form  class="d-flex" onSubmit={searchHandler}>
        {/* <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search"
        name="text" value={text} onChange={updateFilterValue}/>        */}

      <div class="input-group mb-3">
        <input style={inputstyle} type="text" class="form-control" placeholder="Search" 
        name="text" value={text} onChange={updateFilterValue}
        />
        <div class="input-group-append">
        <button style={button_style} class="btn btn-outline-secondary" type="submit"><i class="fa fa-search"></i></button>
      </div>
  </div>
      </form>

      <NavLink className="nav-link" to="adminlogin">Admin Login</NavLink>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
