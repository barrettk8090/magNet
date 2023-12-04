import { Link, NavLink, useParams } from "react-router-dom";

function BusinessTypes(){

    return (
        <div className="flex flex-wrap">
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg hover:bg-sky-600">Realtors 🏡</span>
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600">Restaurants 🍝</span>
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600">Cafés ☕️</span>
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600">Jewelry Makers 💍 </span>
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600">Food Trucks 🚚 </span>
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600">Soap Makers 🧼</span>
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600">Small Biz 🛒</span> 
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600">Morgues ⚰️ </span> 
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600">Hairstylists 💇‍♀️ </span>
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600">Chefs 🍴 </span>
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600">Bloggers 💻 </span>
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600">Bookstores 📚 </span>
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600">Construction 🚧 </span>
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600">Builders 🏗️ </span>
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600">Lawyers ⚖️ </span>
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600">Professors 🤓 </span>
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-950 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600"><Link className="text-white" to="/community" >And Many More →</Link></span> 
        </div>
    )
}

export default BusinessTypes