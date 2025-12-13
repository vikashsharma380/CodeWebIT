import React from "react";

const FormInput = ({ id, name, label, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-secondary">
        {label}
      </label>
      <input
        id={id}
        name={name}
        {...props}
        className="mt-1 block w-full py-2 px-3 bg-card border border-border rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm text-primary placeholder-secondary/50"
      />
    </div>
  );
};

export default FormInput;
