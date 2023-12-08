function Testimonials(){

    return(
        <div className="pt-20 px-4 sm:px-20 md:px-40 lg:px-12 lg:py-28 lg:mx-0  xl:px-0 bg-black">
            <h3 className="xl:mx-60 lg:mx-20 pb-12 text-8xl md:text-9xl font-display font-medium">Testimonials</h3>
        <div className="lg:grid lg:grid-cols-2 xl:mx-32">
            <div className="lg:col-span-1 ">
                <div className="mx-0.25 lg:mx-6 border-white rounded-lg shadow-xl">

                    <div className="px-8 py-8 rounded-lg bg-white">
                        
                        <p className="pb-4 text-black font-medium text-2xl lg:text-3xl xl:text-4xl">"I recently ended a career in corporate finance to pursue my passion for product photography. </p>
                        <p className="text-black font-light xl:text-xl"> Inititally, I felt lost – I had no idea where to begin. After cold emailing hundreds of businesses with no response, I realized my portfolio needed a facelift. Then, I found out about Magnet, where I was paired with a small beauty brand that was struggling to get their product photos to look perfect. I was able to take photos for them, add those images to my portfolio, and since then, I just got my first paying client! Thanks Magnet!! "</p>

                    </div>
                    
                </div>

                <div className="flex">
                    <img className="rounded-full h-20 mx-4 my-8" src="/barrett-k.png" alt="Image of a boy in black sweatshirt holding a french bulldog."/>
                    <div className="flex flex-col">
                        <h5 className="pt-12 font-bold">Barrett K</h5>
                        <h5 className="py-0">Photographer</h5>
                    </div>
                </div>
            </div>

            <div className="mx-2 lg:mx-6 border-white rounded-lg">
            <div className="lg:col-span-1">
                <div className="px-8 py-8 rounded-lg bg-white  shadow-xl">
                    
                    <p className="pb-4 text-black font-medium text-2xl lg:text-3xl xl:text-4xl">"I'm new to residential real estate, and I knew that if I had a simple website to promote myself, I'd have better luck at gaining new clients.</p>
                    <p className="text-black font-light xl:text-xl"> Unfortunately, I'm not very good with computers, and I definitely could not afford spending money on development services in this economy! Luckily, I found Magnet, where I was paired with a software development student who was looking to build websites to get more front-end experience. I couldn't be happier with the end result!"</p>

                </div>
                
            </div>

            <div className="flex">
                <img className="rounded-full h-20 mx-4 my-8" src="/harley.png" alt="Image of a girl wearing sunglasses." />
                <div className="flex flex-col">
                    <h5 className="pt-12 font-bold">Harley K.</h5>
                    <h5 className="py-0">Realtor</h5>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Testimonials