import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="w-screen h-screen bg-slate-600 text-white overflow-y-scroll no-scrollbar">
      <div className="text-center text-xl py-3 border-b">
        Stephen's Pokemans App
      </div>

      {/* Sidebar navigation and content */}
      <div className="w-full flex h-full">
        <Sidebar />
        <div className="p-4 flex-1 justify-center align-center place-items-center h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
