import { FaBriefcase, FaRegComment, FaUser } from "react-icons/fa";
import Image1 from "../../../assets/allCourses/computer.png";
import Image2 from "../../../assets/allCourses/civil.webp";
import { HeadingText } from "../../ExtraComponents/HeadingText/HeadingText";

export const AllCourses = () => {
  const allCourses = [
    {
      id: 1,
      courseName: "Computer",
      courseImage: Image1,
      enrollCourses: "5k",
      achiveJob: "1k",
      commentCourses: "100",
      title: "প্রযুক্তির যুগে নিজেকে এগিয়ে রাখতে স্কিল তৈরি করুন",
      discription:
        "আমাদের প্রতিষ্ঠানের একটাই লক্ষ্য শিক্ষার্থীদের হতে হবে দক্ষ, তাই লক্ষ্য হোক দক্ষ হওয়া। ITTC এক্সপার্ট টিম এর সাথে নিজে দক্ষ করে গড়ে তুলুন। একটাই লক্ষ্য হতে হবে দক্ষ।",
    },
    {
      id: 1,
      courseName: "Computer",
      courseImage: Image2,
      enrollCourses: "5k",
      achiveJob: "1k",
      commentCourses: "100",
      title: "প্রযুক্তির যুগে নিজেকে এগিয়ে রাখতে স্কিল তৈরি করুন",
      discription:
        "আমাদের প্রতিষ্ঠানের একটাই লক্ষ্য শিক্ষার্থীদের হতে হবে দক্ষ, তাই লক্ষ্য হোক দক্ষ হওয়া। ITTC এক্সপার্ট টিম এর সাথে নিজে দক্ষ করে গড়ে তুলুন। একটাই লক্ষ্য হতে হবে দক্ষ।",
    },
    {
      id: 1,
      courseName: "Civil",
      courseImage: Image1,
      enrollCourses: "5k",
      achiveJob: "1k",
      commentCourses: "100",
      title: "প্রযুক্তির যুগে নিজেকে এগিয়ে রাখতে স্কিল তৈরি করুন",
      discription:
        "আমাদের প্রতিষ্ঠানের একটাই লক্ষ্য শিক্ষার্থীদের হতে হবে দক্ষ, তাই লক্ষ্য হোক দক্ষ হওয়া। ITTC এক্সপার্ট টিম এর সাথে নিজে দক্ষ করে গড়ে তুলুন। একটাই লক্ষ্য হতে হবে দক্ষ।",
    },
  ];

  return (
    <div id="courses" className="pb-10 pt-[100px] dark:bg-custom-gradient">
      <HeadingText title1={"আমাদের কোর্স সমূহ"} title2={" আমাদের কোর্স সমূহ"} />
      <div className="grid md:grid-cols-3 gap-x-10 gap-y-10 justify-center items-center px-5 mt-16">
        {allCourses?.map((courses, index) => (
          <>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1300"
              data-aos-easing="linear"
              key={index}
              className="cursor-pointer p-1 bg-white dark:bg-[#00000026] border-2 border-[#14F570] dark:border-[#fff] hover:border-[#14F570] shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={courses?.courseImage}
                alt="Image 1"
                className="w-full h-[250px] object-cover rounded-t-md"
              />
              <div className="p-4">
                <div className="flex items-center gap-5 text-sm text-gray-500 dark:text-white mb-2">
                  <span className="flex items-center mr-2">
                    <FaUser className="pe-1" size={15} />
                    {courses?.enrollCourses}
                  </span>
                  <span className="flex items-center mr-2">
                    <FaBriefcase className="pe-1" size={18} /> 1k
                  </span>
                  <span className="flex  items-center">
                    <FaRegComment className="pe-1" size={20} />3 Comments
                  </span>
                </div>
                <h2 className="text-lg font-semibold mb-2 dark:text-white pt-2">
                  গ্রাফিক ডিজাইন
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  আমাদের প্রতিষ্ঠানের একটাই লক্ষ্য শিক্ষার্থীদের হতে হবে দক্ষ,
                  তাই লক্ষ্য হোক দক্ষ হওয়া। ITTC এক্সপার্ট টিম এর সাথে নিজে দক্ষ
                  করে গড়ে তুলুন। একটাই লক্ষ্য হতে হবে দক্ষ।
                </p>

                <div className="flex mt-5">
                  <button className="bg-[#f1f1f1] hover:bg-[#12CE65] text-[#000] flex w-[100%] justify-center items-center py-2">
                    আরোও দেখে আসুন
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
