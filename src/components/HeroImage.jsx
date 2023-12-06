function HeroImage(){
   
    return(

   
    <div className="pt-40  lg:pt-16 md:pb-20 md:flex md:flex-row  items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

        <div className="textdiv md:basis-1/2">
            <h1 className="text-9xl pt-14 lg:pt-0 font:display select-none" >magNet</h1>
            <h2 className="mx-8 md:mx-4 lg:mx-8 xl:mx-12 py-6 text-4xl font:body font-medium select-none">Where creatives develop their portfolios & small businesses build their brands.</h2>
            <div className="mt-12">
                <button className="mx-4 md:mb-4 hover:text-black hover:bg-white"> Download for iOS </button>
                <button className="mx-4 md:mt-4 hover:text-black hover:bg-white"> Download for Android Ⓖ</button>
            </div>
        </div>


        <div className="md:basis-1/2 pt-20 mx-2 flex justify-center">
            <img className="w-72 md:w-80 lg:w-96 xl:w-3/5" src="/phones.png" alt="test"/>
        </div>

      
    </div>


)

}

export default HeroImage
