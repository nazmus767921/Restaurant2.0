import Logo from "@components/Logo";
import { routes } from "@pages/routes";
import { nanoid } from "@reduxjs/toolkit";
import { utilizeModuleClasses } from "easy-css-modules";
import { ReactElement, memo } from "react";
import { NavLink, useMatch } from "react-router-dom";
import styles from "./nav.module.scss";

const $_ = utilizeModuleClasses(styles);

const navLinks = [
  {
    id: nanoid(),
    text: "Home",
    url: routes.HOME_ROUTE,
  },
  {
    id: nanoid(),
    text: "Menu",
    url: routes.FOOD_MENU_ROUTE,
  },
  {
    id: nanoid(),
    text: "contact",
    url: routes.CONTACT_ROUTE,
  },
  {
    id: nanoid(),
    text: "Reservation",
    url: routes.RESERVATION_ROUTE,
  },
];

const Nav = memo(
  ({ className, slot }: { className?: string; slot?: ReactElement }) => {
    return (
      <div className={className}>
        <div className={`${$_("navbar @container")}`}>
          <Logo style={{ justifySelf: "start" }} />
          <NavMenu />
          {/* <div style={{ justifySelf: "end" }}>
            <DarkModeToggle />
          </div> */}
        </div>
        {slot}
      </div>
    );
  }
);

const NavMenu = () => {
  return (
    <div className={$_("navbar__menu")}>
      {navLinks.map((navlink) => {
        return (
          <MenuBtn key={navlink.id} url={navlink.url}>
            {navlink.text}
          </MenuBtn>
        );
      })}
    </div>
  );
};

const MenuBtn = ({
  children,
  url,
}: {
  children: ReactElement | string;
  url: string;
}) => {
  const match = useMatch(url);
  return (
    <NavLink to={url}>
      <button className={$_(`navbar__menuBtn ${match ? "isActive" : ""}`)}>
        {children}
      </button>
    </NavLink>
  );
};

// const DarkModeToggle = () => {
//   return (
//     <button
//       type="button"
//       name="darkModeToggle"
//       className={$_("navbar__darkModeToggle")}
//     >
//       <WiDaySunny />
//     </button>
//   );
// };

export default Nav;
