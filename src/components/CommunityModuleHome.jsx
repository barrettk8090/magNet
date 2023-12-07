import { Link, NavLink, useParams } from "react-router-dom";
import CommunityCardHome from "./CommunityCardHome"

function CommunityModuleHome(){


    return (
        <div className="pt-20 px-4 md:px-12  lg:py-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <h3 className="pb-12 text-9xl font-display font-medium">Community</h3>

            <CommunityCardHome/>
            <div className="flex justify-center">
                <button className="mt-10 mb-20"><Link to="/community">See More Connections →</Link></button>
            </div>

        </div>
    )
}

export default CommunityModuleHome