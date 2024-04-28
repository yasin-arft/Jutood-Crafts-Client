import PropTypes from 'prop-types';

const MyArtCraftCard = ({ data }) => {
  const { customization, itemName, photo, price, rating, stockStatus } = data;

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
        <div className="card-actions justify-between">
          <button className="btn bg-primary hover:bg-secondary text-white">Update</button>
          <button className="btn border border-dark hover:bg-red-600 hover:text-white">Delete</button>
        </div>
      </div>
    </div>
  );
};

MyArtCraftCard.propTypes = {
  data: PropTypes.object
};
export default MyArtCraftCard;