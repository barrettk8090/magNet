function CommunityCardHome(){

    return(
    <div className="lg:grid lg:grid-cols-3">    
        <div className=" px-6 py-6 bg-cyan-950 rounded-lg z-30 lg:col-span-1">
            <img className="rounded-full float-left w-24"  src="../public/barrett-k.png" />
            <div className="mx-28 pb-6">
                <p className="pt-6 font-bold">Grace C.</p>
                <p className="pb-6 font-bold">Craftsman</p>
            </div>
            <p>I'm an all-around craftsman. I've been making pottery in my downtime, and recently started an Etsy shop. I didn't get much traction there at first, so I used Magnet to connect with small businesses in my city. I ended up connecting with Caitlin, who owns a coffee shop downtown. Now my work is featured in the cafe for purchase, and the word about my work is spreading fast!!!! </p>
        </div>

        <div className="lg:col-span-1">

            <div className="flex justify-center ">
                <img src="../public/underline_vertical.png" className="w-4 lg:w-0 invert"/>
            </div>

            <div className="mt-4">
                <h1 className="font-display flex justify-center text-8xl select-none">M</h1>
            </div>

            <div className="flex justify-center">
                <img src="../public/underline_vertical.png" className="w-4 lg:w-0 invert"/>
            </div>

        </div>


        <div className=" mb-6 px-6 py-6 bg-cyan-950 rounded-lg z-30 lg:col-span-1" >
            <img className="rounded-full float-left w-24"  src="../public/barrett-k.png"/>
            <div className="mx-28 pb-6">
                <p className="pt-6 font-bold">Caitlin S.</p>
                <p className="pb-6 font-bold">Café Owner</p>
            </div>
            <p>I connected with Grace on Magnet a few months ago. I recently opened a small independent coffee shop downtown, and I was looking for local artists and makers who might want to feature their creations in the shop. Grace stopped by and we instantly connected, and she's been making & selling pieces for the shop ever since! </p>
        </div>
    </div>

    )
}

export default CommunityCardHome