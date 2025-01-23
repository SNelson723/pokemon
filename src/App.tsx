import { Outlet } from "react-router"
import Sidebar from "./components/Sidebar"


const App = () => {

  return (
    <div className="w-screen h-screen bg-slate-600 text-white">
      <div className="text-center">Top Title</div>
      <div></div>

      {/* Sidebar navigation and content */}
      <div className="w-full flex">
        <Sidebar />
        <div className="p-4  flex-1 justify-center align-center place-items-center  h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App
