import Banner from "@components/Banner/Banner";
import Button from "@components/Button/ButtonOutlined";
import Footer from "@components/Footer/Footer";
import Nav from "@components/Nav/Nav";
import OutlinedAddressCard from "@components/OutlinedAddressCard/OutlinedAddressCard";
import ReservationCTA from "@components/ReservationCTA/ReservationCTA";
import SectionHeader from "@components/SectionHeader/SectionHeader";
import InputField from "@components/form/InputField/InputField";
import TextField from "@components/form/TextField/TextField";
import { utilizeModuleClasses } from "easy-css-modules";
import styles from "./styles/contactpage.module.scss";

const $_ = utilizeModuleClasses(styles);

const ContactPage = () => {
  return (
    <>
      <Nav slot={<Banner />} />
      <section className={$_("contactPage")}>
        <div className={$_("contactPage__sectionHeader @container")}>
          <SectionHeader
            title={
              <h4 className={$_("contactPage__title")}>
                We&apos;d Love to Hear From You,
                <br />
                <span
                  className={$_(
                    "contactPage__title contactPage__title--span @isBrand"
                  )}
                >
                  Please Let Us Know
                </span>
              </h4>
            }
            subHeading="Whether you have questions, feedback, or want to make a reservation, our
          team is here to assist you. Reach out via the form below, and we'll get
          back to you promptly."
          />
        </div>
        <div className={$_("contactPage__formSection @container")}>
          <Form />
          <OutlinedAddressCard />
        </div>
      </section>
      <ReservationCTA />
      <Footer />
    </>
  );
};

const Form = () => {
  return (
    <form className={$_("contactPage__form")}>
      <InputField
        label="name"
        placeholder="Your name, Sir/ Madam?"
        description={"Your name, Sir/ Madam?"}
        isRequired
      />
      <InputField
        label="Email"
        placeholder="Your email, Sir/ Madam?"
        isRequired
      />
      <TextField label="Message" placeholder="Write your message" />
      <div
        style={{
          marginInline: "auto",
        }}
      >
        <Button paddingInline="3.75rem" paddingBlock="0.9rem">
          Send
        </Button>
      </div>
    </form>
  );
};

export default ContactPage;
