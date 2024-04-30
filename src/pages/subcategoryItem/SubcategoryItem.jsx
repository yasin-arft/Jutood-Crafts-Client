import { useLoaderData, useParams } from "react-router-dom";
import SubcategoryCard from "./SubcategoryCard";

const SubcategoryItem = () => {
  const loadedData = useLoaderData();
  const { subcategoryName } = useParams();

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-4">Art & Craft for {subcategoryName} subcategory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {
          loadedData.map(data => <SubcategoryCard key={data._id} data={data} />)
        }
      </div>
    </div>
  );
};

export default SubcategoryItem;