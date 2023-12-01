import { Link, NavLink, useParams } from "react-router-dom";


function Nav() {
    return(
        <nav>
         
          <h3 className="magnet-logo"><Link to="/">M</Link></h3>
          
          <ul className="nav-list">
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* <li>Pricing</li> */}
          </ul>
      </nav>
    )

}

export default Nav 