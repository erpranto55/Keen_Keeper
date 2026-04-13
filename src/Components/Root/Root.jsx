import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;