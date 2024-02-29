
import {  useNavigate } from "react-router-dom";

import axios from "axios";

export default function BoxDashboard({id , icon, title, price, isActive }) {
  const navigate = useNavigate();
 
   

  
  return (
    <div className="flex items-center justify-center gap-5 flex-wrap">
      
        <div
         
          className="w-full flex flex-col shadow-xl  justify-between p-4 md:w-[350px] h-[250px] rounded-lg bg-gray-200"
        >
          <div className="flex items-center justify-between">
            <p className="text-color1">{title}</p>
            <span className="text-color1">{icon}</span>
          </div>
          <div>
            <p className="flex items-center gap-2">
              <span className="text-color1">مبلغ :</span>
              <span className="text-green-600">
                {new Intl.NumberFormat("fa-IR").format(price)}
              </span>
              <span className="text-color1">ریال</span>
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col items-center justify-between w-1/3 h-auto p-2 bg-red-300 rounded-lg cursor-pointer">
              
              <button
                onClick={() => navigate("/deposit" , { state: id })}
              >
                <span>
                  <img
                    src="/img/money.png"
                    width="35px"
                    alt="money"
                  />
                </span>
                <span className="text-red-800 text-sm mt-2">برداشت</span>
                </button> 
              
            </div>
            <div className="flex flex-col items-center justify-between w-1/3 h-auto p-2 bg-green-300 rounded-lg cursor-pointer">
              <span>
                <img
                  src="/img/reports.png"
                  width="35px"
                  alt="money"
                />
              </span>
              <span className="text-green-800 text-sm mt-2">گزارشات</span>
            </div>
            <div className="flex flex-col items-center justify-between w-1/3 h-auto p-2 bg-blue-300 rounded-lg cursor-pointer">
              <button
                onClick={() => navigate("/receive-gold" , { state: id })}
              >
                <span>
                  <img
                    src="/img/convert.png"
                    width="35px"
                    alt="money"
                  />
                </span>
                <span className="text-blue-800 text-sm mt-2">تبدیل</span>
              </button>
            </div>
          </div>
        </div>
      
    </div>
  );
}
