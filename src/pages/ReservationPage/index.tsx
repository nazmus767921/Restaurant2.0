import Banner from "@components/Banner/Banner";
import Button from "@components/Button/ButtonOutlined";
import Footer from "@components/Footer/Footer";
import Nav from "@components/Nav/Nav";
import SectionHeader from "@components/SectionHeader/SectionHeader";
import InputField from "@components/form/InputField/InputField";
import TextField from "@components/form/TextField/TextField";
import { utilizeModuleClasses } from "easy-css-modules";
import moment from "moment";
import { memo, useCallback, useState } from "react";
import styles from "./styles/reservationpage.module.scss";

const $_ = utilizeModuleClasses(styles);

interface FormData {
  guestName: string;
  email: string;
  contact: number;
  totalGuests: number;
  requestedDate: string;
  specialRequestMessage: string;
}

const HeaderContent = memo(() => {
  return (
    <h4 className={$_("reservationPage__title")}>
      Embark on a Gastronomic Journey:
      <br />
      <span className={$_("@isBrand")}>Reserve Your Table Now!</span>
    </h4>
  );
});

const ReservationPage = () => {
  const [formData, setFormData] = useState<FormData>();

  console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));

  const inputHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      const newFormData = { ...formData, [name]: value } as FormData;

      setFormData(newFormData);
    },
    [formData, setFormData]
  );

  return (
    <>
      <Nav slot={<Banner />} />
      <section className={$_("reservationPage")}>
        <div className={$_("reservationPage__sectionHeader @container")}>
          <SectionHeader
            title={<HeaderContent />}
            subHeading="Indulge in Culinary Delights: Secure Your Dining Experience Today!"
          />
        </div>
        <form className={$_("reservationPage__form @container")}>
          <InputField
            onChange={inputHandler}
            value={formData?.guestName}
            name="guestName"
            label="name"
            isRequired
            placeholder="Your name, Sir/ Madam?"
          />
          <div className={$_("reservationPage__form__placeholder")} />
          {/* Required for the layout */}
          <InputField
            onChange={inputHandler}
            value={formData?.email}
            name="email"
            label="email"
            isRequired
            placeholder="Your email, Sir/ Madam?"
          />
          <InputField
            onChange={inputHandler}
            value={formData?.contact}
            name="contact"
            label="contact number"
            isRequired
            placeholder="Your Phone Number, Sir/ Madam?"
          />
          <InputField
            onChange={inputHandler}
            value={formData?.totalGuests}
            name="totalGuests"
            type="number"
            label="Guests in Attendance"
            isRequired
            description="How many esteemed guests will be joining you for this extraordinary culinary affair?"
            placeholder="More than 10 people"
          />
          <InputField
            onChange={inputHandler}
            defaultValue={moment().format().slice(0, 16)}
            value={formData?.requestedDate}
            name="requestedDate"
            isRequired
            type="datetime-local"
            label="Date and Time"
            description="When shall we reserve this exclusive experience for you? Select the date and time that best suits your culinary desires."
          />
          <div className={$_("reservationPage__form__specialRequest")}>
            <TextField
              name="specialRequestMessage"
              label="Special Requests"
              placeholder="Any special requests?"
            />
          </div>
          <div className={$_("reservationPage__form__submitWrapper @centerX")}>
            <Button paddingInline={"3.75rem"} paddingBlock={".9rem"}>
              Reserve
            </Button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default ReservationPage;
