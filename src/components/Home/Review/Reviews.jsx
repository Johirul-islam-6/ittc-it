import { HeadingText } from "../../ExtraComponents/HeadingText/HeadingText";
import ReviewsSlider from "./ReviewsSlider";

export const Reviews = () => {
  return (
    <>
      <div className="review bg-white dark:bg-darkBlue pt-[40px] pb-10">
        <div className="pt-10 ">
          <HeadingText
            title1={"এক্সপার্টরা কি বলে"}
            title2={"এক্সপার্টরা কি বলে"}
          />
          <div className=" my-12">
            <ReviewsSlider />
          </div>
        </div>
      </div>
    </>
  );
};
