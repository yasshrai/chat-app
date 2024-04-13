import React, { useState } from "react";
import GenderCheckBox from "../../components/GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender: gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-semibold text-center text-white">
          Signup
          <span className=" text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
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
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className=" label p-2">
              <span className=" text-base label-text text-white ">
                Username
              </span>
            </label>
            <input
              type="text"
              className=" w-full input input-bordered h-10"
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
            />
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
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
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
            <GenderCheckBox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            ></GenderCheckBox>
          </div>
          <Link
            to={"/login"}
            className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
          >
            Already have an account ?
          </Link>
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
