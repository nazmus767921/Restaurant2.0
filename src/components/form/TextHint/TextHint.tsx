import { utilizeModuleClasses } from "easy-css-modules";
import styles from "./textHint.module.scss";

const $_ = utilizeModuleClasses(styles);

const TextHint = ({
  children,
  color = "var(--accent)",
}: {
  children: string | number;
  color?: string;
}) => {
  const customStyles = {
    "--_color": color,
  };
  return (
    <p
      className={$_("textHint @is--small")}
      style={customStyles as React.CSSProperties}
    >
      {children}
    </p>
  );
};

export default TextHint;
