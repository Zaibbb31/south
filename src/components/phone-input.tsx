"use client";

import React, { useState } from "react";

interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  className?: string;
}

export function PhoneInput({ className, ...props }: PhoneInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numeric characters
    const newValue = e.target.value;
    if (/^[0-9]*$/.test(newValue)) {
      setValue(newValue);
    }
  };

  return (
    <input
      type="tel"
      value={value}
      onChange={handleChange}
      className={className}
      {...props}
    />
  );
}
