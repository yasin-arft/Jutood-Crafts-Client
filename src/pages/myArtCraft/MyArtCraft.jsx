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
      <h2 className="text-3xl font-semibold text-center my-4">Please Login!</h2>

      <div>
        {
          myItems.map(item => <MyArtCraftCard key={item._id} data={item} />)
        }
      </div>
    </section>
  );
};

export default MyArtCraft;