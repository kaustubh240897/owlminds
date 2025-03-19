import ForwardArrowIcon from "@/assets/icons/ForwardArrowIcon";
import bgImage from "@/assets/images/building_blocks.png";

export default function FutureSuccess() {
  return (
    <div className="relative w-full bg-[url(../assets/images/building_block_mob.png)] sm:bg-[url(../assets/images/building_blocks.png)] h-[850px] sm:h-[780px] bg-cover bg-center flex items-center justify-center mb-24">
      <div className="absolute top-4 px-8 sm:px-0 max-w-3xl md:max-w-4xl lg:max-w-7xl">
        <h1 className="text-5xl text-center sm:text-left sm:text-7xl font-semibold w-full sm:w-1/2 text-black mb-6">
          Building Blocks of Future Success
        </h1>
        <p className="text-black text-center text-lg sm:text-xl sm:text-left w-full  sm:w-1/2">
          Lay the foundation for your child's success with OwlMinds'
          comprehensive curriculum. Each 'building block' – from leadership and
          innovation to digital fluency and financial confidence – is designed
          to empower them with the skills they need for a bright future.
        </p>

        <div className="my-10">
          <button className="bg-[#7f00ff] flex items-center mx-auto sm:mx-0 px-8 py-3 rounded-xl text-base sm:text-xl">
            <p className="pr-2">Book a FREE Trail Class</p>
            <ForwardArrowIcon color={"#fff"} height={14} width={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
