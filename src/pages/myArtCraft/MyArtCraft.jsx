import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyArtCraftCard from "./MyArtCraftCard";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const MyArtCraft = () => {
  const { currentUser: { email } } = useContext(AuthContext);

  // react hook form
  const { register, handleSubmit } = useForm();

  // tanstack query
  const { data: loadedData, refetch, isPending , status } = useQuery({
    queryKey: ['myCrafts'],
    queryFn: async () => {
      const res = await fetch(`https://jutood-crafts-server.vercel.app/my_crafts/${email}`)
      const data = await res.json()
      return data;
    }
  });

  if (isPending) {
    return
  }

  const [craftsData, setCraftsData] = useState(loadedData);

  // filter handler
  const handleFilter = data => {
    const value = data.subcategoryName;
    const newData = loadedData.filter(item => item.customization === value);
    setCraftsData(newData);
  }

  return (
    <section>
      <h2 className="text-3xl font-semibold text-center my-4">My Art and Craft</h2>
      <div className="flex flex-col items-center mb-6">
        <h3 className="font-medium text-lg">Filter by</h3>

        <form onSubmit={handleSubmit(handleFilter)}>
          <select {...register('subcategoryName', {
            required: 'Subcategory is required'
          })} className="select select-bordered">
            <option value={''}>Customization</option>
            <option value={'Yes'}>Yes</option>
            <option value={'No'}>No</option>
          </select>

          <input
            type="submit"
            value="Filter"
            className="btn bg-primary text-white mt-3 hover:bg-secondary" />
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {
          craftsData?.map(item => <MyArtCraftCard key={item._id} item={item} refetch={refetch} />)
        }
      </div>
    </section>
  );
};

export default MyArtCraft;