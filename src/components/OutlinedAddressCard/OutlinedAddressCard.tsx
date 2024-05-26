import { utilizeModuleClasses } from "easy-css-modules";
import styles from "./outlinedAddressCard.module.scss";

const $_ = utilizeModuleClasses(styles);

const OutlinedAddressCard = () => {
  return (
    <div className={$_("addressCard")}>
      <TextContent
        title="Our Address"
        description="732/21 Second Street, Manchester, King Street, Kingston United Kingdom"
      />
      <TextContent
        title="Open Hours"
        description="Monday - Friday, 10 AM - 7 PM"
      />
    </div>
  );
};

const TextContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className={$_("addressCard__textContent")}>
      <h5 className={$_("addressCard__textContent__title")}>{title}</h5>
      <p>{description}</p>
    </div>
  );
};
export default OutlinedAddressCard;
