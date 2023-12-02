import { Link, NavLink, useParams } from "react-router-dom";

function Footer(){

    return(
        <footer className="h-28 ">

            <div className="pt-8 ">
                <h5>Sign up for our newsletter.</h5>
                <input placeholder="Enter your email"/>
                <button>Sign Up</button>
            </div>


            <div className="">
                <ul>
                <li>Community</li>
                <li>Contact</li>
                <li>About</li>
                </ul>
            </div>


        </footer>
    )
}

export default Footer