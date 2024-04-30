import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CraftCatCard = ({ data }) => {
  const { subcategoryName, photo, title } = data;
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/subcategory_item/${subcategoryName}`)} className="card card-compact shadow-xl cursor-pointer">
      <figure className='h-52 w-full'>
        <img className='w-full h-full' src={photo} alt={`${title}image`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title text-lg">{subcategoryName}</h2>
      </div>
    </div>
  );
};

CraftCatCard.propTypes = {
  data: PropTypes.object
};

export default CraftCatCard;