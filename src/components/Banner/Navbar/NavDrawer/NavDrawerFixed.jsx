import { IoMenu } from "react-icons/io5";
import NavLinks from "../NavLinks";

/* eslint-disable react/prop-types */
const NavDrawerFixed = () => {
  return (
    <div className="drawer z-10 md:hidden">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-ghost hover:bg-transparent drawer-button">
          <IoMenu className="text-4xl" />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <NavLinks></NavLinks>
        </ul>
      </div>
    </div>
  );
};

export default NavDrawerFixed;
