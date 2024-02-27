import  { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

import { TfiWallet } from "react-icons/tfi";
import { HiOutlineWallet } from "react-icons/hi2";
import { TbCurrencyIranianRial } from "react-icons/tb";
import { CiMoneyCheck1 } from "react-icons/ci";
import { RiVipFill } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa6";
import axios from "axios";

export default function BoxDashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
   
  let BoxDashboardItem = [
    {
      id: 1,
      icon: <TfiWallet size="24px" />,
      title: "کیف پول ریالی POS",
      price: 100000,
    },
    {
      id: 2,
      icon: <HiOutlineWallet size="24px" />,
      title: "کیف پول درگاه اینترنتی",
      price: 300000,
    },
    {
      id: 3,
      icon: <TbCurrencyIranianRial size="24px" />,
      title: "کیف ریالی حساب",
      price: 180000,
    },
    {
      id: 4,
      icon: <CiMoneyCheck1 size="24px" />,
      title: "کیف ریالی چک",
      price: 500000,
    },
    {
      id: 5,
      icon: <RiVipFill size="24px" />,
      title: "کیف ریالی VIP",
      price: 1100000,
    },
    {
      id: 6,
      icon: <FaRegCreditCard size="24px" />,
      title: "کیف پول کارت",
      price: 1800000,
    },
  ];
  return (
    <div className="flex items-center justify-center gap-5 flex-wrap">
      {BoxDashboardItem.map((item) => (
        <div
          key={item.id}
          className="w-full flex flex-col shadow-xl  justify-between p-4 md:w-[300px] h-[250px] rounded-lg bg-gray-200"
        >
          <div className="flex items-center justify-between">
            <p className="text-color1">{item.title}</p>
            <span className="text-color1">{item.icon}</span>
          </div>
          <div>
            <p className="flex items-center gap-2">
              <span className="text-color1">مبلغ :</span>
              <span className="text-green-600">
                {new Intl.NumberFormat("fa-IR").format(item.price)}
              </span>
              <span className="text-color1">ریال</span>
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col items-center justify-between w-1/3 h-auto p-2 bg-red-300 rounded-lg cursor-pointer">
              
              <button
                onClick={() => navigate("/deposit", { state: item.id })}
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
                onClick={() => navigate("/receive-gold", { state: item.id })}
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
      ))}
    </div>
  );
}
