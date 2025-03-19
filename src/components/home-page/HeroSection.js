import Image from "next/image";
import HeroCreatorImage from "@/assets/images/Hero_Banner.png";
import HeroCreatorImageMob from "@/assets/images/Hero_Banner_mob.png";
import HeroCalenderImage from "@/assets/images/calender_frame.png";
import HeroCurriculumImage from "@/assets/images/medal.png";

export default function HeroSection() {
  return (
    <div className="max-w-3xl md:max-w-4xl lg:max-w-7xl mx-auto sm:mb-12 mb-8 sm:mb-24 px-4 sm:px-2 text-black">
      <div className="grid grid-col-1 sm:grid-cols-9 sm:grid-rows-9 gap-x-5">
        {/* Image div with relative positioning and height */}
        <div className="col-span-1 sm:col-span-6 sm:row-span-9 relative rounded-2xl ">
          <div className="absolute md:top-35 top-10 left-4 p-2 bg-opacity-75 rounded z-10 text-black md:text-[90px] text-[45px] font-bold leading-[40px] md:leading-[80px] text-center md:text-left">
            CREATORS<br />FOR Life
            <div className="md:text-[32px] text-[20px] font-medium leading-[30px] mt-4 text-center md:text-left">
              Help your child unlock their <span className="hidden md:inline"> <br /> </span> potential.
            </div>
          </div>
          
          <Image
            src={HeroCreatorImageMob}
            alt="Creator-Image"
            layout="responsive"
            objectFit="contain"
            className="sm:hidden w-full"
          />
          <Image
            src={HeroCreatorImage}
            alt="Creator-Image"
            layout="fill"
            objectFit="contain"
            className="hidden sm:block"
          />
        </div>

        {/* Other content */}
        <div className="col-span-1 sm:col-span-3 sm:row-span-6 sm:col-start-7">
          <div className="col-span-6 row-span-9 relative sm:h-110 h-100">
            <div className="absolute md:top-3 top-10 left-2 md:text-[36px] text-[24px] font-bold p-2 text-white bg-opacity-75 rounded z-10 leading-[30px] md:leading-[40px]">
            Book a <div>Trial Class</div>
            </div>
            <Image src={HeroCalenderImage} alt="Hero-Calender-Image" layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-3 sm:row-span-3 sm:col-start-7 sm:row-start-7">
          <div className="col-span-6 row-span-9 relative w-full sm:h-55 h-50">
            <div className="absolute top-4 left-2 p-2 text-white md:text-[36px] text-[24px] font-bold bg-opacity-75 rounded z-10 md:leading-[40px] leading-[30px]">
              <span className="font-[500] md:font-[500]">Develop <span className="font-[700]">Leadership</span></span>
              <div className="font-[700] md:font-[700]"> & Critical Thinking</div>
              <div className="font-[500]  md:font-[500]">Skills</div>
              <a href="/" download>
                <button className="bg-[#fff] text-black px-4 py-2 rounded-[20px] font-[400] text-[24px] mt-2 flex items-center gap-2 cursor-pointer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_454_3011" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="black"/>
                  </mask>
                  <g mask="url(#mask0_454_3011)">
                  <path d="M12 15.8209L7 11.3122L8.4 10.0046L11 12.3492V5H13V12.3492L15.6 10.0046L17 11.3122L12 15.8209ZM6 19.4278C5.45 19.4278 4.97917 19.2512 4.5875 18.898C4.19583 18.5449 4 18.1203 4 17.6243V14.9191H6V17.6243H18V14.9191H20V17.6243C20 18.1203 19.8042 18.5449 19.4125 18.898C19.0208 19.2512 18.55 19.4278 18 19.4278H6Z" fill="#292929"/>
                  </g>
                  </svg>
                Download Curriculum</button>
              </a>
            </div>
            <Image src={HeroCurriculumImage} alt="Curriculum-Image" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
