import { useLoaderData, useNavigate } from "react-router-dom";

const AllArtCraft = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  return (
    <section>
      <h2 className="text-3xl font-semibold text-center my-4">All Art & Crafts</h2>
      <div className="overflow-x-auto mb-6">
        <table className="table border text-center">
          {/* head */}
          <thead>
            <tr className="font-bold text-base">
              <th>Sl</th>
              <th>Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, idx) => {
                return (
                  <tr key={item._id}>
                    <th>{idx + 1}</th>
                    <td>{item.itemName}</td>
                    <td>{item.price}</td>
                    <td>{item.rating}</td>
                    <td><button onClick={() => navigate(`item_details/${item._id}`)} className="btn bg-primary hover:bg-secondary text-white">View Details</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllArtCraft;