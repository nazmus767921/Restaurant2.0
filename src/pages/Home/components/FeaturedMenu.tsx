import Button from "@components/Button/Button";
import DragSliderWrapper from "@components/DragSliderWrapper/DragSliderWrapper";
import FoodCard, { FoodCardProps } from "@components/FoodCard/FoodCard";
import { nanoid } from "@reduxjs/toolkit";
import { utilizeModuleClasses } from "easy-css-modules";
import styles from "../styles/featuredMenu.module.scss";

const $_ = utilizeModuleClasses(styles);

interface FoodData extends FoodCardProps {
  id: string;
}

const foodData: FoodData[] = [
  {
    id: nanoid(),
    image: "sahi_kebab2.png",
    name: "Shahi Kebab",
    description: "Best meat you can get between your teeths.",
    price: 29.99,
  },
  {
    id: nanoid(),
    image: "sahi_kebab2.png",
    name: "Shahi Kebab",
    description: "Best meat you can get between your teeths.",
    price: 29.99,
  },
  {
    id: nanoid(),
    image: "sahi_kebab2.png",
    name: "Shahi Kebab",
    description: "Best meat you can get between your teeths.",
    price: 29.99,
  },
  {
    id: nanoid(),
    image: "sahi_kebab2.png",
    name: "Shahi Kebab",
    description: "Best meat you can get between your teeths.",
    price: 29.99,
  },
  {
    id: nanoid(),
    image: "sahi_kebab2.png",
    name: "Shahi Kebab",
    description: "Best meat you can get between your teeths.",
    price: 29.99,
  },
];

const FeaturedMenu = () => {
  return (
    <section className={$_("featuredMenu")}>
      <TitleRow />
      <MenuStack />
    </section>
  );
};

const TitleRow = () => {
  return (
    <div className={$_("featuredMenu__titleRow")}>
      <div className={$_("featuredMenu__titleRowCardWrapper")}>
        <div className={$_("featuredMenu__titleRowCard")}>
          <h2 className={$_("featuredMenu__title")}>
            The choice is easy when it's real food. Eat real. Feel real.
          </h2>
        </div>
      </div>
      <div className={$_("featuredMenu__BtnWrapper")}>
        <Button>Show More</Button>
      </div>
    </div>
  );
};

const MenuStack = () => {
  return (
    <div className={$_("featuredMenu__menuStack")}>
      <DragSliderWrapper>
        <div className={$_("featuredMenu__menuStack__cards")}>
          {foodData.map((food) => {
            const { image, name, description, price } = food;
            return (
              <FoodCard
                image={image}
                name={name}
                description={description}
                price={price}
                isBlur
              />
            );
          })}
        </div>
      </DragSliderWrapper>
    </div>
  );
};

export default FeaturedMenu;
