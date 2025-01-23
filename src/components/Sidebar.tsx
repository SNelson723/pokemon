import { NavLink } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="w-[150px] max-w-[150px] border-r-slate-100 shadow-md mt-5">
      <div className="w-full border text-center py-3 rounded-tr-md hover:bg-green-300 hover:text-black animate-all duration-500 bg-emerald-500">
        <NavLink to="/" className="px-5 mx-5">
          Home
        </NavLink>
      </div>
      <div className="w-full border text-center py-3 hover:bg-green-300 hover:text-black animate-all duration-500 bg-emerald-500">
        <NavLink to="team" className="px-5 mx-5">
          My Team
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
