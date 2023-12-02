function Testimonials(){

    return(
        <div className="bg-red-600">
            <h3 className="pt-12 text-6xl">Testimonials</h3>

            <div className=" mx-8 border-solid border-2 border-white rounded-lg shadow-xl">
                <div className="px-8 py-8 rounded-lg bg-sky-950">
                    <div className="flex">
                        <img className="rounded-full h-20" src="../public/barrett-k.png" />
                        <h5 className="">Joseph Edwards</h5>
                        <h5 className="">Photographer</h5>
                    </div>
                    <p>"I recently ended a career in corporate finance to pursue my passion for product photography. Inititally, I felt lost – I had no idea where to begin. After cold emailing hundreds of businesses with no response, I realized my portfolio needed a facelift. Then, I found out about Magnet, where I was paired with a small beauty brand that was struggling to get their product photos to look perfect. I was able to take photos for them, add those images to my portfolio, and since then, I just got my first paying client! Thanks Magnet!! "</p>
                    
                </div>
            </div>

            <div className="px-8 py-8">
                <img className="rounded-full h-20" src="../public/barrett-k.png" />
                <p>"I'm new to residential real estate, and I knew that if I had a simple website to promote myself, I'd have better luck at gaining new clients. Unfortunately, I'm not very good with computers, and I definitely could not afford spending money on development services in this economy! Luckily, I found Magnet, where I was paired with a software development student who was looking to build websites to get more front-end experience. I couldn't be happier with the end result!"</p>
                <h5>Jasmine Hartwell</h5>
            </div>
        </div>
    )
}

export default Testimonials