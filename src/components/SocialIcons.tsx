import { utilizeModuleClasses } from "easy-css-modules";
import { ReactElement, useCallback } from "react";
import { IconType } from "react-icons";
import { FaFacebook, FaSquareInstagram } from "react-icons/fa6";
import styles from "./socialIcons.module.scss";

const $_ = utilizeModuleClasses(styles);

const SocialIcons = () => {
  const CustomSizedIconWrapper = useCallback(
    ({ children }: { children: ReactElement<IconType> }) => {
      return (
        <button type="button" className={$_("socialIcons__icon")}>
          {children}
        </button>
      );
    },
    []
  );
  return (
    <div className={$_("socialIcons")}>
      <CustomSizedIconWrapper>
        <FaFacebook />
      </CustomSizedIconWrapper>
      <CustomSizedIconWrapper>
        <FaSquareInstagram />
      </CustomSizedIconWrapper>
    </div>
  );
};

export default SocialIcons;
