import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TabsComponent from "../components/TabsComponent";
import axios from "axios";
import { useNavigate  , useLocation } from "react-router-dom";

export default function Harvest() {
  const [value, setValue] = useState(new Date());
  const [value2, setValue2] = useState(new Date());
  const navigate = useNavigate();
  const location = useLocation();
  const person = location.state;



  const [checkboxes, setCheckboxes] = useState({
    pos: false,
    درگاه: false,
    حساب: false,
    چک: false,
    کارت: false,
    Vip: false,
    USDT: false,
    Bitcoin: false,
    Eth: false,
    درهم: false,
    "حواله دلار": false,
    "حواله یورو": false,
    "طلای آب شده": false,
    سکه: false,
  });

  let trueKeys =Object.keys(checkboxes).filter(key => checkboxes[key]);
  const handleCheckboxChange = (name) => {
    setCheckboxes({
      ...checkboxes,
      [name]: !checkboxes[name],
    });
  };




  const handleClick = async () => {
    try {
      const formData = {
        name: document.getElementById("name").value,
        lastName: document.getElementById("lastName").value,
        customer: document.getElementById("customer").value,
        mobile: document.getElementById("Mobile").value,
        code: document.getElementById("code").value,
        terminalID: document.getElementById("terminalID").value,
        birthDate: value2, // مقدار DatePicker برای تاریخ تولد
        bankName: document.getElementsByName("payment_method")[0].value, // مقدار select برای نام بانک
        joinDate: value, // مقدار DatePicker برای تاریخ عضویت
        checkboxes: trueKeys // مقادیر چک باکس‌ها
      };
  
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
  
      console.log("Response:", response.data);
      navigate("/registerUsers");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="w-[95%] md:w-[80%] mx-auto">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="block text-gray-700 text-lg font-bold mb-2 py-4 ">
            تعریف مشتری{" "}
          </h2>
          <div className="flex flex-col gap-2 md:flex-row items-center justify-between">
            <div className="mb-4 w-full md:w-1/3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                نام
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="نام خود را وارد کنید"
                value={person?.name}
              />
            </div>
            <div className="mb-4 w-full md:w-1/3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                نام خانوادگی
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="نام خانوادگی خود را وارد کنید"
                value={person?.lastName}
              />
            </div>
            <div className="mb-4 w-full md:w-1/3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="customer"
              >
                نام پرفراژ
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="customer"
                type="text"
                placeholder="نام مشتری"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row items-center justify-between">
            <div className="mb-4 w-full md:w-1/3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Mobile"
              >
                شماره موبایل
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Mobile"
                type="text"
                placeholder="شماره تماس خود را وارد کنید"
              />
            </div>
            <div className="mb-4 w-full md:w-1/3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="code"
              >
                کدملی
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="code"
                type="text"
                placeholder="کد ملی کاربر"
              />
            </div>
            <div className="mb-4 w-full md:w-1/3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="terminalID"
              >
                تعریف terminalID
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="terminalID"
                type="text"
                placeholder="ترمینال آیدی"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row items-center md:items-center justify-between">
            <div>
              <span className="block text-gray-700 text-sm font-bold mb-2">
                تاریخ تولد{" "}
              </span>
              <DatePicker
                calendar={persian}
                locale={persian_fa}
                value={value2}
                onChange={setValue2}
                calendarPosition="bottom-right"
                inputClass="custom-input"
              />
            </div>
            <div>
            <span className="block text-gray-700 text-sm font-bold mb-2">
                نام بانک
              </span>
              <select
                name="payment_method"
                className="border border-1 border-gray-300 px-3 py-1.5 rounded-lg w-44 outline-none"
              >
                <option value="ملی">ملی</option>
                <option value="کشاورزی">کشاورزی</option>
                <option value="گردشگری">گردشگری</option>
                <option value="ملت">ملت</option>
                <option value="رفاه">رفاه</option>
                <option value="تجارت">تجارت</option>
                <option value="سینا">سینا</option>
                <option value="آینده">آینده</option>
                <option value="پست بانک">پست بانک</option>
                <option value="سپه">سپه</option>
                <option value="پاسارگاد">پاسارگاد</option>
              </select>
            </div>
            <div>
              <span className="block text-gray-700 text-sm font-bold mb-2">
                تاریخ عضویت{" "}
              </span>
              <DatePicker
                calendar={persian}
                locale={persian_fa}
                value={value}
                onChange={setValue}
                calendarPosition="bottom-right"
                inputClass="custom-input"
              />
            </div>
          </div>
          <div>
            <h2 className="block text-gray-700 text-lg font-bold mb-2 py-4 mt-8">
              فرم با چک باکس‌ها
            </h2>
            <div className="flex items-center justify-start flex-wrap gap-x-16 gap-y-5">
              {Object.entries(checkboxes).map(([name, checked]) => (
                <div
                  key={name}
                  className="flex gap-2 items-center justify-center"
                >
                  <input
                    type="checkbox"
                    id={name}
                    name={name}
                    checked={checked}
                    onChange={() => handleCheckboxChange(name)}
                  />
                  
                  <label htmlFor={name}>{name}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
            
             {trueKeys.length > 0 &&  <TabsComponent trueKeys ={trueKeys}/>}
            <div className="flex gap-2 mt-5">
              <button className="flex items-center justify-center w-1/2 bg-red-500 rounded-lg py-1 text-color3 hover:bg-red-700">
                انصراف
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="flex items-center justify-center w-full bg-green-500 rounded-lg py-1 text-color3  hover:bg-green-700"
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
