import Button from "@components/Button/ButtonOutlined";
import { utilizeModuleClasses } from "easy-css-modules";
import { RiMapPinLine } from "react-icons/ri";
import styles from "../styles/about.module.scss";

const $_ = utilizeModuleClasses(styles);

const About = () => {
  return (
    <section className={$_("about @container")}>
      <RestaurantImages />
      <div className={$_("about__textContent")}>
        <h3>
          The <span className={$_("@isBrand")}>premium</span> taste that yearns
          to be savored, ground beef between your teeth
        </h3>
        <p>
          Res2Rant sets itself apart by prioritizing the social experience and
          taking a vibe-driven approach to fine dining. Our chic ambiance and
          decor in the dining room, sushi lounge, and cocktail bar create a fun
          and stylish atmosphere.
        </p>
        <Button
          icon={<RiMapPinLine />}
          color="var(--brand)"
          style={{ marginBlock: "var(--gap-1)" }}
        >
          Our Address
        </Button>
      </div>
    </section>
  );
};

const RestaurantImages = () => {
  return (
    <div className={$_("about__restaurantImages")}>
      <div className={$_("topImage @img__wrapper")}>
        <img src="/images/restaurant2.png" alt="Restaurant view" />
      </div>
      <div className={$_("bottomImage @img__wrapper")}>
        <img src="/images/restaurant1.png" alt="Restaurant view" />
      </div>
    </div>
  );
};

export default About;
