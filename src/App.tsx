import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="w-screen h-screen bg-slate-600 text-white overflow-y-scroll no-scrollbar">
      <div className="w-full text-center text-xl py-3 border-b">
        Stephen's Pokemans App
      </div>

      {/* Sidebar navigation and content */}
      <div className="w-full flex h-4/5">
        <Sidebar />
        <div className="p-4 flex-1 justify-center align-center place-items-center h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
