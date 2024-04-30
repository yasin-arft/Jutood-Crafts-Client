import { useEffect, useState } from "react";
import CraftCatCard from "./CraftCatCard";

const CraftsCategories = () => {
  const [craftCat, setCraftCat] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/crafts_sub_cate')
      .then(res => res.json())
      .then(data => {
        setCraftCat(data);
      })
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-4 font-pacifico">Art & Craft Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {
          craftCat?.map(item => <CraftCatCard key={item._id} data={item} />)
        }
      </div>
    </div>
  );
};

export default CraftsCategories;