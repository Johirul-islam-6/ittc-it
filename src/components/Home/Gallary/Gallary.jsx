import "./Gallary.css";

import s1 from "../../../assets/gallary/1.jpg";
import s2 from "../../../assets/gallary/1.jpg";
import s3 from "../../../assets/gallary/1.jpg";
import s4 from "../../../assets/gallary/1.jpg";
import s5 from "../../../assets/gallary/1.jpg";
import s6 from "../../../assets/gallary/1.jpg";
import s7 from "../../../assets/gallary/1.jpg";
import s8 from "../../../assets/gallary/1.jpg";
import { HeadingText } from "../../ExtraComponents/HeadingText/HeadingText";

export const Gallary = () => {
  const StudentInfo = [
    {
      id: "1",
      title: "একাডেমিক ক্লাস চলাকালীন শিক্ষার্থী।",
      image: s1,
    },
    {
      id: "2",
      title: "অটোক্যাড ক্লাস চলাকালীন শিক্ষার্থী।",
      image: s2,
    },
    {
      id: "3",
      title: "ইন্ডাস্ট্রিয়াল এটাচমেন্টের শিক্ষার্থী।",
      image: s3,
    },
    {
      id: "4",
      title: "বার্ষিক শিক্ষা সফর ২০-২১ শিক্ষার্থী।",
      image: s4,
    },
    {
      id: "5",
      title: "ম্যাথমেটিক্স ক্লাস চলাকালীন শিক্ষার্থী।",
      image: s5,
    },
    {
      id: "6",
      title: "শিক্ষার্থীদের নিয়ে ক্যারিয়ার মিটআপ ",
      image: s6,
    },
    {
      id: "7",
      title: "সার্টিফিকেট প্রদানের সময় শিক্ষার্থী।",
      image: s7,
    },
    {
      id: "8",
      title: "একাডেমিক পরিক্ষা চলাকালীন ",
      image: s8,
    },
  ];

  return (
    <>
      <div>
        <div className="bg-white pt-[70px] dark:bg-custom-gradient">
          <HeadingText
            title1={"  কোর্স চলাকালীন মুহূর্ত"}
            title2={"  কোর্স চলাকালীন মুহূর্ত"}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
            {StudentInfo?.map((course) => (
              <>
                <div
                  key={course?.id}
                  className="border-2 student-info-card flex flex-col justify-center items-center p-1 md:p-2 "
                >
                  <div className="image overflow-hidden">
                    <img
                      className="border-2 h-[100%] w-[100%] object-cover student-info-image"
                      src={course?.image}
                      alt=""
                    />
                  </div>
                  <h1 className="course-name mt-2 dark:text-white text-[#101828]  text-center text-[16px] font-[600] SILIGURI">
                    {course?.title}
                  </h1>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
