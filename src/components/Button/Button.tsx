import { ReactElement } from "react";

import { utilizeModuleClasses } from "easy-css-modules";
import styles from "./styles/button.module.scss";

const $_ = utilizeModuleClasses(styles);

const Button = ({ children }: { children: string | ReactElement }) => {
  return <button className={$_("button")}>{children}</button>;
};

export default Button;
