import React from 'react'
import { Link } from "react-router-dom";
const Nav = () => {
  return (
      <>
    <div className='nav'>
        <div className='logo'>
            <img src='https://content.jdmagicbox.com/comp/jhansi/q9/9999px510.x510.220316235227.d8q9/catalogue/educadd-jhansi-jhansi-training-centres-4uods45qyq.jpg?clr=4f2517' alt=''/>
        </div>
        <div className='navItem'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/About'>About us</Link>
            </li>
            <li>
                <Link to='/Products'> Our Products</Link>
            </li>
            <li>
                <Link to='/ContactUs'>Contact Us</Link>
            </li>
        </div>
    </div>
    <div className='icon'>
        {/* <div id='iconItem'> */}
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram" id='instagram'></i>
        {/* </div> */}
    </div>
    </>
  )
}

export default Nav