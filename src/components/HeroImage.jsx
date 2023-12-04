function HeroImage(){
   
    return(

    <div className="pt-40 lg:pt-24 md:flex md:flex-row items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

        <div className="textdiv md:basis-1/2">
            <h1 className="text-9xl pt-14 lg:pt-0 font:display" >magNet</h1>
            <h2 className="mx-8 py-6 text-4xl font:body font-medium">Where creatives develop their portfolios & small businesses build their brands.</h2>
            <button className="mt-12 mx-6 hover:text-black hover:bg-white"> Download for iOS </button>
            <button className="mt-12 hover:text-black hover:bg-white"> Download for Android Ⓖ</button>
        </div>


        <div className="md:basis-1/2 pt-20 mx-2">
            <img className="lg:w-96 lg:ml-60" src="../public/phones.png" alt="test"/>
        </div>

      
    </div>

)

}

export default HeroImage
