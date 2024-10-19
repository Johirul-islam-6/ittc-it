import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";
import router from "./router/Router";
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
