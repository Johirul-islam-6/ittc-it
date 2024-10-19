import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import "./ReviewCard.css";

import p1 from "../../../assets/review/p1.webp";
import p2 from "../../../assets/review/p2.webp";

const ReviewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1250, // define breakpoint for lg screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // define breakpoint for md screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // define breakpoint for sm screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520, // define breakpoint for sm screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const review = [
    {
      id: 1,
      image: p1,
      name: "Rasel khan",
      passion: "Software Engineer",
      message:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 5,
      image: p2,
      name: "Rasel khan",
      passion: "Software Engineer",
      message:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 2,
      image: p1,
      name: "Rasel khan",
      passion: "Software Engineer",
      message:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 3,
      image: p2,
      name: "Rasel khan",
      passion: "Software Engineer",
      message:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 4,
      image: p1,
      name: "Rasel khan",
      passion: "Software Engineer",
      message:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];

  return (
    <div className="md:px-10 ">
      <Slider {...settings}>
        {review.map((student, index) => (
          <div key={index} className="reviewCard-container relative">
            {/* <div className="reviewCard md:h-[310px] border-2 flex flex-col justify-center items-center px-5 py-2 pb-5">
              <div className="flex flex-col justify-center">
                <img className="" src={student?.image} alt="" />
                <img
                  className="border-2 border-amber-700 w-[80px] h-[80px] flex object-cover p-[3px] justify-center mx-auto rounded-full"
                  src={student?.image}
                  alt=""
                />
                <h1 className="text-center text-[16px] pt-1 font-[600] text-[#3e54a3]">
                  {student?.name?.slice(0, 16)}
                </h1>
                <p className="text-[12px] text-[#00000090]">
                  {student?.passion}
                </p>
              </div>
              <span>
                <div className="flex items-center justify-center h-screen">
                  <div className="bg-teal-500 p-2 rounded-full">
                    <FaQuoteRight className="text-white w-6 h-6" />
                  </div>
                </div>
              </span>
              <h2 className="text-[16px] text-start SILIGURI mt-3 ">
                {student?.message.slice(0, 220)}...
              </h2>
            </div> */}

            <div className="reviewCard md:h-[310px] border-2 justify-center items-center px-5 py-5 ">
              <div className="flex justify-start">
                <div className="flex relative justify-start  flex-col">
                  {/* <img className="" src={student?.image} alt="" /> */}
                  <img
                    className="border-2 border-amber-700 w-[100px] h-[100px] flex object-cover p-[3px] justify-start rounded-full"
                    src={student?.image}
                    alt=""
                  />
                  <div className="flex absolute bottom-0 items-center justify-center ">
                    <div className="bg-[#26e87d] p-2 rounded-full">
                      <FaQuoteRight className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center ps-5">
                  <h1 className="text-center text-[25px] pt-1 font-[600] dark:text-white text-[#3e54a3]">
                    {student?.name?.slice(0, 16)}
                  </h1>
                  <p className="text-[14px] dark:text-white text-[#00000090]">
                    {student?.passion}
                  </p>
                </div>
              </div>

              <h2 className="text-[16px] dark:text-white text-start SILIGURI pt-5 ">
                {student?.message.slice(0, 220)}...
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsSlider;
