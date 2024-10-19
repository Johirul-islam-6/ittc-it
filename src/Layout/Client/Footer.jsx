export const Footer = () => {
  return (
    <>
      <footer className="text-gray-700 dark:text-white bg-[#fff] dark:bg-custom-gradient relative border-t-2 dark:border-t-0">
        <div className="text-gray-700 dark:text-white px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="text-gray-700 dark:text-white grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-gray-700 dark:text-white grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
              {/* -------- col-2 ---------- */}

              <div className="mx-auto">
                <h2 className="mb-6 text-[20px]  font-[600] leading-[14px] text-[#101828] dark:text-white SILIGURI text-[16px] uppercase">
                  Our Courses
                </h2>
                <ul className="text-[#9B9B9B] text-[11px] sm:text-sm font-light">
                  <li className="mb-4">
                    <a
                      to="/cetagorycourses/graphic-desing"
                      className=" hover:underline SILIGURI text-[16px]"
                    >
                      Graphic Design
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      to="/cetagorycourses/web-development"
                      className=" hover:underline SILIGURI text-[16px]"
                    >
                      Web Development
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      to="/cetagorycourses/digital-marketing"
                      className=" hover:underline SILIGURI text-[16px]"
                    >
                      Digital Marketing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      to="/cetagorycourses/basic-computer"
                      className=" hover:underline SILIGURI text-[16px]"
                    >
                      Basic Computer
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      to="/cetagorycourses/Autocad-basic-premium"
                      className=" hover:underline SILIGURI text-[16px]"
                    >
                      Autocad Basic & premium
                    </a>
                  </li>
                </ul>
              </div>
              {/* -------- col-3 ---------- */}
              <div className=" mx-auto ">
                <h2 className="mb-6 text-[20px]  font-[600] leading-[14px] text-[#101828] dark:text-white SILIGURI text-[16px] uppercase">
                  Our Academi
                </h2>
                <ul className="text-[#9B9B9B] text-[11px] sm:text-sm font-light">
                  <li className="mb-4">
                    <a
                      to="/about"
                      className=" hover:underline SILIGURI text-[16px]"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a to="/" className=" hover:underline SILIGURI text-[16px]">
                      Refund Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a to="/" className=" hover:underline SILIGURI text-[16px]">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a to="/" className=" hover:underline SILIGURI text-[16px]">
                      Terms And Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="  mx-auto ">
                <h2 className="mb-6 text-[20px]  font-[600] leading-[14px] text-[#101828] dark:text-white SILIGURI text-[16px] uppercase">
                  Contacts
                </h2>
                <ul className="text-[#9B9B9B] text-[11px] sm:text-sm font-light">
                  <li className="mb-4">
                    <a
                      to="/"
                      className=" hover:underline SILIGURI text-[16px] flex gap-2 items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                      >
                        <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                      </svg>{" "}
                      eng.hanifmahamud@gmail.com
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      to="/"
                      className=" hover:underline SILIGURI text-[16px] flex gap-2 items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                      >
                        <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                      </svg>
                      01705100763 , 01830-330129
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      to="/"
                      className=" hover:underline SILIGURI text-[16px] flex gap-2 items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="25"
                        width="25"
                        viewBox="0 0 384 512"
                      >
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>
                      Mahbub Plaza (7th floor), Room No #704/B, 4/A Indira Road,
                      Farmgate Dhaka-1215.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container mx-auto ">
              <div className="flex justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d626.4211205063712!2d90.40590127486345!3d24.674708667400477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564556bda962f5%3A0x218559500967c73a!2sMa%20Medical%20hall!5e1!3m2!1sen!2sbd!4v1722780722084!5m2!1sen!2sbd"
                  width="800"
                  height="230"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
