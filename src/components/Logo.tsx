import { utilizeModuleClasses } from "easy-css-modules";
import styles from "./logo.module.scss";

const $_ = utilizeModuleClasses(styles);

const Logo = ({...rest}) => {
  return (
    <div {...rest}>
      <h3 className={$_("logo")}>
        Res
        <span className={$_("logo__span")}>2Rant</span>
      </h3>
    </div>
  );
};

export default Logo;
