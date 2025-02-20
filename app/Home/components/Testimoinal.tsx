"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const clients = [
  { name: 'Shafique Foods', logo: '/logo1.png' },
  { name: 'Eimkaan Alkhalij', logo: '/logo2.png' },
  { name: 'Satson', logo: '/logo3.webp' },
  { name: 'Home', logo: '/logo4.png' },
  { name: 'IMEC', logo: '/logo5.png' },
  { name: 'Supreme', logo: '/logo6.png' },
  { name: 'MSS Solar', logo: '/logo7.png' },
  { name: 'MSS Solar', logo: '/logo10.png' },
  { name: 'MSS Solar', logo: '/logo12.webp' },
  { name: 'MSS Solar', logo: '/logo13.png' },
];

const integrations = [
  { logo1: '/slack-1.webp' },
  { logo1: '/stripe-1.webp' },
  { logo1: '/shopify-1.webp' },
  { logo1: '/paypal-1.webp' },
  { logo1: '/plaid-1.webp' },
  { logo1: '/google-1.webp' },
  { logo1: '/aws-1.webp' },
];

const Testimonials = () => {
  return (
    <div className="lg:p-8 space-y-12">
      {/* Clients Section */}
      <section className="text-center w-11/12 lg:w-9/12 mt-10 m-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">Our Satisfied Clients</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          slidesPerGroup={2}
          breakpoints={{
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            768: { slidesPerView: 3, slidesPerGroup: 3 },
            1024: { slidesPerView: 4, slidesPerGroup: 2 },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 mt-10 object-contain mx-auto hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <div className="custom-prev text-white hover:text-gray-300 absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-2xl z-10">
            &#10094;
          </div>
          <div className="custom-next text-white hover:text-gray-300 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-2xl z-10">
            &#10095;
          </div>
        </Swiper>

        {/* Pagination Dots Style */}
        <style jsx global>{`
          .swiper-pagination-bullet {
            background-color: #fff !important;
            opacity: 0.7 !important;
          }
          .swiper-pagination-bullet-active {
            background-color: #ffff !important; /* Purple for active */
          }
          .swiper-pagination-bullet:hover {
            background-color: #ffff !important;
          }
        `}</style>
      </section>

      {/* Integrations Section */}
      <section className="text-center  ">
        <h2 className=" lg:text-3xl  text-2xl font-bold mb-6 lg:mt-20">Integrate With The Apps You Love</h2>
        <div className="flex flex-wrap justify-center gap-4  m-auto">
          {integrations.map((app, index) => (
            <div
              key={index}
              className="p-4 h-16 lg:w-40  w-60 flex items-center justify-center "
            >
              <img
        src={app.logo1}
  className='mt-20 '
          /> 
          
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
