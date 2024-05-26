import Banner from "@components/Banner/Banner";
import Nav from "@components/Nav/Nav";
import { utilizeModuleClasses } from "easy-css-modules";
import styles from "./styles/index.module.scss";
import Hero from "./components/Hero";
import FeaturedMenu from "./components/FeaturedMenu";
import About from "./components/About";
import ReservationCTA from "@components/ReservationCTA/ReservationCTA";
import Footer from "@components/Footer/Footer";

const $_ = utilizeModuleClasses(styles);

const Home = () => {
  return (
    <main className={$_("homepage")}>
      <Nav className={$_("homepage__navbar")} slot={<Banner />} />
      <Hero />
      <FeaturedMenu />
      <About />
      <ReservationCTA />
      <Footer />
    </main>
  );
};

export default Home;
