import { Link, NavLink, useParams } from "react-router-dom";


function Nav() {
    return(
        <nav className="h-20">
         
          <h3 className="font-display text-6xl py-3 pl-1"><Link to="/">M</Link></h3>
          
          <ul className="nav-list py-5">
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* <li>Pricing</li> */}
          </ul>
      </nav>
    )

}

export default Nav 