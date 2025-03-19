import Image from "next/image";
import HeroCreatorImage from "@/assets/images/hero1.png";
import HeroCalenderImage from "@/assets/images/calender_frame.png";
import HeroCurriculumImage from "@/assets/images/medal.png";

export default function HeroSection() {
  return (
    <div className="max-w-3xl md:max-w-4xl lg:max-w-7xl mx-auto mb-12 sm:mb-24 px-4 sm:px-2 text-black">
      <div className="grid grid-col-1 sm:grid-cols-9 sm:grid-rows-9 gap-x-5">
        {/* Image div with relative positioning and height */}
        <div className="col-span-1 sm:col-span-6 sm:row-span-9 relative rounded-2xl h-80 sm:h-170">
          <Image
            src={HeroCreatorImage}
            alt="Creator-Image"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Other content */}
        <div className="col-span-1 sm:col-span-3 sm:row-span-6 sm:col-start-7">
          <div className="col-span-6 row-span-9 relative h-110">
            <div className="absolute top-3 left-2 md:text-[36px] text-[24px] font-bold p-2 text-white bg-opacity-75 rounded z-10 leading-[30px] md:leading-[40px]">
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
