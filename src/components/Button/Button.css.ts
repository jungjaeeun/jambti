import { ButtonSize, ButtonVariant } from "@/types/ui.type";

export const buttonStyles = ({
  variant = "primary",
  size = "m",
  block = false,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
}) => {
  const baseStyles = "rounded focus:outline-none transition duration-300";

  const sizeStyles = {
    s: "px-4 py-2 text-sm",
    m: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }[size];

  const variantStyles = {
    primary: `bg-primary text-white font-bold hover:bg-primaryActive`,
    secondary: `bg-secondary text-white font-bold hover:bg-secondaryActive`,
    tertiary: `bg-gray-400 text-white border font-semibold border-blue-500 hover:bg-gray-300`,
  }[variant];

  const fullWidth = block ? "w-full" : "";

  return `${baseStyles} ${sizeStyles} ${variantStyles} ${fullWidth}`;
};
