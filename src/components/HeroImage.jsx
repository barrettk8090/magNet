function HeroImage(){
   
    return(

    <div className="Hero bg-sky-600">

        <div className="textdiv">
            <h1 className="centered text-5xl " >magNet</h1>
            <h2 className="centered">Where creatives develop their portfolios & small businesses build their brands.</h2>
            <button className="bg-gray-500 hover:bg-sky-700"> ↓ How It Works ↓</button>
        </div>


        <div className="imagediv">
            <img className="heroimg" src="../public/citysky.jpeg" alt="test"/>
        </div>

      
    </div>

)

}

export default HeroImage
