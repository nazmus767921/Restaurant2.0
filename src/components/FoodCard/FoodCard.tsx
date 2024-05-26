import { utilizeModuleClasses } from "easy-css-modules";
import styles from "./foodCard.module.scss";

const $_ = utilizeModuleClasses(styles);

interface FoodMenuTextProps {
  name: string;
  description: string;
  price: number;
}

export interface FoodCardProps extends FoodMenuTextProps {
  image: string;
  isBlur?: boolean;
}

const FoodCard = ({
  image,
  name,
  description,
  price,
  isBlur,
}: FoodCardProps) => {
  return (
    <div className={$_(`foodCard ${isBlur ? "isBlur" : ""}`)}>
      <div className={$_("foodCard__imageWrapper @img__wrapper")}>
        <img src={`/images/${image}`} alt={name} />
      </div>
      <FoodMenuText name={name} description={description} price={price} />
    </div>
  );
};

const FoodMenuText = ({ name, description, price }: FoodMenuTextProps) => {
  return (
    <div className={$_("foodMenuText")}>
      <h5 className={$_("foodMenuText__title")}>{name}</h5>
      <p>{description}</p>
      <h6 className={$_("foodMenuText__price")}>
        <span className={$_("foodMenuText__price__symbol")}>$</span>
        {price}
      </h6>
    </div>
  );
};

export default FoodCard;
