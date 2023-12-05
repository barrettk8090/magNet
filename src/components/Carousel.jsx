import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = () => {
  return ( 
    <CarouselProvider 
    naturalSlideWidth={100}
    naturalSlideHeight={100}
      totalSlides={3}
    >
        <h2 className="py-40 text-9xl font-display font-medium flex justify-center"> Testimonials</h2>

       <div className="grid grid-cols-3"> 
        <ButtonBack className=" lg:text-6xl"> ← </ButtonBack>
        <Slider>
        
        <Slide index={0}>
          <div className="rounded-lg bg-purple-600 mx-12 my-12">
            <p className="px-4 py-4 text-xl"> "I recently left a career in corporate finance to pursue my passion for product photography. Inititally, I felt lost – I had no idea where to begin. After cold emailing hundreds of businesses with no response, I realized my portfolio needed a facelift. Then, I found out about Magnet, where I was paired with a small beauty brand that was struggling to get their product photos to look perfect. I was able to take photos for them, add those images to my portfolio, and since then, I just got my first paying client! Thanks Magnet!!"</p>
            <p className="px-4 py-1 text-xl">Jospeph Edwards</p>
            <p className="px-4 py-1 text-xl">Photographer</p>
          </div>

            
            
        </Slide>
        <Slide index={1}>

        <div className="rounded-lg bg-purple-600 mx-12 my-12">
            <p className="px-4 py-4 text-xl"> "I'm new to residential real estate, and I knew that if I had a simple website to promote myself, I'd have better luck at gaining new clients. Unfortunately, I'm not very good with computers, and I definitely could not afford spending money on development services in this economy! Luckily, I found Magnet, where I was paired with a software development student who was looking to build websites to get more front-end experience. I couldn't be happier with the end result!"</p>
            <p className="px-4 py-1 text-xl">Jasmine Hartwell</p>
            <p className="px-4 py-1 text-xl">Realtor</p>
          </div>
        
        
        </Slide>
        <Slide index={2}>

        <div className="rounded-lg bg-purple-600 mx-12 my-12">
            <p className="px-4 py-4 text-xl"> "I just completed a graphic design bootcamp, which was awesome! The hard part was finding my first real client for my portfolio. Luckily, I found Magnet, where I was matched with the owner of a new food truck in town. They were looking for some help with designing their menu, and I gladly accepted. Now my work is featured on the side of their food truck, and they even put a QR code that directs to my website on there! I've already gotten 6 paying clients from the exposure!"</p>
            <p className="px-4 py-1 text-xl">Sam Johnson</p>
            <p className="px-4 py-1 text-xl">Graphic Designer</p>
          </div>


        </Slide>
      </Slider>
        <ButtonNext className=" lg:text-6xl">→</ButtonNext>
      </div>

      

    </CarouselProvider>
  );
};

export default Carousel;