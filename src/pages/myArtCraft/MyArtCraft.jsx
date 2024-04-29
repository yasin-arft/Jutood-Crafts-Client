import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyArtCraftCard from "./MyArtCraftCard";
import { useQuery } from "@tanstack/react-query";

const MyArtCraft = () => {
  const { currentUser: { email } } = useContext(AuthContext);

  // tanstack query
  const { data, refetch } = useQuery({
    queryKey: ['myCrafts'],
    queryFn: async () => {
      const res = await fetch(`https://jutood-crafts-server.vercel.app/my_crafts/${email}`)
      const data = await res.json()
      return data;
    }
  });

  return (
    <section>
      <h2 className="text-3xl font-semibold text-center my-4">My Art and Craft</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {
          data?.map(item => <MyArtCraftCard key={item._id} item={item} refetch={refetch} />)
        }
      </div>
    </section>
  );
};

export default MyArtCraft;