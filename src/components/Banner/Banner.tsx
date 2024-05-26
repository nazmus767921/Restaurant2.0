import IconText from "@components/IconText/IconText";
import { utilizeModuleClasses } from "easy-css-modules";
import { BsClock, BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import styles from "./banner.module.scss";

const $_ = utilizeModuleClasses(styles);

const Banner = () => {
  return (
    <div className={$_("banner @container")}>
      <IconText size="lg" icon={<IoLocationOutline />}>
        Road 43, Gulshan 2, Dhaka 1212
      </IconText>
      <IconText size="lg" icon={<BsTelephone />}>
        +880 (1794- 799 114)
      </IconText>
      <IconText size="lg" icon={<BsClock />}>
        12:00 PM - 10:00 PM
      </IconText>
    </div>
  );
};

export default Banner;
