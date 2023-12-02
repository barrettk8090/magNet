import { Link, NavLink, useParams } from "react-router-dom";


function Nav() {
    return(
        <nav className="h-20 flex pl-4">
         
          <h3 className="font-display text-6xl py-3 pl-1"><Link to="/" className="text-white">M</Link></h3>
          
          <ul className="py-5 ml-12 flex flex-row space-x-12">
            <li ><Link to="/community" className="text-white">Community</Link></li>
            <li><Link to="/contact" className="text-white">Contact</Link></li>
            <li><Link to="/about" className="text-white">About</Link></li>
            {/* <li>Pricing</li> */}
          </ul>
      </nav>
    )

}

export default Nav 