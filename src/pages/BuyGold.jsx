import React, { useState, useEffect, Fragment } from "react";
import { Switch } from "@headlessui/react";

import axios from "axios";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BuyGold() {
  const [data, setData] = useState(null); // جهت مقدار تیبل

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
      wallet: [
        {
          pos: false,
          درگاه: true,
          حساب: false,
          چک: false,
          کارت: true,
          Vip: false,
          USDT: false,
          Bitcoin: false,
          Eth: true,
          درهم: false,
          "حواله دلار": false,
          "حواله یورو": true,
          "طلای آب شده": false,
          سکه: true,
        }
      ],
      state: false,
    },
    {
      id: 2,
      code: "5919960418",
      mobaile: "09159886129",
      name: "حیدر ",
      lastName: "احمدی",
      state: true,
      wallet: [
        {
          pos: true,
          درگاه: true,
          حساب: false,
          چک: true,
          کارت: false,
          Vip: false,
          USDT: true,
          Bitcoin: false,
          Eth: true,
          درهم: false,
          "حواله دلار": false,
          "حواله یورو": false,
          "طلای آب شده": true,
          سکه: false,
        }
      ],
    },
    {
      id: 3,
      code: "06728859432",
      mobaile: "09159886129",
      name: "علی ",
      lastName: "امیری",
      state: false,
      wallet: [
        {
          pos: false,
          درگاه: true,
          حساب: false,
          چک: true,
          کارت: false,
          Vip: false,
          USDT: false,
          Bitcoin: false,
          Eth: true,
          درهم: false,
          "حواله دلار": false,
          "حواله یورو": false,
          "طلای آب شده": false,
          سکه: false,
        }
      ],
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
                        {person.wallet.length > 0 && (
                          <select
                            name={`wallet-${person.id}`}
                            id={`wallet-${person.id}`}
                            className="border border-1 border-gray-400 rounded-lg w-24 outline-none"
                          >
                            {person.wallet[0] &&
                              Object.entries(person.wallet[0]).map(
                                ([key, value]) =>
                                  value && (
                                    <option key={key} value={key}>
                                      {key}
                                    </option>
                                  )
                              )}
                          </select>
                        )}
                      </td>
                      <td
                        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center"
                        dir="ltr"
                      >
                        <Switch
                          checked={statuses[index]}
                          onChange={() => handleSwitchChange(index)}
                          className={classNames(
                            statuses[index] ? "bg-indigo-600" : "bg-gray-200",
                            "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                          )}
                        >
                          <span className="sr-only">استفاده از تنظیمات</span>
                          <span
                            className={classNames(
                              statuses[index]
                                ? "translate-x-5"
                                : "translate-x-0",
                              "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                            )}
                          >
                            <span
                              className={classNames(
                                statuses[index]
                                  ? "opacity-0 duration-100 ease-out"
                                  : "opacity-100 duration-200 ease-in",
                                "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                              )}
                              aria-hidden="true"
                            >
                              <svg
                                className="h-3 w-3 text-gray-400"
                                fill="none"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span
                              className={classNames(
                                statuses[index]
                                  ? "opacity-100 duration-200 ease-in"
                                  : "opacity-0 duration-100 ease-out",
                                "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                              )}
                              aria-hidden="true"
                            >
                              <svg
                                className="h-3 w-3 text-indigo-600"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                              >
                                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                              </svg>
                            </span>
                          </span>
                        </Switch>
                       
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
