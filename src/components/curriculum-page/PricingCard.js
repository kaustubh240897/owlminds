import Image from "next/image";
import PriceCard1 from "@/assets/images/Card_1.png";
import PriceCard2 from "@/assets/images/Card_2.png";
import PriceCard3 from "@/assets/images/Card_3.png";

export default function PricingCard() {
  return (
    <div className="max-w-3xl md:max-w-4xl lg:max-w-7xl mx-auto mb-16 sm:mb-44 px-4 sm:px-2 text-black">
      <div className="mb-8">
        <p className="text-xl text-center sm:text-left pb-4">
          Smart plans for every need
        </p>
        <h2 className="text-4xl sm:text-5xl font-medium text-center sm:text-left">
          Owl Minds Pricing
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-y-0 sm:gap-x-4">
        <div className="col-span-1">
          <div className="relative">
            <Image
              src={PriceCard1}
              alt={"price-card-1"}
              // className="absolute h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-lg text-2xl text-white  font-bold">
              Basic 
              <div className="text-sm font-normal text-white">
              Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Curabitur 
              </div>
              <div className="text-5xl font-bold text-white mt-5">₹1500/<span className="text-xl font-bold mr-2">perclass</span></div>
              <div className="flex items-center gap-2 mt-[5rem]">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 13L11 18L21 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text-white text-sm">8 classes </span>
                
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 13L11 18L21 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text-white text-sm">Lorem ipsum </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 13L11 18L21 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text-white text-sm">Lorem ipsum </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 13L11 18L21 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text-white text-sm">Lorem ipsum </span>
              </div>
              
              <a href="#" className="block">
              <button className="sm:mt-[12rem] mt-[8rem] w-full max-w-[400px] sm:ml-[9px] ml-[32px] bg-white text-black py-3 px-4 sm:py-[13px] sm:px-[110px] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Join Now!!
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <Image
              src={PriceCard2}
              alt={"price-card-1"}
              // className="absolute h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-lg text-2xl text-white  font-bold">
              Premium
              <div className="text-sm font-normal text-white">
              Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Curabitur 
              </div>
              <div className="text-5xl font-bold text-white mt-5">₹1000/<span className="text-xl font-bold mr-2">perclass</span></div>
              <div className="flex items-center gap-2 mt-[5rem]">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 13L11 18L21 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text-white text-sm">8 classes </span>
                
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 13L11 18L21 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text-white text-sm">Lorem ipsum </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 13L11 18L21 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text-white text-sm">Lorem ipsum </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 13L11 18L21 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text-white text-sm">Lorem ipsum </span>
              </div>
              
              <a href="#" className="block">
                <button className="sm:mt-[12rem] mt-[8rem] w-full max-w-[400px] sm:ml-[9px] ml-[32px] bg-white text-black py-3 px-4 sm:py-[13px] sm:px-[110px] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Join Now!!
                </button>
              </a>
            </div>
            
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <Image
              src={PriceCard3}
              alt={"price-card-1"}
              // className="absolute h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-lg text-2xl text-white  font-bold">
              Standard 
              <div className="text-sm font-normal text-white">
              Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Curabitur 
              </div>
              <div className="text-5xl font-bold text-white mt-5">₹1250/<span className="text-xl font-bold mr-2">perclass</span></div>
              <div className="flex items-center gap-2 mt-[5rem]">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 13L11 18L21 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text-white text-sm">8 classes </span>
                
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 13L11 18L21 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text-white text-sm">Lorem ipsum </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 13L11 18L21 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text-white text-sm">Lorem ipsum </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 13L11 18L21 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text-white text-sm">Lorem ipsum </span>
              </div>
              
              <a href="#" className="block">
              <button className="sm:mt-[12rem] mt-[8rem] w-full max-w-[400px] sm:ml-[9px] ml-[32px] bg-white text-black py-3 px-4 sm:py-[13px] sm:px-[110px] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Join Now!!
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
