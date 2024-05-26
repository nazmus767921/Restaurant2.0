import Logo from "@components/Logo";
import SocialIcons from "@components/SocialIcons";
import { utilizeModuleClasses } from "easy-css-modules";
import { ReactNode, useCallback } from "react";
import styles from "./footer.module.scss";

const $_ = utilizeModuleClasses(styles);

const Footer = () => {
  return (
    <section className={$_("footer @container")}>
      <BrandItems />
      <LinksItems />
      <OtherInfoItems />
    </section>
  );
};

const OtherInfoItems = () => {
  const ColoredText = useCallback(
    ({ className, children }: { className?: string; children: ReactNode }) => {
      return (
        <p className={`${$_("footer__text")} ${className || ""}`}>{children}</p>
      );
    },
    []
  );
  return (
    <div className={$_("footer__otherInfo")}>
      <SocialIcons />
      <ColoredText className={$_("copyright")}>
        ©&nbsp;Copyright&nbsp;Nazmus&nbsp;Sakib.
        <a
          className={$_("footer__text footer__text--link")}
          href="https://Nazmus.vercel.app"
          target="_blank"
          rel="noopener"
        >
          https://Nazmus.vercel.app
        </a>
      </ColoredText>
      <ColoredText>All Right Reserved.</ColoredText>
      <ColoredText>Privacy policy</ColoredText>
      <ColoredText>Terms of use</ColoredText>
    </div>
  );
};

interface LinkBtnType {
  children: ReactNode;
}
const LinksItems = () => {
  const LinkBtn = useCallback(({ children }: LinkBtnType) => {
    return (
      <button type="button" className={$_("footer__linkBtn")}>
        {children}
      </button>
    );
  }, []);
  return (
    <div className={$_("footer__links")}>
      <LinkBtn>Our Menus</LinkBtn>
      <LinkBtn>Reservation</LinkBtn>
      <LinkBtn>About</LinkBtn>
      <LinkBtn>Contact us</LinkBtn>
    </div>
  );
};

const BrandItems = () => {
  return (
    <div className={$_("footer__brand")}>
      <Logo />
      <p className={$_("footer__text footer__text--address")}>
        Road 43, Gulshan 2, Dhaka 1212
      </p>
    </div>
  );
};

export default Footer;
