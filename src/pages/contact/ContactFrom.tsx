
const ContactFrom = () => {
  return (
    <div>
      <div className=" relative z-10 flex items-center justify-center h-full">
        <div className="w-full max-w-5xl  space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
          <h1 className="text-3xl font-semibold">One step way From us!!</h1>
          <form action="#" className="space-y-6">
            <div className="space-y-2 w-full text-sm text-zinc-700 dark:text-zinc-300">
              <label htmlFor="username" className="block font-medium">
                Name
              </label>
              <input
                className="flex h-16 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700 placeholder:text-start"
                id="name"
                placeholder="Enter name"
                name="name"
                type="text"
              />
            </div>
            <div className="space-y-2 w-full text-sm text-zinc-700 dark:text-zinc-300">
              <label htmlFor="email" className="block font-medium">
                Email Address
              </label>
              <input
                className="flex h-16 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                id="email"
                placeholder="Enter email address"
                name="email"
                type="email"
              />
            </div>

            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <label htmlFor="address" className="block font-medium">
                Address
              </label>
              <textarea
                className="flex h-24 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                id="address"
                placeholder="Enter address"
                name="address"
              />
            </div>

            <button className="w-full rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-[#4d1b14] dark:bg-sky-700">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
