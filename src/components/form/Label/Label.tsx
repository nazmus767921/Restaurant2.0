import { ReactNode } from "react";
import styles from "./label.module.scss";
import  { utilizeModuleClasses } from "easy-css-modules";

const $_ = utilizeModuleClasses(styles);

const Label = ({htmlFor, isRequired, children}: {
  htmlFor?: string | undefined;
  isRequired?: boolean | undefined;
  children: ReactNode;
}) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        style={{
          fontFamily: "var(--ff-heading)",
          fontSize: "var(--fs-h5)",
          color: "var(--accent)",
          textTransform: "capitalize",
        }}
        className={$_(`label ${isRequired ? "isRequired" : ""}`)}
      >
        {children}
      </label>
    </>
  );
}

export default Label;