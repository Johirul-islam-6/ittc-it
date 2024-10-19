import { AchieveCourses } from "../../components/Home/AchieveCourses/AchieveCourses";
import { Banner } from "../../components/Home/Banner/Banner";
import { Count } from "../../components/Home/count/Count";
import { Gallary } from "../../components/Home/Gallary/Gallary";
import { AllCourses } from "../../components/Home/OurCourses/AllCourses";
import { Reviews } from "../../components/Home/Review/Reviews";
import { TeacherInfo } from "../../components/Home/TeacherInfo/TeacherInfo";

export const Home = () => {
  return (
    <div>
      <Banner />
      <Count />
      <Gallary />
      <AchieveCourses />
      <AllCourses />
      <TeacherInfo />
      <Reviews />
    </div>
  );
};
