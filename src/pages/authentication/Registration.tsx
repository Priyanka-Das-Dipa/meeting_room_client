import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div
      className="relative h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/loginPage.jpeg')" }}
    >
      {/* Black opacity overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered form */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="w-full max-w-md space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
          <h1 className="text-3xl font-semibold">Sign Up</h1>
          <form action="#" className="space-y-6">
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <label htmlFor="username_2" className="block font-medium">
                Username
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                id="username_2"
                placeholder="Enter username"
                name="username"
                type="text"
              />
            </div>
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
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
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
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
              <div className="flex justify-end text-xs">
                <a
                  href="#"
                  className="text-zinc-700 hover:underline dark:text-zinc-300 hover:text-primary"
                >
                  Forgot Password?
                </a>
              </div>
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
