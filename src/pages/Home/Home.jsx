import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Banner/Navbar/Navbar";
import BookNow from "../../components/BookNow/BookNow";
import CallAgent from "../../components/CallAgent/CallAgent";
import CallNowBottom from "../../components/CallNowBottom/CallNowBottom";
import NumbersSpeak from "../../components/NumbersSpeak/NumbersSpeak";
import TaxiFares from "../../components/TaxiFares/TaxiFares";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <div className="bg-dark h-[12.9rem] sm:hidden"></div>
      <Navbar></Navbar>
      <Banner></Banner>
      <BookNow></BookNow>
      <NumbersSpeak></NumbersSpeak>
      <CallAgent></CallAgent>
      <WhyChooseUs></WhyChooseUs>
      <TaxiFares></TaxiFares>
      <CallNowBottom></CallNowBottom>
    </div>
  );
};

export default Home;
