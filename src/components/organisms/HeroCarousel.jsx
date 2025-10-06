import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y, EffectFade } from 'swiper/modules';

// Swiper core styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import data from '../../utils/carouselData.json';

const HeroCarousel = () => {
  const slides = data?.stack || [];

  return (
    <div className="w-full h-full">

      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y, EffectFade]}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        effect="fade"
        className="rounded-b-2xl md:rounded-r-2xl md:rounded-b-none shadow-2xl overflow-hidden">
        {slides.map((item, idx) => (
          <SwiperSlide key={`${item.title}-${idx}`}>
            <div className="relative w-full h-[420px] md:h-[520px] lg:h-[600px] bg-neutral-900">
              {/* Image */}
              <img
                src={item.path}
                alt={item.title}
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 text-white">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide drop-shadow">
                  {item.title}
                </h3>
                {item.body && (
                  <p className="mt-2 max-w-3xl text-sm md:text-base text-white/90">
                    {item.body}
                  </p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
