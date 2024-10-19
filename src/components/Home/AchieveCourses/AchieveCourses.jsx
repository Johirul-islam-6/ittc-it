import "./Achieve.css";
import img1 from "../../../assets/AchieveCourses/1.png";
import img2 from "../../../assets/AchieveCourses/2.png";
import img3 from "../../../assets/AchieveCourses/3.png";
import img4 from "../../../assets/AchieveCourses/4.png";
import img5 from "../../../assets/AchieveCourses/5.png";
import img6 from "../../../assets/AchieveCourses/6.png";
import { HeadingText } from "../../ExtraComponents/HeadingText/HeadingText";

export const AchieveCourses = () => {
  const StudentInfo = [
    {
      id: "1",
      title: "ইন্ডাস্ট্রি ফোকাসড লাইভ কোর্সেস",
      paragrap:
        "জয়েন করুন গাইডলাইন সমৃদ্ধ ইন্ডাস্ট্রি ফোকাসড লাইভ কোর্সে, শুরু করুন আপনার ক্যারিয়ারের জার্নি।",
      image: img1,
    },
    {
      id: "2",
      title: "ইন্টারেকটিভ লাইভ ক্লাস",
      paragrap:
        "ইন্ডাস্ট্রি এক্সপার্টদের সাথে নিয়মিত লাইভ ক্লাস, কনসেপচুয়াল ক্লাস আর সাপোর্ট ক্লাসে স্কিল ডেভেলপমেন্ট এখন হবে একদম পরিপুর্ন।",
      image: img2,
    },
    {
      id: "3",
      title: "মডিউল ভিত্তিক স্টাডি প্ল্যান",
      paragrap:
        "কুইজ, এসাইনমেন্ট আর লাইভ এক্সাম দিয়ে সাজানো মডিউলভিত্তিক গোছানো স্টাডিপ্ল্যানের সাথে ছিটকে পড়ার কোনো চান্সই নেই।",
      image: img3,
    },
    {
      id: "4",
      title: "রিয়েলটাইম প্রোগ্রেস ট্র্যাকিং",
      paragrap:
        "ট্র্যাক করুন আপনার প্রোগ্রেস রিয়েল টাইম, দেখে নিন লিডার বোর্ডে আপনার পজিশন আর কম্পিটিশনে এগিয়ে যান সবার থেকে।",
      image: img4,
    },
    {
      id: "5",
      title: "শিখুন ইন্ডাস্ট্রি এক্সপার্টদের থেকে লাইভে",
      paragrap:
        "স্কিল ডেভেলপ করুন ইন্ডাস্ট্রির সেরা এক্সপার্টদের সাথে, প্রশ্ন করুন আর শিখে নিন সরাসরি, লাইভে।  ",
      image: img5,
    },
    {
      id: "6",
      title: "ইন্টেন্সিভ জব প্লেসমেন্ট সাপোর্ট",
      paragrap:
        "কোর্স কমপ্লিটে পাচ্ছেন জব প্লেসমেন্ট টিমের থেকে লাইফটাইম সিভি, প্রোফাইল বিল্ড এবং জব এপ্লিকেশনসহ ইন্টেন্সিভ জব প্লেসমেন্ট সাপোর্ট। ",
      image: img6,
    },
  ];

  return (
    <>
      <div className="px-2 md:px-5 pt-[100px] bg-white dark:bg-custom-gradient">
        <div className=" ">
          <HeadingText
            title1={" ইন্ডাস্ট্রিয়াল এটাচমেন্ট"}
            title2={" ইন্ডাস্ট্রিয়াল এটাচমেন্ট"}
          />

          <div className="flex flex-col gap-5 mt-16 grid-achiveve">
            {StudentInfo?.map((course) => (
              <>
                <div
                  key={course?.id}
                  className="AchieveCard border-2 flex flex-col justify-center items-center p-8 px-5 rounded-lg duration-300"
                >
                  <div className="image overflow-hidden">
                    <img
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      data-aos-easing="linear"
                      className=" student-info-image"
                      src={course?.image}
                      alt=""
                    />
                  </div>
                  <h1 className="course-name mt-4 dark:text-white text-darkBlue text-center text-[18px] font-[600] SILIGURI">
                    {course?.title}
                  </h1>
                  <p className="SILIGURI text-center py-2 dark:text-white text-darkBlue text-[16px] ">
                    {course?.paragrap}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
