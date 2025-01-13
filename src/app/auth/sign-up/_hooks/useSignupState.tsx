import { useState } from "react";

type ChangeHandler<T> = (e: React.ChangeEvent<HTMLInputElement>) => void;

const useSignupState = <T extends Record<string, string>>(initialState: T) => {
  const [value, setValue] = useState<T>(initialState);

  const handleChange: ChangeHandler<T> = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    value,
    setValue: handleChange,
  };
};

export default useSignupState;
