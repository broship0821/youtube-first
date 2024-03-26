import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <>
      <div className="pt-5 flex justify-center">
        <div className="flex">
          <Navbar />
        </div>
      </div>
      <div className="flex justify-center">
        <Outlet />
      </div>
    </>
  );
}
