import { utilizeModuleClasses } from "easy-css-modules";
import { ReactNode, memo } from "react";
import styles from "./sectionHeader.module.scss";

const $_ = utilizeModuleClasses(styles);

const SectionHeader = memo(
  ({
    title,
    subHeading,
  }: {
    title: ReactNode;
    subHeading: string | undefined;
  }) => {
    return (
      <div className={$_("sectionHeader")}>
        {title}
        <p className={$_("sectionHeader__subHeading")}>{subHeading}</p>
      </div>
    );
  }
);

export default SectionHeader;
