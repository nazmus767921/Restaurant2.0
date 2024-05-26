import Button from "@components/Button/Button";
import IconText from "@components/IconText/IconText";
import SocialIcons from "@components/SocialIcons";
import { utilizeModuleClasses } from "easy-css-modules";
import { CgMouse } from "react-icons/cg";
import styles from "../styles/hero.module.scss";

const $_ = utilizeModuleClasses(styles);

const Hero = () => {
  return (
    <section className={$_("hero @container")}>
      <Title />
      <p color={"var(--accent)"} className={$_("hero__text")}>
        Bringing heat to your meat. No one can compete with our meat
      </p>
      <Button>reserve a table</Button>
      <BottomArea />
    </section>
  );
};

const Title = () => {
  return (
    <h2 className={$_("hero__title")}>
      Taste The <br />
      <span className={$_("hero__title hero__title--span @isBrand")}>
        Difference
      </span>
    </h2>
  );
};

const BottomArea = ({ ...rest }) => {
  return (
    <div className={$_(`hero__bottomArea @container`)} {...rest}>
      <div className={$_("hero__bottomArea__important-for-layout")} />
      {/* important for layout */}
      <IconText icon={<CgMouse />}>Scroll Down</IconText>
      <div className={$_("hero__bottomArea__socialIconsWrapper")}>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Hero;
