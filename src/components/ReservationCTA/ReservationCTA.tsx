import { utilizeModuleClasses } from "easy-css-modules";
import styles from "./reservationCTA.module.scss";

const $_ = utilizeModuleClasses(styles);

const ReservationCTA = () => {
  return (
    <section className={$_("reservationCta @container")}>
      <TextItems />
      <div className={$_("reservationCta__btnWrapper")}>
        <ReserveBtn />
      </div>
    </section>
  );
};

const TextItems = () => {
  return (
    <div className={$_("textItems")}>
      <p className={$_("textItems__tag")}>WE SAVED YOU A SEAT</p>
      <h2 className={$_("textItems__title")}>
        Make an <span className={$_("@isBrand")}>online</span>
        <br />
        Reservation
      </h2>
      <p className={$_("textItems__description")}>
        When the going gets tough, the tough get grilling. Bringing heat to your
        meat. No one can compete with our meat.
      </p>
    </div>
  );
};

const ReserveBtn = () => {
  return (
    <button className={$_("reservationCta__btn")}>Make A Reservation</button>
  );
};

export default ReservationCTA;
