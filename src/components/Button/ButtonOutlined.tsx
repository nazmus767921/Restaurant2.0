import { utilizeModuleClasses } from "easy-css-modules";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import styles from "./styles/buttonOutlined.module.scss";

const $_ = utilizeModuleClasses(styles);

interface MyButtonProps {
  children: string | ReactElement;
  icon?: ReactElement<IconType>;
  color?: string;
  className?: string;
  paddingInline?: string;
  paddingBlock?: string;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

/**
 * A customizable button component using Chakra UI's CButton.
 * @param children - The content inside the button, can be a string or a React element.
 * @param icon - Optional React element to display an icon inside the button.
 * @param color - Optional string to specify the color of the button text and outline.
 * @param paddingInline - Optional horizontal padding, defaulting to "1.25rem".
 * @param paddingBlock - Optional vertical padding, defaulting to "0.625rem".
 * @param backgroundColor - Optional background color, defaulting to "transparent".
 * @param rest - Spreads the remaining properties inherited from ButtonProps.
 * @returns A styled CButton component with optional icon and customized styles.
 */
const Button = ({
  children,
  icon,
  className,
  color = "var(--accent)",
  paddingInline = "1.25rem",
  paddingBlock = "0.625rem",
  backgroundColor = "transparent",
  style,
}: MyButtonProps): JSX.Element => {
  return (
    <button
      className={`${$_(`button`)} ${className || ""}`}
      style={{
        paddingBlock: paddingBlock,
        paddingInline: paddingInline,
        backgroundColor: backgroundColor,
        color: color,
        outline: `1.25px solid ${color || "var(--accent)"}`,
        ...style,
      }}
    >
      {icon && <span className={$_(`icon`)}>{icon}</span>}
      {children}
    </button>
  );
};
export default Button;
