import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "@/styles/globals.css";

// import required modules
import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";
import weOfferImage from "@/assets/images/we_offer.png";
import RibbonImage from "@/assets/images/ribbon_clip.png";
import BackgroundImg from "@/assets/images/curriculum_background.png";
import { whatOfferList } from "@/constants/data";
import ForwardArrowIcon, { ChevronIcon } from "@/assets/icons/ForwardArrowIcon";

export default function WhatWeOffer({ ribbon, backImg }) {
  const [backgroundImage, setBackgroundImage] = useState(weOfferImage);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isComponentInView, setIsComponentInView] = useState(false);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const swiperRef = useRef(null);
  const componentRef = useRef(null);
  const [isFullyVisible, setIsFullyVisible] = useState(false);
  let slideTimeout = null;

  const imageMapping = {
    0: weOfferImage,
    1: weOfferImage,
    2: weOfferImage,
    3: weOfferImage,
    4: weOfferImage,
    5: weOfferImage,
    6: weOfferImage,
    7: weOfferImage,
  };

  useEffect(() => {
    let isScrolling = false;
    let lastScrollTime = Date.now();
    const scrollDebounceTime = 400;
    const scrollAmount = 20;
    const scrollDuration = 800;

    const handleScroll = (e) => {
      const now = Date.now();
      if (
        window.innerWidth < 640 ||
        isScrolling ||
        now - lastScrollTime < scrollDebounceTime ||
        !swiperRef.current?.swiper
      )
        return;

      if (isComponentInView) {
        const delta = Math.sign(e.deltaY);
        isScrolling = true;
        lastScrollTime = now;

        // Scroll up
        if (delta < 0) {
          if (activeIndex > 0) {
            e.preventDefault();
            window.scrollBy({
              top: -scrollAmount,
              behavior: "smooth",
              duration: scrollDuration,
            });
            swiperRef.current.swiper.slidePrev();
          }
        }
        // Scroll down
        else if (delta > 0) {
          if (isLastSlide) {
            e.preventDefault();
            window.scrollBy({
              top: scrollAmount,
              behavior: "smooth",
              duration: scrollDuration,
            });
            // Set isComponentInView to false after reaching last slide
            setIsComponentInView(false);
          } else {
            e.preventDefault();
            if (activeIndex < whatOfferList.length - 1) {
              window.scrollBy({
                top: scrollAmount,
                behavior: "smooth",
                duration: scrollDuration,
              });
              swiperRef.current.swiper.slideNext();
            } else {
              setIsLastSlide(true);
            }
          }
        }

        setTimeout(() => {
          isScrolling = false;
        }, scrollDebounceTime);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.intersectionRatio === 1){
          setIsFullyVisible(true);
        }
        else if(entry.intersectionRatio === 0){
          setIsFullyVisible(false);
        }
        
        if (isFullyVisible && swiperRef.current?.swiper) {
          window.removeEventListener("wheel", handleScroll);
          setIsComponentInView(true);
          swiperRef.current.swiper.allowTouchMove = true;
          swiperRef.current.swiper.allowSlideNext = true;
          swiperRef.current.swiper.allowSlidePrev = true;
          window.addEventListener("wheel", handleScroll, { passive: false });
        }
        else if (entry.intersectionRatio === 0 && swiperRef.current?.swiper) {
          swiperRef.current.swiper.allowTouchMove = false;
          swiperRef.current.swiper.allowSlideNext = false;
          swiperRef.current.swiper.allowSlidePrev = false;
          window.removeEventListener("wheel", handleScroll);
          setIsLastSlide(false);
        }
      },
      { threshold: [0, 1] }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isComponentInView, isLastSlide, activeIndex, isFullyVisible]);

  const handleSlideChange = (swiper) => {
    const activeSlideIndex = swiper.activeIndex;
    setActiveIndex(activeSlideIndex);
    setBackgroundImage(imageMapping[activeSlideIndex] || weOfferImage);

    // Check if we've reached the last slide
    if (activeSlideIndex === whatOfferList.length - 1) {
      setIsLastSlide(true);
    } else {
      setIsLastSlide(false);
    }
  };

  return (
    <div className="relative" style={backImg ? { 
      backgroundImage: `url(${BackgroundImg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '100px'
    } : {}}>
      {ribbon && (
        <div className="absolute z-50 top-26 sm:-top-32 h-full w-full">
          <Image src={RibbonImage} width={"100%"} height={"100%"} />
        </div>
      )}
      <div
        ref={componentRef}
        className="max-w-3xl md:max-w-4xl lg:max-w-7xl mx-auto mb-24 px-4 sm:px-2"
      >
        {/* TITLE */}
        <div className="mb-24 sm:mb-8 flex flex-col items-center justify-center sm:block">
          <h2 className="text-3xl md:text-5xl font-medium text-black pb-3">
            {backImg ? "Our Curriculum" : "What We Offer"}
          </h2>
          <p className="text-black/70 text-lg">
            8 modules, 8 classes endless growth!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-8 h-full">
          <div className="hidden col-span-1 sm:flex flex-col justify-between">
            {whatOfferList.map((item, i) => (
              <div
                key={i}
                className="border-t border-gray-300 flex items-center pt-6 cursor-pointer z-100"
                onClick={(e) => {
                  if (window.innerWidth >= 640) { // Only for desktop
                    swiperRef.current.swiper.slideTo(i);
                  }
                }}
              >
                {activeIndex === i && <ForwardArrowIcon />}
                <p
                  className={`${
                    activeIndex === i ? "text-purple-700" : "text-black"
                  } text-2xl pl-2 hover:text-purple-700`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div 
            className="relative col-span-1 sm:col-span-2 h-[600px] px-4 pt-6 pb-60 sm:px-8 sm:py-12 rounded-2xl sm:rounded-[40px]"
            style={{ backgroundColor: backImg ? 'rgba(127, 0, 255, 0.13)' : '#fff6e9' }}
          >
            <Swiper
              ref={swiperRef}
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              speed={600}
              parallax={
                typeof window !== "undefined" && window.innerWidth >= 640
              }
              pagination={{
                enabled: false,
                clickable: false,
              }}
              autoplay={{
                delay: 50000,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay, Parallax, Pagination, Navigation]}
              className="mySwiper rounded-2xl"
              onSlideChange={handleSlideChange} // Hook to handle slide change
            >
              {/* Background Image with Vignette */}
              <div
                slot="container-start"
                className={`parallax-bg`}
                style={{
                  backgroundImage: `url(${backgroundImage.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "600px",
                }}
                data-swiper-parallax="-23%"
              >
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 h-[600px]"></div>
              </div>

              {/* Slides */}
              {whatOfferList.map((slide, i) => (
                <SwiperSlide key={i} className="relative">
                  <div className="absolute hidden sm:block bottom-12 left-12 right-12 text-white">
                    <div
                      className="text-4xl font-medium pb-4"
                      data-swiper-parallax="-300"
                    >
                      {slide.title}
                    </div>
                    <div className="" data-swiper-parallax="-100">
                      <p className="text-base font-sans leading-6">
                        {slide.imageDesc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {whatOfferList[activeIndex] && (
              <div className="block sm:hidden absolute bottom-8 right-4 left-4 mx-6 text-center text-black">
                <div
                  className="text-2xl font-medium pb-2"
                  data-swiper-parallax="-300"
                >
                  {whatOfferList[activeIndex].title}
                </div>
                <div className="" data-swiper-parallax="-100">
                  <p className="text-base font-sans leading-6">
                    {whatOfferList[activeIndex].imageDesc}
                  </p>
                </div>
              </div>
            )}

            <div className="absolute w-full left-0 right-0 px-2 flex sm:hidden justify-between bottom-30 z-100">
              <button
                onClick={() => swiperRef.current.swiper.slidePrev()}
                className={`text-white bg-purple-700 p-2 rounded-sm rotate-180 ${
                  activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={activeIndex === 0}
              >
                <ChevronIcon />
              </button>
              <button
                onClick={() => swiperRef.current.swiper.slideNext()}
                className={`text-white bg-purple-700 p-2 rounded-sm ${
                  activeIndex === whatOfferList.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={activeIndex === whatOfferList.length - 1}
              >
                <ChevronIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
