import { Link, NavLink, useParams } from "react-router-dom";




function Nav() {

  function handleHamburger(){
    console.log("clicked!")
    return(
      <div className="h-20 bg-slate-50">

      </div>
    )
  }


    return(
      <>
        <nav className="hidden h-20 md:flex pl-8 pt-1 fixed top-0 bg-slate-900 w-full z-40">
         
          <h3 className="font-display text-6xl py-3 pl-1"><Link to="/" className="text-white">M</Link></h3>
          
          <ul className="py-5 ml-12 flex flex-row space-x-14">
            <li><Link to="/community" className="text-white font-semibold font-body" >Community</Link></li>
            <li><Link to="/contact" className="text-white font-semibold font-body">Contact</Link></li>
            <li><Link to="/about" className="text-white font-semibold font-body">About</Link></li>
            {/* <li>Pricing</li> */}
          </ul>
      </nav>

      <nav className="md:hidden h-20 pl-8 pt-1 fixed top-0 bg-slate-900 w-full z-40 " >
        <div className="flex place-content-between">


          <h3 className="font-display text-6xl py-3 pl-1"><Link to="/" className="text-white">M</Link></h3>


          <div onClick={() => handleHamburger()} className="flex font-display text-6xl">
            click me
          </div>


          </div>
      </nav>
      </>
    )

}

export default Nav 