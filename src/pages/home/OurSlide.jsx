import PropTypes from 'prop-types';

const OurSlide = ({ sliderData }) => {
  const { image, title } = sliderData;
  return (
    <div>
      <div className="hero min-h-52 md:h-[80vh]" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full">
            <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};



OurSlide.propTypes = {
  sliderData: PropTypes.object
};

export default OurSlide;