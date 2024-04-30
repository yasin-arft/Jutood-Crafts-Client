import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SubcategoryCard = ({ data }) => {
  const { _id, photo, itemName, sortDescription, subcategoryName, price, rating, processingTime
  } = data;
  const navigate = useNavigate();

  return (
    <div className="card card-compact shadow-xl">
      <figure className='h-52 w-full'>
        <img className='w-full h-full' src={photo} alt={`${itemName}image`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{itemName}</h2>
        <p>{sortDescription}</p>
        <div className='flex flex-col gap-2'>
          <span><span className='font-medium'>Subcategory name:</span> {subcategoryName}</span>
          <span><span className='font-medium'>Processing Time :</span> {processingTime}</span>
        </div>
        <div className='flex justify-between'>
          <span><span className='font-medium'>Price:</span> {price}</span>
          <span><span className='font-medium'>Rating:</span> {rating}</span>
        </div>
        <div className="card-actions">
          <button onClick={() => navigate(`/item_details/${_id}`)} className="btn bg-primary hover:bg-secondary text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};

SubcategoryCard.propTypes = {
  data: PropTypes.object
};

export default SubcategoryCard;