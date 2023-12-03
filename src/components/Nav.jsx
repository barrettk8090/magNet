import { Link, NavLink, useParams } from "react-router-dom";


function Nav() {
    return(
      
        <nav className="h-20 flex pl-8 pt-1 fixed top-0 bg-slate-900 w-full">
         
          <h3 className="font-display text-6xl py-3 pl-1"><Link to="/" className="text-white">M</Link></h3>
          
          <ul className="py-5 ml-12 flex flex-row space-x-14">
            <li ><Link to="/community" className="text-white font-semibold font-body">Community</Link></li>
            <li><Link to="/contact" className="text-white font-semibold font-body">Contact</Link></li>
            <li><Link to="/about" className="text-white font-semibold font-body">About</Link></li>
            {/* <li>Pricing</li> */}
          </ul>
      </nav>
    )

}

export default Nav 