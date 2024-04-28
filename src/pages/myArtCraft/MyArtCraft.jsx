import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyArtCraftCard from "./MyArtCraftCard";

const MyArtCraft = () => {
  const { currentUser: { email } } = useContext(AuthContext);
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/my_crafts/${email}`)
      .then(res => res.json())
      .then(data => {
        setMyItems(data);
      })
  }, [email]);

  return (
    <section>
      <h2 className="text-3xl font-semibold text-center my-4">My Art and Craft</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {
          myItems.map(item => <MyArtCraftCard key={item._id} data={item} />)
        }
      </div>
    </section>
  );
};

export default MyArtCraft;