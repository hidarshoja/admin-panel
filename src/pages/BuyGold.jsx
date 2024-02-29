import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const people = [
  {
    id: 1,
    name: "حیدر شجاع",
    code: "5919950960",
    lastName: "شجاع",
    mobaile: "09159886129",

    state: false,
  },
  {
    id: 2,
    code: "5919960418",
    mobaile: "09159886129",
    name: "حیدر احمدی",

    state: true,
  },
  {
    id: 3,
    code: "06728859432",
    mobaile: "09159886129",
    name: "علی رسولی",
    state: false,
  },
  {
    id: 4,
    name: "میلاد فاضلیان",
    code: "5919950960",
    mobaile: "09159886129",

    state: false,
  },
  {
    id: 5,
    code: "5919960418",
    mobaile: "09159886129",
    name: "مسعود رسولی",

    state: true,
  },
  {
    id: 6,
    code: "06728859432",
    mobaile: "09159886129",
    name: "علی رضایی",

    state: false,
  },
];

export default function BuyGold() {
  const [data, setData] = useState(null); // جهت مقدار تیبل
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [filteredPeople, setFilteredPeople] = useState(people);


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


  const handleChange = (event) => {
    setSearchValue(event.target.value);
    const filtered = people.filter((person) =>
      person.name.includes(event.target.value.trim())



    );
    setFilteredPeople(filtered);
  };

  const handleSubmit = async () => {
    try {
      const postData = filteredPeople.map((person) => ({
        id: person.id,
        name: person.name,
        code: person.code,
        mobaile: person.mobaile,
        state: person.state ? "active" : "inactive", // تبدیل وضعیت به مقدار فعال یا غیرفعال
      }));

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        postData
      );
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
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
                      نام و نام خانوادگی
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
                  {filteredPeople.map((person, index) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.name}
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
            <div className="w-full flex flex-col md:flex-row gap-3 items-center justify-end py-10">
              <button className="w-2/3 md:w-1/6 py-1 bg-red-500 hover:bg-red-800 rounded-lg text-color3">
                انصراف
              </button>
              <button
               onClick={handleSubmit}
              className="w-2/3 md:w-1/6 py-1 bg-green-500 hover:bg-green-800 rounded-lg text-color3">
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
