import { useState } from "react";
import BoxDashboard from "../components/boxDashboard";
import { TfiWallet } from "react-icons/tfi";
import { HiOutlineWallet } from "react-icons/hi2";
import { TbCurrencyIranianRial } from "react-icons/tb";
import { CiMoneyCheck1 } from "react-icons/ci";
import { RiVipFill } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa6";
import { TbBrandTether } from "react-icons/tb";
import { FaCoins } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { AiFillGold } from "react-icons/ai";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { LuEuro } from "react-icons/lu";
import { SiBit } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { MdOutlineCurrencyExchange } from "react-icons/md";


let WalletRiyal = [
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
];

let cryptoWallets = [
    
    
    {
      id: 6,
      icon: <FaRegCreditCard size="24px" />,
      title: "کیف پول کارت",
      price: 1800000,
    },
    {
      id: 7,
      icon: <FaMoneyBill1Wave size="24px" />,
      title: " کیف پول درهم ",
      price: 1100000,
    },
    {
      id: 8,
      icon: <PiCurrencyDollarSimpleFill size="24px" />,
      title: " کیف پول دلار ",
      price: 1100000,
    },
    {
      id: 8,
      icon: <LuEuro size="24px" />,
      title: " کیف پول یورو ",
      price: 1100000,
    },
]
let cryptoAssets = [
  {
    id: 9,
    icon: <TbBrandTether size="24px" />,
    title: "تتر",
    price: 100000,
    unit: "USDT",
  },
  {
    id: 10,
    icon: <MdOutlineCurrencyExchange size="24px" />,
    title: "رمز ارز",
    price: 300000,
    unit: "(BTC)",
  },
  {
    id: 11,
    icon: <FaEthereum size="24px" />,
    title: "ETH",
    price: 300000,
    unit: "(BTC)",
  },
  {
    id: 12,
    icon: <SiBit size="24px" />,
    title: "Bitcoin",
    price: 300000,
    unit: "(BTC)",
  },
  
];


let goldWallets = [
  {
    id: 13,
    icon: <AiFillGold size="24px" />,
    title: "طلا",
    price: 300000,
    unit: "(BTC)",
  },
  {
    id: 14,
    icon: <FaCoins size="24px" />,
    title: "سکه",
    price: 300000,
    unit: "(BTC)",
  }
];

let regularWallet =[
  {
    id: 1,
    icon: <TfiWallet size="24px" />,
    title: "موجودی کیف پول",
    price: 100000,
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("walletBalance");

  return (
    <div className="w-full">
      <div className="w-[95%] md:w-[80%] mx-auto flex items-center justify-around border border-1 p-3 rounded-lg bg-gray-200">
        <span
          className={`text-color1 rounded-lg py-2 text-[12px] md:text-sm  text-center w-1/5 font-semibold cursor-pointer ${
            activeTab === "walletBalance" ? "bg-green-400 text-color3" : ""
          }`}
          onClick={() => setActiveTab("walletBalance")}
        >
          موجودی کیف ریال
        </span>
        <span
          className={`text-color1 rounded-lg py-2 text-[12px] md:text-sm  text-center w-1/5 font-semibold cursor-pointer ${
            activeTab === "cryptoWallets" ? "bg-green-400 text-color3" : ""
          }`}
          onClick={() => setActiveTab("cryptoWallets")}
        >
          موجودی کیف های ارزی
        </span>
        <span
          className={`text-color1 rounded-lg py-2 text-[12px] md:text-sm  text-center w-1/5 font-semibold cursor-pointer ${
            activeTab === "cryptoAssets" ? "bg-green-400 text-color3" : ""
          }`}
          onClick={() => setActiveTab("cryptoAssets")}
        >
          موجودی کیف های رمز ارزی
        </span>
        <span
          className={`text-color1 rounded-lg py-2 text-[12px] md:text-sm  text-center w-1/5 font-semibold cursor-pointer ${
            activeTab === "goldWallets" ? "bg-green-400 text-color3" : ""
          }`}
          onClick={() => setActiveTab("goldWallets")}
        >
          موجودی کیف های طلا
        </span>
        <span
          className={`text-color1 rounded-lg py-2 text-[12px] md:text-sm  text-center w-1/5 font-semibold cursor-pointer ${
            activeTab === "regularWallet" ? "bg-green-400 text-color3" : ""
          }`}
          onClick={() => setActiveTab("regularWallet")}
        >
          موجودی کیف پول
        </span>
      </div>
      <div className="mt-10 m-auto w-[98%] md:w-[79%]">
        {activeTab === "walletBalance" && (
          <div className="flex gap-5 items-center justify-center flex-wrap">
            {WalletRiyal.map((item) => (
              <BoxDashboard
                key={item.id}
                icon={item.icon}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        )}
        {activeTab === "cryptoWallets" && (
          <div className="flex gap-5 items-center justify-center flex-wrap">
            {cryptoWallets.map((item) => (
              <BoxDashboard
                key={item.id}
                icon={item.icon}
                title={item.title}
                price={item.price}
                id = {item.id}
              />
            ))}
          </div>
        )}
         {activeTab === "cryptoAssets" && (
          <div className="flex gap-5 items-center justify-center flex-wrap">
            {cryptoAssets.map((item) => (
              <BoxDashboard
                key={item.id}
                icon={item.icon}
                title={item.title}
                price={item.price}
                id = {item.id}
              />
            ))}
          </div>
        )}
         {activeTab === "goldWallets" && (
          <div className="flex gap-5 items-center justify-center flex-wrap">
            {goldWallets.map((item) => (
              <BoxDashboard
                key={item.id}
                icon={item.icon}
                title={item.title}
                price={item.price}
                id = {item.id}
              />
            ))}
          </div>
        )}
         {activeTab === "regularWallet" && (
          <div className="flex gap-5 items-center justify-center flex-wrap">
            {regularWallet.map((item) => (
              <BoxDashboard
                key={item.id}
                icon={item.icon}
                title={item.title}
                price={item.price}
                id = {item.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
