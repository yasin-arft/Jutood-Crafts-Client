import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const MyArtCraftCard = ({ item, refetch }) => {
  const { _id, customization, itemName, photo, price, rating, stockStatus } = item;

  const handleDelete = id => {
    // warning
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // if confirmed 
        fetch(`http://localhost:5000/crafts/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount) {
              // delete confirmation 
              Swal.fire({
                title: "Deleted!",
                text: "Your craft item has been deleted.",
                icon: "success"
              });

              refetch();
            }
          });
      }
    });

  };

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
          <button onClick={() => handleDelete(_id)} className="btn border border-dark hover:bg-red-600 hover:text-white">Delete</button>
        </div>
      </div>
    </div>
  );
};

MyArtCraftCard.propTypes = {
  item: PropTypes.object,
  refetch: PropTypes.func
};
export default MyArtCraftCard;