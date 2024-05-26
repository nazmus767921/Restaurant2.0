import { utilizeModuleClasses } from "easy-css-modules";
import { ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";
import styles from "./iconText.module.scss";

const $_ = utilizeModuleClasses(styles);

interface Props {
  children: ReactNode;
  icon: ReactElement<IconType>;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const IconText = ({
  children,
  icon,
  size = "md",
  color = "var(--accent)",
}: Props) => {
  return (
    <div
      className={$_("iconText")}
      color={color}
      style={{
        color: color,
        fontSize:
          size === "sm"
            ? "var(--fs-xs)"
            : size === "md"
            ? "var(--fs-sm)"
            : "clamp(0.88rem, 0.13vi + 0.84rem, 1rem)",
      }}
    >
      <div className={$_("icon")}>{icon}</div>
      <p className={$_("text")}>{children}</p>
    </div>
  );
};
export default IconText;
