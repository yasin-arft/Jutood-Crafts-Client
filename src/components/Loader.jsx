import Lottie from "lottie-react";
import loader from "/loader.json";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full absolute top-0 left-0">
      <Lottie
        animationData={loader}
      />
    </div>
  );
};

export default Loader;