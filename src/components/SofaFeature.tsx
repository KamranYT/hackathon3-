import Image from "next/image";

const SofaFeature: React.FC = () => {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-10 xl:w-[1920px] xl:h-[580px] bg-[#F1F0FF]">
        <div className="relative flex-shrink-0">
          <div className="w-[481px] h-[449px] bg-[#F5E1FC] rounded-full flex items-center justify-center lg:w-[481px] lg:h-[449px]">
            <Image src="/sofa1.png" alt="Sofa" fill className="w-[558px] h-[550px] object-contain" />
          </div>
        </div>
        <div className="flex flex-col max-w-lg text-left">
          <h2 className="text-[#151875] text-3xl font-bold mb-4">Unique Features Of leatest & Trending Products</h2>
          <p className="text-[#ACABC3] mb-4">All frames constructed with hardwood solids and laminates</p>
          <p className="text-[#ACABC3] mb-4">Reinforced with double wood dowels, glue, screw-nails corner blocks and machine nails</p>
          <p className="text-[#ACABC3] mb-6">Arms, backs and seats are structrally reinforced</p>
          <div className="flex gap-10">
          <button className="bg-[#F52B70] text-white w-40 px-6 py-3 rounded-lg transition">Shop Now</button>
          <h1 className="text-[#151875] font-bold tracking-wider">B&B Italia Sofa <br /> 32$</h1>
          </div>
        
        </div>
      </div>
    );
  };
    export default SofaFeature