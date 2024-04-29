import { useEffect } from "react";
import { useState } from "react";
import CraftItemCard from "./CraftItemCard";

const CraftItems = () => {
  const [craftItems, setCraftItems] = useState([]);

  useEffect(() => {
    fetch('https://jutood-crafts-server.vercel.app/crafts')
      .then(res => res.json())
      .then(data => {
        if (data.length > 6) {
          const newData = data.slice(0, 6);
          setCraftItems(newData);
          return
        }
        setCraftItems(data);
      })
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-semibold text-center my-4 font-pacifico">Craft Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {
          craftItems?.map(item => <CraftItemCard key={item._id} data={item} />)
        }
      </div>
    </section>
  );
};

export default CraftItems;