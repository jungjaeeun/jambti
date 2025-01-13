import {
  LabelAlign,
  LabelSize,
  LabelVariant,
  LabelWeight,
} from "@/types/ui.type";
import { labelStyles } from "./Label.css";
import { theme } from "@/styles/theme";

type LabelProps = {
  children: React.ReactNode;
  size?: LabelSize;
  weight?: LabelWeight;
  variant?: LabelVariant;
  align?: LabelAlign;
  color?: keyof typeof theme.colors;
};

const Label: React.FC<LabelProps> = ({
  size,
  align,
  variant,
  weight,
  children,
}) => {
  const styles = labelStyles({ size, align, variant, weight });
  return <p className={styles}>{children}</p>;
};

export default Label;
