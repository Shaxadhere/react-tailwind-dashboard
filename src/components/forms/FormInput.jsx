import React from "react";

const FormInput = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <label
          for="with-corner-hint"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Email
        </label>
        <span className="block text-sm text-gray-500 mb-2">Optional</span>
      </div>
      <input
        type="email"
        id="with-corner-hint"
        className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        placeholder="you@site.com"
      ></input>
    </div>
  );
};

export default FormInput;
