// import { useEffect } from "react";
import "./Count.css";
// import Aos from "aos";

export const Count = () => {
  return (
    <div>
      <section className="relative z-50 ">
        <div className="flex bg-image img-gradient2 justify-center items-center  ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-x-10 items-center justify-center  w-[100%] md:px-10">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="linear"
              className="block text-[17px] text-[#e1e0e0] text-center pt-5 z-50 relative left-[0px] md:left-[0px]"
            >
              <div className="block pt-12 md:pt-0">
                <span className="md:block H1 text-[70px] md:text-[90px] dark:text-white text-[#14ff72cb] ">
                  1055
                </span>
                <span className="pt-2 block smallH1">
                  Our Academic Total
                  <br />
                  Students
                </span>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-duration="1100"
              data-aos-easing="linear"
              className="block text-[17px] text-[#e1e0e0] text-center pt-5 z-50 my-0 md:my-0 md:mx-20 mx-0"
            >
              <div className="block">
                <span className="md:block H1 md:text-[90px] text-[80px] dark:text-white text-[#14ff72cb] ">
                  5+
                </span>
                <span className="pt-3 block smallH1">
                  Our Academic
                  <br />
                  Subject
                </span>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="linear"
              className="block md:hidden text-[17px] text-[#e1e0e0] pt-5 text-center z-50 relative bottom-0 left-[0px]"
            >
              <div className="block pb-12">
                <span className="block H1 text-[90px] dark:text-white text-[#14ff72cb] pb-2">
                  500+
                </span>
                <span className="block pt-3 smallH1">
                  Employment for
                  <br /> individuals
                </span>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="linear"
              className="hidden md:block text-[17px] text-[#e1e0e0] text-center z-50 relative bottom-0 left-[0px]"
            >
              <div className="block ">
                <span className="block H1 text-[90px] dark:text-white text-[#14ff72cb] pb-2">
                  500+
                </span>
                <span className="block pt-1 smallH1">
                  Employment for
                  <br />
                  individuals
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
