import React from "react";
import GenderCheckBox from "../../components/GenderCheckBox";

const Signup = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-semibold text-center text-white">
          Signup
          <span className=" text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className=" label p-2">
              <span className=" text-base label-text text-white ">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="John doe "
              className=" w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className=" label p-2">
              <span className=" text-base label-text text-white ">
                Username
              </span>
            </label>
            <input type="text" className=" w-full input input-bordered h-10" />
          </div>
          <div>
            <label className=" label p-2">
              <span className=" text-base label-text text-white ">
                Password
              </span>
            </label>
            <input
              type="password"
              className=" w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className=" label p-2">
              <span className=" text-base label-text text-white ">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              className=" w-full input input-bordered h-10"
            />
            <GenderCheckBox></GenderCheckBox>
          </div>
          <a
            href=""
            className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
          >
            Alreay have an account ?
          </a>
          <div>
            <button className=" btn btn-block btn-sm mt-2 hover:bg-blue-600 hover:text-white ">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
