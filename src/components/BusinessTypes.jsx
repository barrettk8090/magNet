import { Link, NavLink, useParams } from "react-router-dom";

function BusinessTypes(){

    return (
        <div className="flex flex-wrap">
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Realtors 🏡</span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Restaurants 🍝</span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Cafés ☕️</span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Jewelry Makers 💍 </span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Food Trucks 🚚 </span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Soap Makers 🧼</span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Small Biz 🛒</span> 
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Morgues ⚰️ </span> 
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Hairstylists 💇‍♀️ </span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Chefs 🍴 </span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Bloggers 💻 </span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Bookstores 📚 </span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Construction 🚧 </span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Builders 🏗️ </span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Lawyers ⚖️ </span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Professors 🤓 </span>
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-indigo-500 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-pink-500"><Link className="text-white" to="/community" >And Many More →</Link></span> 
        </div>
    )
}

export default BusinessTypes