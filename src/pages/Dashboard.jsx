import { useState } from "react";
import BoxDashboard from "../components/boxDashboard";
import BoxDashbordTwo from "../components/boxDashbordTwo";



export default function Dashboard() {

  const [showFirstSection, setShowFirstSection] = useState(true);

 
  return (
    <div className="w-full">
      <div className="w-[95%] md:w-[80%] mx-auto flex items-center justify-around border border-1 p-3 rounded-lg bg-gray-200">
        <span
          className={`text-color1 rounded-lg py-2 text-sm md:text-lg text-center w-1/2 font-semibold cursor-pointer ${showFirstSection ? 'bg-green-400 text-color3' : ''}`}
          onClick={() => setShowFirstSection(true)}
        >
          موجودی های کیف ارزی
        </span>
        <span
          className={`text-color1 rounded-lg w-1/2 text-center py-2 text-sm md:text-lg font-semibold cursor-pointer ${!showFirstSection ? 'bg-green-400 text-color3' : ''}`}
          onClick={() => setShowFirstSection(false)}
        >
          موجودی های کیف پول
        </span>
      </div>
      {showFirstSection ? (
        <div className="flex items-center justify-center mt-10 flex-wrap gap-3 w-[95%] mx-auto md:w-[80%]">
          <BoxDashboard />
        </div>
      ) : (
        <div className="flex items-center justify-center mt-10 flex-wrap gap-3 w-[95%] mx-auto md:w-[80%]">
          <BoxDashbordTwo />
        </div>
      )}
    </div>
  );
}
