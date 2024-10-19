import "./TeacherInfo.css";
import image1 from "../../../assets/teacher/2.webp";
import ceo from "../../../assets/teacher/ceo.jpg";
import { HeadingText } from "../../ExtraComponents/HeadingText/HeadingText";

export const TeacherInfo = () => {
  const teachers = [
    {
      id: "1",
      TName: "Rasel Khan",
      passion: "Teacher",
      img: image1,
      facbook: "link",
      website: "",
      youtube: "",
    },
    {
      id: "2",
      TName: "Khan uddin",
      passion: "Teacher",
      img: image1,
      facbook: "link",
      website: "",
      youtube: "",
    },
    {
      id: "3",
      TName: "Md.Johir",
      passion: "Teacher",
      img: image1,
      facbook: "link",
      website: "",
      youtube: "",
    },
    {
      id: "1",
      TName: "Rasel Khan",
      passion: "Teacher",
      img: image1,
      facbook: "link",
      website: "",
      youtube: "",
    },
    {
      id: "2",
      TName: "Khan uddin",
      passion: "Teacher",
      img: image1,
      facbook: "link",
      website: "",
      youtube: "",
    },
    {
      id: "3",
      TName: "Md.Johir",
      passion: "Teacher",
      img: image1,
      facbook: "link",
      website: "",
      youtube: "",
    },
    {
      id: "2",
      TName: "Khan uddin",
      passion: "Teacher",
      img: image1,
      facbook: "link",
      website: "",
      youtube: "",
    },
    {
      id: "3",
      TName: "Md.Johir",
      passion: "Teacher",
      img: image1,
      facbook: "link",
      website: "",
      youtube: "",
    },
  ];

  return (
    <div
      id="teacher"
      className="h-[auto] py-10 w-[100%] px-5 dark:bg-custom-gradient overflow-hidden"
    >
      <HeadingText
        title1={"আমাদের আইটিটিসি টিচার"}
        title2={"আমাদের আইটিটিসি টিচার"}
      />
      <div className="mt-16 grid justify-center items-center">
        J
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="linear"
          className="image-area"
        >
          <div className="Ceo flex justify-center gap-5 items-center rounded-md ">
            <div className="max-w-[1400px]  mx-auto flex flex-col-reverse md:grid grid-cols-2 justify-center items-center gap-10">
              <div className="text-container p-2 md:ps-10">
                <h1 className="md:text-[30px] text-[#15D062] font-[600] SILIGURI ">
                  Md. Abdul Matin.
                </h1>
                <p className="text-[#f1f1f1c7] font-bold">
                  ব্যবস্থাপনা ও পরিচালক
                </p>
                <p className="text-[18px] text-[#FFF] font-[400] mt-4 Navbar-font text-justify">
                  কারিগরি শিক্ষা আমাদের জীবনের অন্যতম গুরুত্বপূর্ণ মাধ্যম, যা
                  আমাদেরকে বাস্তবমুখী জ্ঞান ও দক্ষতা প্রদান করে। এর মাধ্যমে আমরা
                  শুধু তত্ত্বগত জ্ঞান নয়, বরং ব্যবহারিক দক্ষতাও অর্জন করি, যা
                  আমাদেরকে কর্মক্ষেত্রে এবং ব্যক্তিগত জীবনে সাফল্য এনে দিতে
                  সক্ষম করে। এই শিক্ষা আমাদেরকে আত্মনির্ভরশীল করে তোলে এবং উন্নত
                  পেশাজীবনের সুযোগ সৃষ্টি করে, যা একটি উন্নত সমাজ গঠনে সহায়ক
                  ভূমিকা পালন করে।
                </p>
              </div>

              <div className="flex justify-end md:pe-10">
                <img
                  className="object-cover rounded-lg w-[300px] h-[300px]"
                  src={ceo}
                  alt=""
                />
              </div>
            </div>
          </div>

          <h1 className="text-[16px] text-center pt-2 font-[600] text-[#000000a0] SILIGURI">
            ব্যবস্থাপনা পরিচালক
          </h1>
        </div>
      </div>

      <div className="mt-16 max-w-[1400px] mx-auto grid justify-center items-center grid-cols-1 gap-5 md:grid-cols-4  relative">
        {teachers?.map((teacher, index) => (
          <div
            data-aos="zoom-in"
            data-aos-duration="1800"
            data-aos-easing="linear"
            key={index}
            className="image-area border-2 cursor-pointer"
          >
            <div className="img-wrapper">
              <img
                className="img-fluid"
                src={teacher?.img}
                alt="Atul Prajapati"
              />
              <h2>
                {teacher?.TName}
                <span className="pe-2 IBM text-[11px] text-[#fff] ">
                  ( {""}
                  {teacher?.passion}
                  {""} )
                </span>
              </h2>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={teacher?.facbook}
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={teacher?.website}
                  >
                    <i className="fas fa-globe"></i>
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={teacher?.youtube}
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
