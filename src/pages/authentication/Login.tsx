
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mx-auto w-full my-16 max-w-md space-y-4 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
      <h1 className="text-3xl font-semibold">Sign In</h1>
      <form className="space-y-6">
        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          <label htmlFor="username_2" className="block font-medium">
            Email
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            placeholder="Enter email"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          <label htmlFor="password_2" className="block font-medium">
            Password
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
            placeholder="Enter password"
            type="password"
            name="password"
            id="password"
          />
          <div className="flex justify-end text-xs">
            <a
              href="#"
              className="text-zinc-700 hover:underline dark:text-zinc-300 hover:text-[#f6520a]"
            >
              Forgot Password?
            </a>
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-[#f6520a] px-4 py-2 text-white transition-colors hover:bg-[#f62a0a] dark:bg-sky-700"
        >
          Submit
        </button>
      </form>
      <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
        Don&apos;t have an account?
        <Link to="/register" className="font-semibold underline text-[#f6520a]">
          <span> </span> Signup
        </Link>
      </p>
      <div className="my-8 flex items-center">
        <hr className="flex-1 border-gray-400" />
        <div className="mx-4 text-gray-400">OR</div>
        <hr className="flex-1 border-gray-400" />
      </div>
      {/* Social icons */}
      <div className="flex justify-center space-x-4 *:border hover:*:bg-zinc-400/20 *:dark:border-zinc-700">
        <button
          aria-label="Log in with Google"
          className="rounded-full border border-[#f6520a] p-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="size-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
        <button
          aria-label="Log in with Twitter"
          className="rounded-full border border-[#f6520a] p-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="size-5 fill-current"
          >
            <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Login;
