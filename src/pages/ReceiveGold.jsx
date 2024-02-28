import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function ReceiveGold() {
  const [data, setData] = useState(null); // جهت مقدار تیبل
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const location = useLocation();
  const state = location.state;
  console.log(state);
  let BoxDashboardItem = [
    {
      id: 1,

      title: "کیف پول ریالی POS",
      price: 100000,
    },
    {
      id: 2,

      title: "کیف پول درگاه اینترنتی",
      price: 300000,
    },
    {
      id: 3,

      title: "کیف ریالی حساب",
      price: 180000,
    },
    {
      id: 4,

      title: "کیف ریالی چک",
      price: 500000,
    },
    {
      id: 5,

      title: "کیف ریالی VIP",
      price: 1100000,
    },
    {
      id: 6,

      title: "کیف پول کارت",
      price: 1800000,
    },
    {
      id: 7,

      title: "تتر",
      price: 100000,
      unit: "USDT",
    },
    {
      id: 8,

      title: "رمز ارز",
      price: 300000,
      unit: "(BTC)",
    },
    {
      id: 9,

      title: " ریالی",
      price: 180000,
      unit: "ریال",
    },
    {
      id: 10,

      title: " طلا",
      price: 5,
      unit: "گرم",
    },
  ];
  console.log(state);

  const toggleModalBtn = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTextareaValue("");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(data);

  const people = [
    {
      id: 1,
      data: "1402/10/12",
      time: "18:13:56",
      user: "علی شجاع",
      shaba: "IR394055955455860",
      walet: "ریال",
      user2: "علی رضایی",
      price: 123490000,
      dic: "گزارش  رقابت‌های هفته چهاردهم لیگ برتر امارات امروز پیگیری می‌شود که در یکی از آنها، تیم الوحده با بهره مندی از احمد نوراللهی در فهرست بازیکنانش، از ساعت 17 امروز در ورزشگاه خالد بن محمد به مصاف البطائح رده نهمی خواهد رفت.",
      code: 12345,
      wallet: "در انتظار",
      state: false,
      selected: ["ابطال", "درصف بانک", "انجام شده"],
    },
    {
      id: 2,
      data: "1402/12/12",
      time: "10:13:56",
      user: "حیدر شجاع",
      shaba: "IR394055955455860",
      walet: "طلا",
      user2: "حسین رضایی",
      price: 1234900,
      dic: "نوراللهی که طی چهار هفته گذشته لیگ برتر امارات همواره در گل‌های الوحده موثر بوده و در سه بازی پیاپی پاس گل داده و در دیدار اخیرشان هم گلزنی کرده، امیدوار است امروز هم به این روند عالی ادامه بدهد و مقابل البطائح گلزنی کند.",
      code: 12345,
      wallet: "ابطال",
      state: false,
      selected: ["ابطال", "درصف بانک", "انجام شده"],
    },
    {
      id: 3,
      data: "1402/11/12",
      time: "20:23:56",
      user: "علی شجاع",
      shaba: "IR394055955455860",
      walet: "بیت کویین",
      user2: "سبا رضایی",
      price: 1234900,
      code: 123456,
      dic: "هافبک ایرانی الوحده در تمام 13 مسابقه این فصل لیگ برتر امارات برای الوحده به میدان رفته که توانسته دو گل به ثمر رساند و پنج پاس گل بدهد و سعی دارد امروز هم برابر البطائح عملکرد درخشانی داشته باشد.",
      wallet: "انجام شده",
      state: true,
      selected: ["ابطال", "درصف بانک", "انجام شده"],
    },
    // More people...
  ];

  const toggleModal = (id) => {
    setSelectedId(id);
    setModalOpen(!modalOpen);
  };

  const selectedItem = BoxDashboardItem.find((item) => item.id === state);

  const title = selectedItem ? selectedItem.title : "";

  const handleChangeNumber = (event) => {
    const value = event.target.value;
    setInputValue(
      value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="block text-gray-700 text-lg font-bold mb-2 py-4 ">
          در خواست های تبدیل {title}
        </h1>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-4 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      تاریخ
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      ساعت
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      کیف پول مقصد
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      کیف پول کسر شده
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      مبلغ
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      توضیحات
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      نتیجه
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person, index) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center w-36">
                        {person.data}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.time}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                       
                        <select
                          name="payment_method"
                          className="border border-1 border-gray-300 rounded-lg w-24 outline-none"
                        >
                          <option value="pos">POS</option>
                          <option value="درگاه">درگاه</option>
                          <option value="حساب">حساب</option>
                          <option value="چک">چک</option>
                          <option value="کارت">کارت</option>
                          <option value="Vip">Vip</option>
                          <option value="USDT">USDT</option>
                          <option value="Bitcoin">Bitcoin</option>
                          <option value="Eth">Eth</option>
                          <option value="درهم">درهم</option>
                          <option value="حواله دلار">حواله دلار</option>
                          <option value="حواله یورو">حواله یورو</option>
                          <option value="طلای آب شده">طلای آب شده</option>
                          <option value="سکه">سکه</option>
                        </select>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.walet}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        <input
                          type="text"
                          className="py-[2px] border border-1 border-gray-300 outline-none rounded-md w-32 px-1"
                          value={inputValue}
                          onChange={handleChangeNumber}
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        <span
                          onClick={toggleModalBtn}
                          className="text-blue-500 cursor-pointer"
                        >
                          توضیحات
                        </span>
                      </td>
                      <td className="px-3 py-4 text-center text-sm font-semibold text-gray-900">
                        <select className="py-[2px] border border-1 border-gray-300 outline-none rounded-md w-24 px-1">
                          {person.selected.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </td>

                      {modalOpen && selectedId === person.id && (
                        <div className="fixed inset-0 bg-black bg-opacity-50  flex justify-center items-center">
                          <div className="bg-white py-4 px-4 rounded-lg w-3/4 md:w-2/4 mx-auto">
                            <div className="flex items-center justify-end w-full pb-5">
                              <button
                                onClick={() => toggleModal(person.id)}
                                className="w-6 h-6 cursor-pointer rounded-full bg-slate-800 text-white flex items-center justify-center"
                              >
                                x
                              </button>
                            </div>
                            <p className="py-8">{person.dic}</p>
                          </div>
                        </div>
                      )}
                      {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50  flex justify-center items-center">
                          <div className="bg-white py-4 px-4 rounded-lg w-3/4 md:w-2/4 mx-auto">
                            <div className="flex items-center justify-end w-full pb-5">
                              <div className="flex items-center justify-between w-full">
                                <h3 className="text-color1 text-base font-semibold">
                                  توضیحات وارد کنید
                                </h3>
                                <span
                                  className="close cursor-pointer text-xl"
                                  onClick={closeModal}
                                >
                                  &times;
                                </span>
                              </div>
                            </div>
                            <textarea
                              value={textareaValue}
                              onChange={handleChange}
                              className="w-full min-h-28 border border-1 border-gray-300 rounded-lg outline-none p-2 text-sm"
                              placeholder="توضیحات خود را وارد کنید ..."
                            ></textarea>
                            <div className="flex items-center justify-end">
                              <button className=" bg-green-500 py-1 px-3 mt-5 rounded-lg text-sm text-color3">
                                ذخیره و ارسال
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-3 items-center justify-end py-10">
        <button className="w-2/3 md:w-1/6 py-1 bg-red-500 hover:bg-red-800 rounded-lg text-color3">
          انصراف
        </button>
        <button className="w-2/3 md:w-1/6 py-1 bg-green-500 hover:bg-green-800 rounded-lg text-color3">
          ثبت
        </button>
      </div>
    </div>
  );
}
