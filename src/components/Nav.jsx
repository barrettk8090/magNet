import { Link, NavLink, useParams } from "react-router-dom";
import {useState} from 'react'





function Nav() {
    return (

        <nav className=" h-20 flex pl-8 pt-1 fixed top-0 bg-black w-full z-40">
         
          <h3 className="font-display text-6xl py-3 pl-1 pr-6"><Link to="/" className="text-white">M</Link></h3>
          
          <ul className="py-5 ml-4 sm:ml-12 flex flex-row sm:space-x-14 space-x-8">
            <li><Link to="/community" className="text-white font-semibold font-body text-sm sm:text-lg" >Community</Link></li>
            <li><Link to="/contact" className="text-white font-semibold font-body text-sm sm:text-lg">Contact</Link></li>
            <li><Link to="/about" className="text-white font-semibold font-body text-sm sm:text-lg">About</Link></li>
            
          </ul>
      </nav>

    

    )

}

export default Nav 