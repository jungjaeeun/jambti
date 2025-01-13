type InputProps = {
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ placeholder, type, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-2 border rounded"
      {...props}
    />
  );
};

export default Input;
