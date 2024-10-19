export const About = () => {
  return (
    <div className="pt-5 dark:bg-darkBlue bg-white">
      <h1 className=" dark:text-[#ffffff] text-[#07091E] pt-5 text-[40px] font-[600] bengali-text text-center">
        আমাদের ইনডাসটিয়াল লটাসমেন্ট ।
      </h1>
      <div className="Electical  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          <div className="imageDiv"></div>
          <div className="text-continer">
            <h1 className=" dark:text-[#ffffff] text-[#07091E] pb-2 text-[32px] font-[600] bengali-text">
              Electical Attachment
            </h1>
            <p className="text-[18px] font-[400]  dark:text-[#ffffff] text-[#07091E]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum
              fugiat itaque, beatae impedit quod saepe quo accusantium soluta
              minima optio tempora. Unde expedita minus veritatis tempore
              similique quia voluptates.
            </p>

            <div className="bullet pt-5">
              <h1 className=" text-[#07091E] dark:text-[#ffffff] font-bold text-[18px]">
                {" "}
                {` => Lorem ipsum dolor sit amet consectetur`}
              </h1>
              <h1 className=" text-[#07091E] dark:text-[#ffffff] font-bold text-[18px]">
                {" "}
                {` => Lorem ipsum dolor sit amet consectetur`}
              </h1>
              <h1 className=" text-[#07091E] dark:text-[#ffffff] font-bold text-[18px]">
                {" "}
                {` => Lorem ipsum dolor sit amet consectetur`}
              </h1>
            </div>
            <p className="text-[18px] font-[400] text-[#07091E] dark:text-[#ffffff] pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum
              fugiat itaque, beatae impedit quod saepe quo accusantium soluta
              minima optio tempora. Unde expedita minus veritatis tempore
              similique quia voluptates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
