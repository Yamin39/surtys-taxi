import { FaAngleUp } from "react-icons/fa6";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Banner/Navbar/Navbar";
import BookNow from "../../components/BookNow/BookNow";
import CallAgent from "../../components/CallAgent/CallAgent";
import CallNowBottom from "../../components/CallNowBottom/CallNowBottom";
import ChooseTaxi from "../../components/ChooseTaxi/ChooseTaxi";
import FirstChoice from "../../components/FirstChoice/FirstChoice";
import Footer from "../../components/Footer/Footer";
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
      <Testimonials></Testimonials>
      <NewsBlogs></NewsBlogs>
      <CallNowBottom></CallNowBottom>
      <Footer></Footer>

      <button className="scroll-to-top" onClick={() => document.getElementById("home").scrollIntoView()}>
        <FaAngleUp className="scroll-to-top-icon"></FaAngleUp>
      </button>
    </div>
  );
};

export default Home;
