export default function Connect() {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/connect", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log("Message has been received.");

      if (res.status === 429) {
        alert(
          "Too many requests – please wait 15 more minutes before sending new mail!"
        );
      }

      if (res.status === 200) {
        alert(
          "Message has successfully sent – I'll get back to you as soon as I can!"
        );
        console.log("Message has successfully been sent!");
      }
    });
  }

  return (
    <>
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
                  className="w-full h-32 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none resize-none bg-white-skills dark:text-gray-400 dark:bg-black dark:focus:border-gray-300 dark:border-gray-custom focus:border-black focus:bg-white"
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <button className="flex px-5 py-1.5 mx-auto text-lg text-gray-100 transition duration-200 bg-gray-800 border-0 rounded focus:outline-none hover:bg-black dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white">
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
