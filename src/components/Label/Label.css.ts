import { theme } from "@/styles/theme";
import {
  LabelAlign,
  LabelSize,
  LabelVariant,
  LabelWeight,
} from "@/types/ui.type";

export const labelStyles = ({
  color = "text",
  size = "m",
  align = "left",
  variant = "primary",
  weight = "normal",
}: {
  color?: keyof typeof theme.colors;
  size?: LabelSize;
  align?: LabelAlign;
  variant?: LabelVariant;
  weight?: LabelWeight;
}) => {
  const baseStyles = "inline-block font-medium";
  const colorStyles = `text-[${theme.colors[color]}]`;

  const sizeStyles = {
    xs: "text-xs",
    s: "text-sm",
    m: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    xxl: "text-2xl",
  }[size];

  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  const variantStyles = {
    primary: `text-[${theme.colors.primary}]`,
    secondary: `text-[${theme.colors.secondary}]`,
    thirdly: `text-[${theme.colors.thirdly}]`,
  }[variant];

  const weightStyles = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
  }[weight];

  return `${baseStyles} ${colorStyles} ${sizeStyles} ${alignStyles} ${variantStyles} ${weightStyles}`;
};
