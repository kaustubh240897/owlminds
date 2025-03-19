import Image from "next/image";
import PriceCard1 from "@/assets/images/PriceCard1.png";
import PriceCard2 from "@/assets/images/PriceCard2.png";
import PriceCard3 from "@/assets/images/PriceCard3.png";

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
          <div className="">
            <Image
              src={PriceCard1}
              alt={"price-card-1"}
              // className="absolute h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="">
            <Image
              src={PriceCard2}
              alt={"price-card-1"}
              // className="absolute h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="">
            <Image
              src={PriceCard3}
              alt={"price-card-1"}
              // className="absolute h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
