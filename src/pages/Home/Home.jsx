import { FaAngleUp } from "react-icons/fa6";
import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Banner/Navbar/Navbar";
import BookNow from "../../components/BookNow/BookNow";
import CallAgent from "../../components/CallAgent/CallAgent";
import CallNowBottom from "../../components/CallNowBottom/CallNowBottom";
import ChooseTaxi from "../../components/ChooseTaxi/ChooseTaxi";
import Contact from "../../components/Contact/Contact";
import FirstChoice from "../../components/FirstChoice/FirstChoice";
import Footer from "../../components/Footer/Footer";
import Map from "../../components/Map/Map";
import NewsBlogs from "../../components/NewsBlogs/NewsBlogs";
import TaxiFares from "../../components/TaxiFares/TaxiFares";
import Testimonials from "../../components/Testimonials/Testimonials";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div id="home">
      <div className="bg-dark h-[12.9rem] sm:hidden"></div>
      <Navbar></Navbar>
      <Banner></Banner>
      <BookNow></BookNow>
      <FirstChoice></FirstChoice>
      <CallAgent></CallAgent>
      <ChooseTaxi></ChooseTaxi>
      <WhyChooseUs></WhyChooseUs>
      <TaxiFares></TaxiFares>
      <AboutUs></AboutUs>
      <Testimonials></Testimonials>
      <NewsBlogs></NewsBlogs>
      <CallNowBottom></CallNowBottom>
      <Contact></Contact>
      <Map></Map>
      <Footer></Footer>

      <button className="scroll-to-top" onClick={() => document.getElementById("home")?.scrollIntoView()}>
        <FaAngleUp className="scroll-to-top-icon"></FaAngleUp>
      </button>
    </div>
  );
};

export default Home;
