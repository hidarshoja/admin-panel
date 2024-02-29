import { useState, useEffect } from "react";
import axios from "axios";

export default function RegisterUsers() {
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
      user: "علی شجاع",
      data: "1402/10/12",
     
      
      viaNetwork: 123456,
    
      Wage: 12345,
      state: "رد شده",
    },
    {
      id: 2,
      data: "1402/12/12",
      time: "10:13:56",
      price: 1234900,
      walet: "طلا",
      user: "حیدر شجاع",
      state: "تعریف شده",
      Wage: 12345,
      viaNetwork: 123456,
    },
    {
      id: 3,
      data: "1402/11/12",
      time: "20:23:56",
      price: 1234900,
      walet: "طلا",
      user: "علی شجاع",
      state: "در صف",
      Wage: 12345,
      viaNetwork: 123456,
    },
    // More people...
  ];
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="block text-gray-700 text-lg font-bold mb-2 py-4 ">
          کاربران تعریف شده
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
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      نام کاربر
                    </th>
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
                      آیدی کاربر
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
                  {people.map((person) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.user}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.data}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        {person.viaNetwork}
                      </td>
                    
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                        <span
                          className={`whitespace-nowrap px-2 py-[2px] rounded-md  text-sm text-gray-100 text-center ${getColorClass(
                            person.state
                          )}`}
                        >
                          {person.state}
                        </span>
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

function getColorClass(state) {
  switch (state) {
    case "در صف":
      return "bg-yellow-600";
    case "تعریف شده":
      return "bg-green-600";
    case "رد شده":
      return "bg-red-600";
    default:
      return "";
  }
}
