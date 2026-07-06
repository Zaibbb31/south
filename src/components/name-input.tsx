"use client";

import React, { useState } from "react";

interface NameInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  className?: string;
}

export function NameInput({ className, ...props }: NameInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow alphabets and whitespaces
    const newValue = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(newValue)) {
      setValue(newValue);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className={className}
      {...props}
    />
  );
}
