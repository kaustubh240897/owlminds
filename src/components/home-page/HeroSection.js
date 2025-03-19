import Image from "next/image";
import HeroCreatorImage from "@/assets/images/Hero_Banner.png";
import HeroCreatorImageMob from "@/assets/images/Hero_Banner_mob.png";
import HeroCalenderImage from "@/assets/images/calender_frame.png";
import HeroCurriculumImage from "@/assets/images/medal.png";

export default function HeroSection() {
  return (
    <div className="max-w-3xl md:max-w-4xl lg:max-w-7xl mx-auto mb-12 sm:mb-24 px-4 sm:px-2 text-black">
      <div className="grid grid-col-1 sm:grid-cols-9 sm:grid-rows-9 gap-x-5">
        {/* Image div with relative positioning and height */}
        <div className="col-span-1 sm:col-span-6 sm:row-span-9 relative rounded-2xl h-80 sm:h-170">
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
        <div className="col-span-1 sm:col-span-3 sm:row-span-6 sm:col-start-7 mt-[18rem] sm:mt-0">
          <div className="col-span-6 row-span-9 relative h-110">
            <div className="absolute md:top-3 top-10 left-2 md:text-[36px] text-[24px] font-bold p-2 text-white bg-opacity-75 rounded z-10 leading-[30px] md:leading-[40px]">
            Book a <div>Trial Class</div>
            </div>
            <Image src={HeroCalenderImage} alt="Hero-Calender-Image" layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-3 sm:row-span-3 sm:col-start-7 sm:row-start-7">
          <div className="col-span-6 row-span-9 relative w-full h-55">
            <div className="absolute top-4 left-2 p-2 text-white md:text-[36px] text-[24px] font-bold bg-opacity-75 rounded z-10 md:leading-[40px] leading-[30px]">
              <span className="font-[500] md:font-[500]">Develop <span className="font-[700]">Leadership</span></span>
              <div className="font-[700] md:font-[700]"> & Critical Thinking</div>
              <div className="font-[500]  md:font-[500]">Skills</div>
            </div>
            <Image src={HeroCurriculumImage} alt="Curriculum-Image" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
