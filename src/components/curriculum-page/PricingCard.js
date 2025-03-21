import Image from "next/image";
import PriceCard4 from "@/assets/images/Card_4.png";
import PriceCard5 from "@/assets/images/Card_5.png";

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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-y-0 sm:gap-x-8">
        <div className="col-span-1 sm:transform sm:scale-95">
          <div className="relative">
            <Image
              src={PriceCard5}
              alt={"price-card-1"}
              className="w-full h-full"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-lg text-3xl text-black font-bold">
              Basic 
              <div className="text-xl font-normal text-black">
              Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Curabitur 
              </div>
              <div className="text-5xl font-bold text-black mt-5">₹1500/<span className="text-xl font-bold mr-2">class</span></div>
              <div className="flex items-center gap-2 mt-[3rem]">
              <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_566_2300)">
              <path d="M6.01587 12.9051L10.7548 17.644L20.2326 8.16614" stroke="#242424" stroke-width="1.89557" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_566_2300">
              <rect width="24.6424" height="24.6424" fill="white" transform="translate(0.329102 0.583862)"/>
              </clipPath>
              </defs>
              </svg>

                <span className="text-black text-sm">8 classes </span>
                
              </div>
              <div className="flex items-center gap-2 mt-2">
              <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_566_2300)">
                <path d="M6.01587 12.9051L10.7548 17.644L20.2326 8.16614" stroke="#242424" stroke-width="1.89557" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_566_2300">
                <rect width="24.6424" height="24.6424" fill="white" transform="translate(0.329102 0.583862)"/>
                </clipPath>
                </defs>
              </svg>
                <span className="text-black text-sm">Lorem ipsum </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
              <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_566_2300)">
              <path d="M6.01587 12.9051L10.7548 17.644L20.2326 8.16614" stroke="#242424" stroke-width="1.89557" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_566_2300">
              <rect width="24.6424" height="24.6424" fill="white" transform="translate(0.329102 0.583862)"/>
              </clipPath>
              </defs>
              </svg>
                <span className="text-black text-sm">Lorem ipsum </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
              <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_566_2300)">
              <path d="M6.01587 12.9051L10.7548 17.644L20.2326 8.16614" stroke="#242424" stroke-width="1.89557" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_566_2300">
              <rect width="24.6424" height="24.6424" fill="white" transform="translate(0.329102 0.583862)"/>
              </clipPath>
              </defs>
              </svg>

                <span className="text-black text-sm">Lorem ipsum </span>
              </div>
              
              <a href="#" className="block">
              <button className="sm:mt-[12rem] mt-[8rem] w-full sm:ml-[9px] ml-[0px] bg-purple-700 text-white py-3 px-4 sm:py-[13px] sm:px-[105px] rounded-lg font-semibold transition-colors">
                  Join Now!!
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-1 sm:transform sm:scale-105 sm:mt-9">
          <div className="relative">
            <Image
              src={PriceCard4}
              alt={"price-card-1"}
              className="w-full h-full"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-lg text-4xl text-white font-bold">
              Premium
              <div className="text-xl font-normal text-white">
              Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Curabitur 
              </div>
              <div className="text-5xl font-bold text-white mt-5">₹1000/<span className="text-xl font-bold mr-2">class</span></div>
              <div className="flex items-center gap-2 mt-[3rem]">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 13L11 18L21 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text-white text-sm">64 classes </span>
                
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
                <button className="sm:mt-[12rem] mt-[8rem] w-full sm:ml-[9px] bg-white text-black py-3 px-4 sm:py-[8px] sm:px-[90px] rounded-lg font-semibold transition-colors">
                  Join Now!!
                </button>
              </a>
            </div>
            
          </div>
        </div>

        <div className="col-span-1 sm:transform sm:scale-95">
          <div className="relative">
            <Image
              src={PriceCard5}
              alt={"price-card-1"}
              className="w-full h-full"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-lg text-3xl text-black  font-bold">
              Standard
              <div className="text-xl font-normal text-black">
              Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Curabitur 
              </div>
              <div className="text-5xl font-bold text-black mt-5">₹1250/<span className="text-xl font-bold mr-2">class</span></div>
              <div className="flex items-center gap-2 mt-[3rem]">
              <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_566_2300)">
              <path d="M6.01587 12.9051L10.7548 17.644L20.2326 8.16614" stroke="#242424" stroke-width="1.89557" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_566_2300">
              <rect width="24.6424" height="24.6424" fill="white" transform="translate(0.329102 0.583862)"/>
              </clipPath>
              </defs>
              </svg>

                <span className="text-black text-sm">32 classes </span>
                
              </div>
              <div className="flex items-center gap-2 mt-2">
              <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_566_2300)">
                <path d="M6.01587 12.9051L10.7548 17.644L20.2326 8.16614" stroke="#242424" stroke-width="1.89557" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_566_2300">
                <rect width="24.6424" height="24.6424" fill="white" transform="translate(0.329102 0.583862)"/>
                </clipPath>
                </defs>
              </svg>
                <span className="text-black text-sm">Lorem ipsum </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
              <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_566_2300)">
              <path d="M6.01587 12.9051L10.7548 17.644L20.2326 8.16614" stroke="#242424" stroke-width="1.89557" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_566_2300">
              <rect width="24.6424" height="24.6424" fill="white" transform="translate(0.329102 0.583862)"/>
              </clipPath>
              </defs>
              </svg>
                <span className="text-black text-sm">Lorem ipsum </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
              <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_566_2300)">
              <path d="M6.01587 12.9051L10.7548 17.644L20.2326 8.16614" stroke="#242424" stroke-width="1.89557" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_566_2300">
              <rect width="24.6424" height="24.6424" fill="white" transform="translate(0.329102 0.583862)"/>
              </clipPath>
              </defs>
              </svg>
                <span className="text-black text-sm">Lorem ipsum </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
              <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_566_2300)">
              <path d="M6.01587 12.9051L10.7548 17.644L20.2326 8.16614" stroke="#242424" stroke-width="1.89557" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_566_2300">
              <rect width="24.6424" height="24.6424" fill="white" transform="translate(0.329102 0.583862)"/>
              </clipPath>
              </defs>
              </svg>

                <span className="text-black text-sm">Lorem ipsum </span>
              </div>
              
              <a href="#" className="block">
              <button className="sm:mt-[12rem] mt-[6rem] w-full sm:ml-[9px] ml-[0px] bg-purple-700 text-white py-3 px-4 sm:py-[13px] sm:px-[105px] rounded-lg font-semibold transition-colors">
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
