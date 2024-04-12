import React from "react";

const GenderCheckBox = () => {
  return (
    <div className=" flex">
      <div className=" form-control">
        <label className=" label gap-2 cursor-pointer ">
          <span className=" label-text text-white">male</span>
          <input type="checkbox" className=" checkbox border-slate-500" />
        </label>
      </div>
      <div className=" form-control">
        <label className=" label gap-2 cursor-pointer">
          <span className=" label-text text-white">Female</span>
          <input type="checkbox" className=" checkbox border-slate-500" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
