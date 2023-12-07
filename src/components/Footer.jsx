import { Link, NavLink, useParams } from "react-router-dom";



function Footer(){

    return(
        <footer className="pb-20 bg-black grid justify-items-center md:grid-cols-2 ">

            <div className="pl-2 py-10 ">
                <h5 className="font-display text-6xl">Sign up for our newsletter!</h5>
                <p className="pt-4 pb-6">Tips, tricks, and updates sent straight to your inbox.</p>
                <input className="rounded h-10 ml-6 sm:ml-0 pl-2" placeholder="Enter your email"/>
                <button>Sign Up →</button>
            </div>


            <div className="text-xl md:pt-36 ">
                <ul className="grid justify-items-center md:flex" >
                    <li className="py-2 md:px-6"> <Link to="/community" className="text-white font-semibold font-body">Community</Link></li>
                    <li className="py-2 md:px-6"> <Link to="/contact" className="text-white font-semibold font-body">Contact</Link></li>
                    <li className="py-2 md:px-6"> <Link to="/about" className="text-white font-semibold font-body">About</Link></li>
                </ul>
            </div>


        </footer>
    )
}

export default Footer