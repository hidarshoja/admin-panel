import  { useState , useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

export default function Chat({ users }) {
  const { id } = useParams();

 
  const currentUser = users.find(user => user.id === parseInt(id));
  // let users = [
  //   {
  //     id: 1,
  //     user: "علی شجاع",
  //     question: "نحوه خرید طلا چگونه است ؟",
  //     date: "1402/10/11",
  //     time: "20:12:55",
  //     state: "رد شده",
  //   },
  //   {
  //     id: 2,
  //     user: "علی احمدی",
  //     question: "نحوه خرید فروش چگونه است ؟",
  //     date: "1401/12/21",
  //     time: "10:22:05",
  //     state: "پاسخ داده",
  //   },
  //   {
  //     id: 3,
  //     user: "محمود رضایی",
  //     question: "نحوه  ثبت نام چگونه است ؟",
  //     date: "1400/02/11",
  //     time: "12:22:05",
  //     state: "در انتظار",
  //   },
  // ];
  const [message, setMessage] = useState('');

 
  const conversations = [
    {
       messages: ["سلام، چطوری؟"],
       imageUrl: "/img/images.jpg",
       person: "user1"
     },
   {
       messages: ["سلام، خوبم، مرسی. شما؟"],
       imageUrl: "/img/download.jpg",
       person: "user2"
     },
   {
       messages: ["چطور می‌تونم به شما کمک کنم؟"],
       imageUrl: "/img/images.jpg",
       person: "user1"
     },
   {
       messages: ["خوبم، ممنون. شما؟"],
       imageUrl: "/img/download.jpg",
       person: "user2"
     }
 ];


  const handleMessageSend = () => {
    // ارسال داده به آدرس مورد نظر با استفاده از Axios
    axios.post('https://jsonplaceholder.typicode.com/posts', { message })
      .then(response => {
        console.log('پاسخ دریافت شده:', response.data);
      })
      .catch(error => {
        console.error('خطا در ارسال پیام:', error);
        
      });
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/2')
      .then(response => {
        const data = response.data;
        console.log(data);
        // data = people
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div className="relative flex flex-col h-screen bg-green-950 rounded-lg w-full md:w-[60%] mx-auto">
        <h1 className="p-6 text-xl font-semibold text-color3">
          
           گفتگوی دو نفره با {currentUser.user} 
        </h1>
        <div className="flex-1 overflow-y-auto p-6">
        <div className="flex flex-col items-start justify-start">
      {conversations.map((conversation, index) => (
        <div key={index} style={{ width: '100%', display: 'flex', justifyContent: conversation.person === 'user1' ? 'flex-end' : 'flex-start'   }}>
          <div className='flex items-center justify-center gap-3' style={{ maxWidth: '80%', margin: '5px', backgroundColor: conversation.person === 'user1' ? '#DCF8C6' : '#E5E5EA', padding: '10px', borderRadius: '10px', flexDirection : conversation.person === 'user1' ? '' : 'row-reverse' }}>
            {typeof conversation.messages === 'string' ? <p>{conversation.messages}</p> : conversation.messages.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
            <img className='rounded-full w-7 h-7' src={conversation.imageUrl} alt="Image"  />
          </div>
        </div>
      ))}
    </div>
          <div className="flex flex-col gap-4">
         
            <div className=" py-4 absolute bottom-3 w-[90%] left-[4%]">
              <input
                type="text"
                placeholder="پیام خود را ارسال کنید"
                className="w-full rounded-lg border-gray-300 border p-2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}        
              />
              <div className="flex items-end w-full justify-end">
                <button
                onClick={handleMessageSend}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-2 rounded-lg mt-2">
                  ارسال
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
