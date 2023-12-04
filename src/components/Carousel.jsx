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
        <h2 className="text-3xl pb-12"> Testimonials</h2>
        <ButtonBack className="border border-sky-500"> Back </ButtonBack>
      <ButtonNext className="border border-sky-500">Next</ButtonNext>
      <Slider>
        
        <Slide index={0}>
          <div className="rounded-lg bg-purple-600 mx-12 my-12">
            <p className="px-4 py-4 text-xl"> "I recently left a career in corporate finance to pursue my passion for product photography. Inititally, I felt lost – I had no idea where to begin. After cold emailing hundreds of businesses with no response, I realized my portfolio needed a facelift. Then, I found out about Magnet, where I was paired with a small beauty brand that was struggling to get their product photos to look perfect. I was able to take photos for them, add those images to my portfolio, and since then, I just got my first paying client! Thanks Magnet!!"</p>
            <p className="px-4 py-1 text-xl">Person's Name</p>
            <p className="px-4 py-1 text-xl">Perons's Profession</p>
          </div>

            
            
        </Slide>
        <Slide index={1}>Slide 2</Slide>
        <Slide index={2}>Slide 3</Slide>
      </Slider>

    </CarouselProvider>
  );
};

export default Carousel;