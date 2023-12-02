import { Link, NavLink, useParams } from "react-router-dom";

function Footer(){

    return(
        <footer className="flex flex-row">
            <div>
                <ul>
                <li>Community</li>
                <li>Contact</li>
                <li>About</li>
                </ul>
            </div>

            <div>
                <h5>Sign up for our newsletter.</h5>
                <input placeholder="Enter your email"/>
                <button>Sign Up</button>
            </div>
        </footer>
    )
}

export default Footer