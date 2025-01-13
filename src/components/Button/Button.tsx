import { ButtonSize, ButtonVariant } from "@/types/ui.type";
import { buttonStyles } from "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "m",
  block,
  disabled = false,
}: ButtonProps): JSX.Element => {
  const styles = buttonStyles({ variant, size, block });

  return (
    <button onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
