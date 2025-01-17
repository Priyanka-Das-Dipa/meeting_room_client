import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/loginPage.jpeg')" }}
    >
      {/* Black opacity overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered form */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="w-full max-w-xl space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
          <h1 className="text-3xl font-semibold">Sign Up</h1>
          <form action="#" className="space-y-6">
            <div className="flex gap-2 justify-between md:flex-row flex-col">
              <div className="space-y-2 w-full text-sm text-zinc-700 dark:text-zinc-300">
                <label htmlFor="username" className="block font-medium">
                  Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
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
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                  id="email"
                  placeholder="Enter email address"
                  name="email"
                  type="email"
                />
              </div>
            </div>
            <div className="flex gap-2 justify-between md:flex-row flex-col">
              <div className="space-y-2 w-full text-sm text-zinc-700 dark:text-zinc-300">
                <label htmlFor="password_2" className="block font-medium">
                  Password
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                  id="password_2"
                  placeholder="Enter password"
                  name="password"
                  type="password"
                />
              </div>
              <div className="space-y-2 w-full text-sm text-zinc-700 dark:text-zinc-300">
                <label htmlFor="phone" className="block font-medium">
                  Phone Number
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                  id="phone"
                  placeholder="Enter phone address"
                  name="phone"
                  type="phone"
                />
              </div>
            </div>
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <label htmlFor="address" className="block font-medium">
                Address
              </label>
              <textarea
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                id="address"
                placeholder="Enter address"
                name="address"
              />
            </div>
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <label htmlFor="fileUpload" className="block font-medium">
                Upload Image
              </label>
              <input
                type="file"
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                id="fileUpload"
                name="fileUpload"
              />
            </div>

            <button className="w-full rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-[#4d1b14] dark:bg-sky-700">
              Submit
            </button>
          </form>
          <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
            Don&apos;t have an account?
            <Link to="/login" className="font-semibold underline text-primary">
              <span> </span> SignIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
