
import { useState , useEffect } from "react";
import { Link , Outlet } from "react-router-dom";
import axios from "axios";


const handleStatusColor = (status) => {
  switch (status) {
    case "رد شده":
      return "bg-red-500";
    case "پاسخ داده":
      return "bg-green-500";
    case "در انتظار":
      return "bg-yellow-500";
    default:
      return "bg-gray-300";
  }
};

export default function Support({ users }) {
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

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="block text-gray-700 text-lg font-bold mb-2 py-4 ">
          پشتیبانی
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
                      #
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
                      عنوان سوال
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
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
                      وضعیت
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-4 text-center text-sm font-semibold text-gray-900"
                    >
                      جزییات
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="py-4 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6">
                        {user.id}
                      </td>
                      <td className="px-3 py-4 text-center text-sm font-semibold text-gray-900">
                        {user.user}
                      </td>
                      <td className="px-3 py-4 text-center text-sm font-semibold text-gray-900">
                        {user.question}
                      </td>
                      <td className="px-3 py-4 text-center text-sm font-semibold text-gray-900">
                        {user.date}
                      </td>
                      <td className="px-3 py-4 text-center text-sm font-semibold text-gray-900">
                        {user.time}
                      </td>
                      <td className="px-3 py-4 text-center text-sm font-semibold text-gray-900">
                        <span
                          className={`inline-block px-2 py-1 rounded-lg text-white ${handleStatusColor(
                            user.state
                          )}`}
                        >
                          {user.state}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-center text-sm font-semibold text-gray-900">
                      
                        <Link 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                        to={`/support/chat/${user.id}`}>مشاهده   </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
