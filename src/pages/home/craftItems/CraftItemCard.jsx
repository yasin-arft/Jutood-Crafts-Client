import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CraftItemCard = ({ data }) => {
  const { _id, photo, itemName, price, rating, customization, stockStatus } = data;
  const navigate = useNavigate();
  
  return (
    <div className="card card-compact shadow-xl">
      <figure className='h-52 w-full'>
        <img className='w-full h-full' src={photo} alt={`${itemName}image`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{itemName}</h2>
        <div className='flex justify-between'>
          <span><span className='font-medium'>Price:</span> {price}</span>
          <span><span className='font-medium'>Rating:</span> {rating}</span>
        </div>
        <div className='flex flex-col gap-2'>
          <span><span className='font-medium'>Customization:</span> {customization}</span>
          <span><span className='font-medium'>Stock status:</span> {stockStatus}</span>
        </div>
        <div className="card-actions">
        <button onClick={() => navigate(`/item_details/${_id}`)} className="btn bg-primary hover:bg-secondary text-white">View Details</button>
        </div>
      </div>
    </div>
  );
};

CraftItemCard.propTypes = {
  data: PropTypes.object
};

export default CraftItemCard;