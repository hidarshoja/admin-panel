import  { useEffect } from "react";
import { TbBrandTether } from "react-icons/tb";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { TbCurrencyIranianRial } from "react-icons/tb";
import { GiGoldBar } from "react-icons/gi";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

export default function BoxDashbordTwo() {
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
      id: 7,
      icon: <TbBrandTether size="24px" />,
      title: "تتر",
      price: 100000,
      unit: "USDT",
    },
    {
      id: 8,
      icon: <BsCurrencyBitcoin size="24px" />,
      title: "رمز ارز",
      price: 300000,
      unit: "(BTC)",
    },
    {
      id: 9,
      icon: <TbCurrencyIranianRial size="24px" />,
      title: " ریالی",
      price: 180000,
      unit: "ریال",
    },
    {
      id: 10,
      icon: <GiGoldBar size="24px" />,
      title: " طلا",
      price: 5,
      unit: "گرم",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-5 flex-wrap">
      {BoxDashboardItem.map((item) => (
        <div
          key={item.id}
          className="w-full flex flex-col shadow-xl  justify-between p-4 md:w-1/3 h-[250px] rounded-lg bg-gray-200"
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
              <span className="text-color1">{item.unit}</span>
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col items-center justify-between w-1/3 h-auto p-2 bg-red-300 rounded-lg cursor-pointer">
              <button onClick={() => navigate("/deposit", { state: item.id })}>
                <span>
                  <img
                    src="../../public/img/money.png"
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
                  src="../../public/img/reports.png"
                  width="35px"
                  alt="money"
                />
              </span>
              <span className="text-green-800 text-sm mt-2">گزارشات</span>
            </div>
            <div className="flex flex-col items-center justify-between w-1/3 h-auto p-2 bg-blue-300 rounded-lg cursor-pointer">
            <button
                onClick={() => navigate("/receive-gold", { state: item.id })}>
              <span>
                <img
                  src="../../public/img/convert.png"
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
