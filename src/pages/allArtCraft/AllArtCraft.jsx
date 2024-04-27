import { useLoaderData } from "react-router-dom";

const AllArtCraft = () => {
  const data = useLoaderData();

  return (
    <section>
      <h2 className="text-3xl font-semibold text-center my-4">All Art & Crafts</h2>
      
    </section>
  );
};

export default AllArtCraft;