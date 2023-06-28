import React from "react";
import "./styles/register.css";
import bg from "../assets/backg.png";
import goggle from "../assets/goggle.png";
import linkd from "../assets//174857 1.png";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row flex-b h-screen items-center">
      <div className="w-full md:w-1/3">
        <div className="flex justify-center items-center md:h-screen">
          <img src={bg} className="hidden xl:block" alt="" height={600} width={600} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-2/3 mx-auto md:mt-56 p-8 ">
        <div className="list flex mb-2">
          <h1 className="mr-24 md:mr-42">REGISTER</h1>
          <h1 className="ml-24 md:ml-42">LOG IN</h1>
        </div>
        <div className="flex items-center mb-10">
          <hr className="w-44 md:w-64 flex-grow border-t-8 rounded border-slate-200" />
          <hr className="w-44 md:w-64 flex-grow border-t-8 rounded border-blue-900" />
        </div>
        <div className="flex  mb-10">
          <h1 className="text-3xl">Register as a Writer/Reader</h1>
        </div>
        <form className="w-full max-w-lg">
          <div className="flex mb-4">
            <div className="">
              <label className="block text-gray-700 text-sm mb-2">
                First Name
              </label>
              <input
                className="appearance-none text-sm rounded w-full bg-slate-200 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                id="first name"
                type="text"
                placeholder="john"
              />
            </div>
            <div className="ml-10">
              <label className="block text-gray-700 text-sm mb-2">
                Last name
              </label>
              <input
                className="appearance-none text-sm rounded w-full bg-slate-200 py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-blue-500"
                id="last name"
                type="text"
                placeholder="john"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-slate-500 text-sm mb-2"
            >
              You are joining as?
            </label>
            <select
              className="appearance-none text-lg  rounded bg-slate-200 mb-3 w-full py-4 px-3 text-slate-500 leading-tight focus:outline-none focus:border-blue-500"
              id="username"
              placeholder="abdulkyacee@gmail.com"
            >
              <option className="text-sm">Writer</option>
              <option className="text-sm">Reader</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-slate-500 text-sm mb-2"
            >
              Email address
            </label>
            <input
              className="appearance-none text-lg  rounded bg-slate-200 mb-3 w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="username"
              type="text"
              placeholder="abdulkyacee@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray text-sm text-slate-500 mb-2">
              Password
            </label>
            <input
              className="appearance-none text-lg rounded bg-slate-200 w-full py-4 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:border-blue-500"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray text-sm text-slate-500 mb-2">
              Confirm password
            </label>
            <input
              className="appearance-none text-lg rounded bg-slate-200 w-full py-4 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:border-blue-500"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <button
              className="appearance-none rounded text-white text-lg font-bold bg-blue-900 hover:bg-blue-700 w-full py-4 px-4 leading-tight focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create account
            </button>
          </div>
          <div className="text-center mt-1">
            <h1>i already have an account? <span className="text-blue-900">Log in</span></h1>
          </div>
          <div className="">
            <div className="items-center justify-center flex appearance-none text-lg rounded bg-slate-200 w-full py-3 px-3 text-gray-700 mt-4 mb-4 leading-tight focus:outline-none">
              <img className="mr-2" src={goggle} alt="" />
              <h1>Sign up with Goggle</h1>
            </div>
            <div className="items-center justify-center flex appearance-none text-lg rounded bg-slate-200 w-full py-3 px-3 text-gray-700 mt-4 mb-4 leading-tight focus:outline-none">
              <img className="mr-2" src={linkd} alt="" />
              <h1>Sign up with Linkedin</h1>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
