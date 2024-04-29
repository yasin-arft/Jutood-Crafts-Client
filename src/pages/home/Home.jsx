import AboutUs from "./AboutUs";
import Banner from "./Banner";
import GetInTouch from "./GetInTouch";
import CraftItems from "./craftItems/CraftItems";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <CraftItems />
      <GetInTouch />
    </div>
  );
};

export default Home;