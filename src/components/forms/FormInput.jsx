import React from "react";

const FormInput = ({
  label,
  placeholder,
  id,
  type = "text",
  labelExtention,
  control,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <label
          for="with-corner-hint"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          {label}
        </label>
        {labelExtention}
      </div>
      <input
        type={type}
        id={id}
        className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
