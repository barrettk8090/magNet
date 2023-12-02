function HeroImage(){
   
    return(

    <div className="Hero md:flex md:flex-row items-center ">

        <div className="textdiv md:basis-1/2">
            <h1 className="text-9xl pt-14 font:display" >magNet</h1>
            <h2 className="mx-8 py-6 text-4xl">Where creatives develop their portfolios & small businesses build their brands.</h2>
            <button className="mt-12"> ↓ How It Works ↓</button>
        </div>


        <div className="imagediv md:basis-1/2">
            <img className="heroimg" src="../public/citysky.jpeg" alt="test"/>
        </div>

      
    </div>

)

}

export default HeroImage
