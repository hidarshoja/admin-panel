import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import ChartComponent from "../components/ChartComponent";
import ChartComponent2 from "../components/ChartComponent2";

const people = [
  {
    id: 1,
    data: "1402/10/12",
    time: "18:13:56",
    name: "علی شجاع",
    shaba: "1234",
    walet: "23333",
    user2: "علی رضایی",
    price: 123490000,
    dic: "گزارش  رقابت‌های هفته چهاردهم لیگ برتر امارات امروز پیگیری می‌شود که در یکی از آنها، تیم الوحده با بهره مندی از احمد نوراللهی در فهرست بازیکنانش، از ساعت 17 امروز در ورزشگاه خالد بن محمد به مصاف البطائح رده نهمی خواهد رفت.",
    code: 12345,
    wallet: "33333333333",
  },
  {
    id: 2,
    data: "1402/12/12",
    time: "10:13:56",
    name: "حیدر شجاع",
    shaba: "1234",
    walet: "3333",
    user2: "حسین رضایی",
    price: 1234900,
    dic: "نوراللهی که طی چهار هفته گذشته لیگ برتر امارات همواره در گل‌های الوحده موثر بوده و در سه بازی پیاپی پاس گل داده و در دیدار اخیرشان هم گلزنی کرده، امیدوار است امروز هم به این روند عالی ادامه بدهد و مقابل البطائح گلزنی کند.",
    code: 12345,
    wallet: "444",
  },
  {
    id: 3,
    data: "1402/11/12",
    time: "20:23:56",
    name: "علی شجاع",
    shaba: "1234",
    walet: "555555",
    user2: "سبا رضایی",
    price: 1234900,
    code: 123456,
    dic: "هافبک ایرانی الوحده در تمام 13 مسابقه این فصل لیگ برتر امارات برای الوحده به میدان رفته که توانسته دو گل به ثمر رساند و پنج پاس گل بدهد و سعی دارد امروز هم برابر البطائح عملکرد درخشانی داشته باشد.",
    wallet: "4444",
  },
  // More people...
];

export default function Profile() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPeople, setFilteredPeople] = useState(people);

  const toggleModal = (id) => {
    setSelectedId(id);
    setModalOpen(!modalOpen);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    const filtered = people.filter((person) =>
      person.name.includes(event.target.value.trim())
    );
    setFilteredPeople(filtered);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="block text-gray-700 text-lg font-bold mb-2 py-4 ">
          نگاه آماری
        </h1>
      </div>
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 border border-1 border-gray-400 py-2 px-4 rounded-lg">
        <form className="relative flex flex-1" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">
            جستجو کردن
          </label>
          <MagnifyingGlassIcon
            className="absolute inset-y-0 left-0 h-full w-5 text-gray-400 cursor-pointer"
            aria-hidden="true"
          />
          <input
            id="search-field"
            className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 outline-none sm:text-sm"
            placeholder="جستجو کنید..."
            type="search"
            name="search"
            value={searchValue}
            onChange={handleChange}
            // onKeyDown={handleKeyPress}
          />
        </form>
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
                      نام مشتری
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      ورودی
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      خروجی
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      نام ذینفع
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      کیف پول
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
                      کد رهگیری
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      داخلی از کیف به کیف
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredPeople.map((person, index) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.data}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.time}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.shaba}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.walet}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.user2}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {new Intl.NumberFormat("fa-IR").format(person.price)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        <span
                          onClick={() => toggleModal(person.id)}
                          className="text-blue-500 cursor-pointer"
                        >
                          مشاهده توضیحات
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.code}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.wallet}
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row mt-10">
        <div className="w-full md:w-1/2">
          <ChartComponent />
        </div>
        <div className="w-full md:w-1/2">
          <ChartComponent2 />
        </div>
      </div>
    </div>
  );
}
