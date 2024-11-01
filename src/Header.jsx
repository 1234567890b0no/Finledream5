import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'

function Header() {
  const{totalItems}= useCart();
  return (
    <div>
       <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <NavLink to ="/l" className="logo">
                        <img src="assets/images/logo.png" alt="" style={{ width: "158px" }}/>
                    </NavLink>
                    {/* <!-- ***** Logo End ***** --> */}
                    {/* <!-- ***** Menu Start ***** --> */}
                    <ul className="nav">
                      <li><NavLink to="/" className="active">Home</NavLink></li>
                      <li><NavLink to="/Ourshop">Our Shop</NavLink></li>
                      <li><NavLink to="/detailes">Product Details</NavLink></li>
                      <li><NavLink to="/Contact">Contact Us</NavLink></li>
                      <li><NavLink to="/Product">Product</NavLink></li>
                      <li><NavLink to="/Shop">Shop</NavLink></li>
                      <li><NavLink to="/Cart" className="text-light">
                      <i class="fa-solid fa-cart-shopping"></i>
                      {totalItems}Cartpage</NavLink></li>
                  </ul>   
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    {/* <!-- ***** Menu End ***** --> */}
                </nav>
            </div>
        </div>
    </div>
  </header>
    </div>
  )
}

export default Header
