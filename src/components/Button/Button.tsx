import { ButtonSize, ButtonVariant } from "@/types/ui.type";
import { buttonStyles } from "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "m",
  block,
}: ButtonProps): JSX.Element => {
  const styles = buttonStyles({ variant, size, block });

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
