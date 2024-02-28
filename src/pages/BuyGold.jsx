import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BuyGold() {
  const [data, setData] = useState(null); // جهت مقدار تیبل
  const navigate = useNavigate();
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

  const people = [
    {
      id: 1,
      name: "علی ",
      code: "5919950960",
      lastName: "شجاع",
      mobaile: "09159886129",

      state: false,
    },
    {
      id: 2,
      code: "5919960418",
      mobaile: "09159886129",
      name: "حیدر ",
      lastName: "احمدی",
      state: true,
    },
    {
      id: 3,
      code: "06728859432",
      mobaile: "09159886129",
      name: "علی ",
      lastName: "امیری",
      state: false,
    },
    // More people...
  ];
  const [statuses, setStatuses] = useState(people.map((obj) => obj.state));

  const handleSwitchChange = (index) => {
    const newStatuses = [...statuses];
    newStatuses[index] = !newStatuses[index];
    setStatuses(newStatuses);

    console.log(
      `وضعیت جدید برای ابجکت با آیدی ${people[index].id}:`,
      newStatuses[index]
    );
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="block text-gray-700 text-lg font-bold mb-2 py-4 ">
          سطوح دسترسی
        </h1>
        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 border border-1 border-gray-400 py-2 px-4 rounded-lg">
          <form className="relative flex flex-1" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">
              جستجو کردن
            </label>
            <MagnifyingGlassIcon
              className=" absolute inset-y-0 left-0 h-full w-5 text-gray-400 cursor-pointer"
              aria-hidden="true"
            />
            <input
              id="search-field"
              className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 outline-none sm:text-sm"
              placeholder="جستجو کنید..."
              type="search"
              name="search"
            />
          </form>
        </div>
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
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      uesr_id
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      نام
                    </th>

                    <th
                      scope="col"
                      className="py-4 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      نام خانوادگی
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      کدملی
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      شماره موبایل
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      لیست کیف پول ها
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      وضعیت
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person, index) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.lastName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.code}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.mobaile}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                          onClick={() =>
                            navigate("/harvest", { state: person })
                          }
                        >
                          مشاهده{" "}
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        <select className="bg-white border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500">
                          <option value="active">فعال</option>
                          <option value="inactive">غیرفعال</option>
                          <option value="show">نمایش</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
