import { useLoaderData } from "react-router-dom";
import { FaRegHandPointRight } from "react-icons/fa6";

const CraftDetails = () => {
  const { customization, itemName, photo, price, processingTime, rating, sortDescription, stockStatus, subcategoryName } = useLoaderData();

  return (
    <section>
      <div className="hero my-5">
        <div className="hero-content flex-col lg:flex-row w-full gap-8">
          <figure className="max-w-sm">
            <img src={photo} className="w-full h-auto rounded-lg shadow-2xl" />
          </figure>
          <div className="flex-1">
            <h2 className="text-3xl font-bold">{itemName}</h2>
            <p className="py-4">{sortDescription}</p>
            <span className="font-medium">Subcategory: {subcategoryName}</span>
            <hr className="text-dark my-3" />
            <ul className="">
              <li className="flex gap-2 items-center"><FaRegHandPointRight /> <span className="font-medium">Customizaton: <span className="font-normal">{customization}</span></span> </li>
              <li className="flex gap-2 items-center"><FaRegHandPointRight /> <span className="font-medium">Processing Time: <span className="font-normal">{processingTime}Hours</span></span> </li>
              <li className="flex gap-2 items-center"><FaRegHandPointRight /> <span className="font-medium">Rating: <span className="font-normal">{rating}</span></span> </li>
              <li className="flex gap-2 items-center"><FaRegHandPointRight /> <span className="font-medium">Stock Status: <span className="font-normal">{stockStatus}</span></span> </li>
              <li className="flex gap-2 items-center"><FaRegHandPointRight /> <span className="font-medium">Price <span className="font-normal">{price}BDT</span></span> </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftDetails;