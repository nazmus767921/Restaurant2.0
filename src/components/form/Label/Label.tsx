import { utilizeModuleClasses } from "easy-css-modules";
import { ReactNode } from "react";
import styles from "./label.module.scss";

const $_ = utilizeModuleClasses(styles);

const Label = ({
  htmlFor,
  isRequired,
  children,
  color = "var(--accent)",
}: {
  htmlFor?: string | undefined;
  isRequired?: boolean | undefined;
  children: ReactNode;
  color?: string;
  size?: string;
}) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        style={{
          fontFamily: "var(--ff-heading)",
          fontSize: "var(--fs-h5)",
          color: color,
          textTransform: "capitalize",
        }}
        className={$_(`label ${isRequired ? "isRequired" : ""}`)}
      >
        {children}
      </label>
    </>
  );
};

export default Label;
