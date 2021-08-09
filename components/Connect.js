import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Connect() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/connect', {
      method: 'POST',
      body: JSON.stringify({ name, email, message })
    });
    // Success if status code is 201
    if (res.status === 201) {
      toast(
        "Message has successfully sent – I'll get back to you as soon as I can!",
        {
          type: 'dark',
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined
        }
      );
    } else {
      toast('There was an error in sending your message – please try again!', {
        type: 'error',
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <form className="w-5/6 mx-auto mb-8" onSubmit={handleOnSubmit}>
        <div className="w-full mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="text-sm leading-7 text-gray-600 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white"
                />
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="text-sm leading-7 text-gray-600 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white"
                />
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="text-sm leading-7 text-gray-600 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full h-32 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none resize-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white"
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <button
                type="submit"
                className="flex px-5 py-1.5 mx-auto text-lg text-gray-100 transition duration-200 bg-gray-800 border-0 rounded focus:outline-none hover:bg-black dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
