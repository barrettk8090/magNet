import { Link, NavLink, useParams } from "react-router-dom";

function CreativeTypes(){

    return (
       <div className="flex flex-wrap">
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Photographers 📸</span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Videographers 📹</span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Video Editors 🎞️</span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Illustrators 🖌️ </span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">UX Designers ⚙️</span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">UI Designers 📱</span> 
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Programmers 💻 </span> 
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Drone Operators 🚁 </span> 
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Knitters 🧶 </span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Hairstylists 💇‍♀️ </span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Makeup Artists 💄 </span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Jewelry Makers 💍 </span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">3D Modelers🗿 </span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Writers 📝 </span>
        <span className="rounded-lg border-solid border-2 bg-white px-4 py-2 ml-1 mr-1 my-2 drop-shadow-lg text-black hover:bg-pink-500 hover:text-white hover:border-pink-500">Artists 🎨  </span>
    
        <span className="rounded-lg border-solid border-2 border-sky-950 bg-sky-600 px-4 py-2 mx-1 my-2 drop-shadow-lg hover:bg-sky-600"><Link className="text-white" to="/community" >And Many More →</Link></span> 
        
        </div>
        
    )
}

export default CreativeTypes