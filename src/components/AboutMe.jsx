function AboutMe(){

    return (
        <div className="mx-6 md:mx-20 lg:mx-60">
            
            <div className="flex justify-center pt-32">
            <img className="rounded-full w-40 hover:animate-spin" src="../public/barrett-k.png"/>
            </div>
            <div className="flex justify-center">
            <h1 className= "pt-14 text-9xl font:display ">About Me</h1>
            </div>
           
            <p className="py-2 md:text-2xl">Hello! I'm Barrett Kowalsky, a software engineer from Denver, CO. I created this website as a project during my time at Flatiron School. It's meant to serve as a proof of concept for an idea that I had when I was considering changing careers as a Product Photographer. When I was just starting out, I barely had any product images in my online portfolio, so I spent some time cold-calling (read as: emailing) small businesses in Denver, offering to do some test photos of their products for free, solely so that I could build out my portfolio. At the time, the alternative to that was going to Target, buying some expensive (but well-designed) products, and shooting those in hopes of getting noticed. To be honest actually, I did do that, and it didn't go great. </p>

            <p className="py-2 md:text-2xl">What did go great, though, was getting in touch with some <em>very</em> small business owners. For example, I connected with a woman based outside of Denver who was trying to get her handmade soap business off the ground. Her products were great, but she was not a product photographer herself. I offered to take some photos for her, at no cost, in the hopes that we would both benefit: she'd get some nicer product images, and I'd get some high-quality images for my own portfolio. She was happy, I was happy, and I didn't have to go to Target. </p>

            <p className="py-2 md:text-2xl"> The idea then, is to create a space that makes these types of connections more easily. It's a hope to bring people together... like a... um... Magnet. People who are at the <strong>very</strong> beginning of their creative careers could connect with small businesses or individuals working on their side hustles, and find common ground in helping each other out. Think: someone who is new to programming with a bland porfolio, paired with a food truck owner that needs a simple starter website to get off the ground. Or someone looking to get into video editing, paired with a high school football coach who needs a sizzle reel of the team for a school event. Or a product photographer connecting with someone making hand made soaps in their home. You get the point. </p>

            <p className="py-2 md:text-2xl">People helping other people. What a concept! </p>

            <p className="py-2 md:text-2xl">This website was made with ❤️ using Vite, React, and Tailwind. And lots of coffee and La Croix 🤪</p>

            <p className="py-2 md:text-2xl">Let's Connect:</p>
            <ul className="list-none grid grid-cols-3 gap-0 my-6">

                <div className="col-span-1">
                <li className="w-12"> <a href="https://github.com/barrettk8090"> <img className="invert" src="https://img.icons8.com/?size=512&id=3tC9EQumUAuq&format=png"/> </a></li>
                </div>
                <div className="col-span-1">
                <li className="w-12"> <a href="https://www.instagram.com/barrettkowalsky/"> <img className="invert" src="https://img.icons8.com/?size=128&id=RhYNENh5cxlS&format=png"/> </a></li>
                </div>
                <div>
                <li className="w-12 col-span-1"><a href="https://www.linkedin.com/in/barrettkowalsky/"> <img className="invert" src="https://img.icons8.com/?size=512&id=IuI5Yd3J3qcC&format=png"/> </a> </li>
                </div>
            </ul>
        </div>
    )
}

export default AboutMe