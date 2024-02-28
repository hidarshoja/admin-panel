import React, { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const separateDigits = (value) => {
  // حذف هر چیز غیر از ارقام
  const numericValue = value.replace(/\D/g, "");
  // جدا کردن اعداد به صورت 4 رقمی با خط فاصله
  const formattedValue = numericValue.replace(/(\d{4})(?=\d)/g, "$1-");
  return formattedValue;
};

export default function TabsComponent({ trueKeys }) {
  const [activeTab, setActiveTab] = useState(trueKeys[0]);
  const [enabled, setEnabled] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    // محدود کردن طول به 16 رقم
    if (event.target.value.length <= 19) {
      setValue(separateDigits(event.target.value));
    }
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <h2 className="block text-gray-700 text-lg font-bold mt-2 py-4 ">
        تب‌ها
      </h2>
      <div className="flex flex-col md:flex-row gap-3 border border-1 border-gray-200 p-2 rounded-sm shadow-md">
        <div className="tab-list flex md:flex-col flex-wrap w-full md:w-2/6 border border-1 border-gray-200 p-2 rounded-sm shadow-sm">
          {trueKeys?.map((name) => (
            <div
              key={name}
              className={`cursor-pointer p-2 rounded-md tab ${
                activeTab === name ? "active" : ""
              }`}
              onClick={() => handleTabClick(name)}
            >
              {name}
            </div>
          ))}
        </div>
        <div className="tab-content w-full md:w-4/6 border border-1 border-gray-200 p-5 rounded-sm shadow-md">
          <div>
            <h3 className="block text-gray-700 text-lg font-bold py-4">{`محتوای تب ${activeTab}`}</h3>

            <div>
              <div className="flex flex-col gap-2 md:flex-row items-center justify-between mt-3">
                <div className="mb-4 w-full md:w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="Percent"
                  >
                    درصد cashin
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Percent"
                    type="number"
                    placeholder=" به درصد وارد کنید"
                  />
                </div>
                <div className="mb-4 w-full md:w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="Wage"
                  >
                    کار مزد cashout
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Wage"
                    type="number"
                    placeholder="کارمزد را وارد کنید"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 md:flex-row items-center justify-between mt-3">
                <div className="mb-4 w-full md:w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="Percent"
                  >
                    هزینه شبکه cashin
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Percent"
                    type="number"
                    placeholder=" به درصد وارد کنید"
                  />
                </div>
                <div className="mb-4 w-full md:w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="Wage"
                  >
                    هزینه شبکه cashout
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Wage"
                    type="number"
                    placeholder="کارمزد را به درصد کنید"
                  />
                </div>
              </div>
              <div
                dir="ltr"
                className="flex  flex-col-reverse md:flex-row  items-center gap-3 justify-end mt-2"
              >
                <div className="mb-4 w-full md:w-1/2" dir="rtl">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="customer"
                  >
                    مشتری
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="customer"
                    type="text"
                    placeholder="نام مشتری"
                  />
                </div>
              </div>
              <div>
                <div
                  className="w-full flex-row-reverse  mt-5 flex items-center gap-3 justify-between"
                  dir="ltr"
                >
                  <div className="flex flex-col gap-2 md:w-1/2 items-end justify-between">
                    <h3 className=" text-gray-700 text-sm font-bold">
                      کیف پول به کیف پول
                    </h3>
                    <div>
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={classNames(
                          enabled ? "bg-indigo-600" : "bg-gray-200",
                          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                        )}
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                          className={classNames(
                            enabled ? "translate-x-5" : "translate-x-0",
                            "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                          )}
                        >
                          <span
                            className={classNames(
                              enabled
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
                              enabled
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
                    </div>
                  </div>
                { enabled && 
                  <div dir="rtl">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="customer"
                  >
                    کارمزد کیف به کیف
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="customer"
                    type="number"
                    placeholder="کارمزد کیف به کیف"
                  />
                  </div>
                }
                </div>
              </div>
              <div
                className={`harvest ${
                  ["bitcoin", "usdt", "vip", "طلای آب شده", "سکه"].includes(
                    activeTab
                  )
                    ? "hidden"
                    : ""
                }`}
              >
                <div className="mb-4 mt-5 w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="Percent"
                  >
                    سقف برداشت به ریال(روزانه)
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Percent"
                    type="number"
                    placeholder="سقف برداشت را وارد کنید"
                  />
                </div>
              </div>
              <div>
                <div className="mb-4 mt-5 w-full">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="Percent"
                  >
                    شماره کارت (اختیاری)
                  </label>

                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={value}
                    onChange={handleChange}
                    maxLength={19} // حداکثر طول مجاز (4 رقم + 3 فاصله)
                    dir="ltr"
                  />
                </div>
                <div className="flex gap-2 mt-5 items-center justify-end">
                  <button className="flex items-center justify-center w-1/2 md:w-1/4 bg-green-500 rounded-lg py-2 text-color3 hover:bg-green-700">
                    ذخیره
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
