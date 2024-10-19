import { Footer } from "./Footer";
import { Navbar } from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClientLayout;
