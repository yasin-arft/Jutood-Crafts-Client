import AboutUs from "./AboutUs";
import Banner from "./Banner";
import GetInTouch from "./GetInTouch";
import CraftsCategories from "./craftCategories/CraftsCategories";
import CraftItems from "./craftItems/CraftItems";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <CraftItems />
      <CraftsCategories />
      <GetInTouch />
    </div>
  );
};

export default Home;