import Banner from "@components/Banner/Banner";
import FoodCard from "@components/FoodCard/FoodCard";
import Footer from "@components/Footer/Footer";
import Nav from "@components/Nav/Nav";
import SelectField, { Option } from "@components/form/SelectField/SelectField";
import { nanoid } from "@reduxjs/toolkit";
import { utilizeModuleClasses } from "easy-css-modules";
import { memo, useMemo, useState } from "react";
import styles from "./styles/Menupage.module.scss";

const $_ = utilizeModuleClasses(styles);

const MenuPage = () => {
  const options: Option[] = [
    {
      id: nanoid(),
      value: "Show All",
    },
    {
      id: nanoid(),
      value: "Refreshing Breakfast",
    },
    {
      id: nanoid(),
      value: "Lunch Box",
    },
    {
      id: nanoid(),
      value: "Dinner Delight",
    },
  ];
  return (
    <>
      <Nav slot={<Banner />} />
      <section className={$_("foodMenuSection @container")}>
        <Sidebar />
        <div className={$_("foodMenuSection__filters")}>
          <SelectField
            color="var(--brand)"
            id={nanoid()}
            name="menu"
            label="Menu"
            options={options}
          />
        </div>
        <FoodMenu />
      </section>
      <Footer />
    </>
  );
};

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState<string>("showAll");

  const filterMenuList = useMemo(
    () => [
      {
        id: nanoid(),
        text: "Salad boxes",
      },
      {
        id: nanoid(),
        text: "Refreshing Breakfast",
      },
      {
        id: nanoid(),
        text: "Lunch Boxes",
      },
      {
        id: nanoid(),
        text: "Dinner Delight",
      },
      {
        id: nanoid(),
        text: "Drinks",
      },
    ],
    []
  );

  return (
    <div className={$_("sidebar")}>
      {/* <Text as={"h3"} textTransform={"capitalize"} color={"var(--brand)"}>
        Menu
      </Text> */}
      <menu>
        <button
          type="button"
          className={$_(
            `sidebar__button ${selectedItem === "showAll" ? "isSelected" : ""}`
          )}
          onClick={() => setSelectedItem("showAll")}
        >
          All
        </button>
        {filterMenuList.map((item) => {
          return (
            <button
              type="button"
              className={$_(
                `sidebar__button ${
                  selectedItem === item.id ? "isSelected" : ""
                }`
              )}
              onClick={() => setSelectedItem(item.id)}
            >
              {item.text}
            </button>
          );
        })}
      </menu>
    </div>
  );
};

const FoodMenu = () => {
  const ViewSorter = memo(() => {
    return (
      <div className={$_("foodMenu__viewSorter")}>
        <h3 className={$_("foodMenu__categoryTitle @isBrand")}>
          Refreshing Breakfast
        </h3>

        <p className={$_("foodMenu__pageStatusText @is--small")}>
          Page 1 of 15
        </p>
      </div>
    );
  });

  const FoodCards = () => {
    return (
      <div className={$_("foodMenu__foodCards")}>
        <FoodCard
          variant={2}
          name="Sahi Kebab"
          description="Best meat you can get between your teeth."
          image="sahi_kebab2.png"
          price={2.77}
        />
        <FoodCard
          variant={2}
          name="Sahi Kebab"
          description="Best meat you can get between your teeth."
          image="sahi_kebab2.png"
          price={2.77}
        />
        <FoodCard
          variant={2}
          name="Sahi Kebab"
          description="Best meat you can get between your teeth."
          image="sahi_kebab2.png"
          price={2.77}
        />
        <FoodCard
          variant={2}
          name="Sahi Kebab"
          description="Best meat you can get between your teeth."
          image="sahi_kebab2.png"
          price={2.77}
        />
        <FoodCard
          variant={2}
          name="Sahi Kebab"
          description="Best meat you can get between your teeth."
          image="sahi_kebab2.png"
          price={2.77}
        />
        <FoodCard
          variant={2}
          name="Sahi Kebab"
          description="Best meat you can get between your teeth."
          image="sahi_kebab2.png"
          price={2.77}
        />
      </div>
    );
  };
  return (
    <div className={$_("foodMenu")}>
      <ViewSorter />
      <FoodCards />
    </div>
  );
};

export default MenuPage;
