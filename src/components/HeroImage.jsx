function HeroImage(){
   
    return(

    <div className="Hero pt-40 md:pt-16 md:flex md:flex-row items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

        <div className="textdiv md:basis-2/3">
            <h1 className="text-9xl pt-14 font:display" >magNet</h1>
            <h2 className="mx-8 py-6 text-4xl">Where creatives develop their portfolios & small businesses build their brands.</h2>
            <button className="mt-12"> ↓ How It Works ↓</button>
        </div>


        <div className="imagediv md:basis-1/3">
            <img className="heroimg" src="../public/citysky.jpeg" alt="test"/>
        </div>

      
    </div>

)

}

export default HeroImage
