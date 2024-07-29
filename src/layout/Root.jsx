import { Toaster } from "react-hot-toast";
import Home from "../pages/Home/Home";

const Root = () => {
  return (
    <div className="font-poppins">
      <Home></Home>
      <Toaster />
    </div>
  );
};

export default Root;
