import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {
  const itemData = useLoaderData();

  // react hook form
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm({
    defaultValues: itemData
  });

  // add handler
  const handleUpdate = data => {
    // warning
    Swal.fire({
      title: "Are you sure?",
      text: "You want to update this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://jutood-crafts-server.vercel.app/crafts/${itemData._id}`, {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(data => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Updated!",
                text: "Your craft item has been updated.",
                icon: "success"
              });
            }
          });
      }
    }
    );
  };

  // reset form
  useEffect(() => {
    if (!isSubmitSuccessful) { return }

    reset();
  }, [isSubmitSuccessful]);

  return (
    <section className="max-w-xl mx-auto mb-6 md:mb-8 lg:mb-10">
      <h2 className="text-3xl font-semibold text-center my-4 font">Update {itemData.itemName}</h2>

      <form onSubmit={handleSubmit(handleUpdate)}>

        <div className="md:flex md:gap-5">
          {/* name */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">Item name</span>
            </div>
            <input
              {...register('itemName')}
              type="text" placeholder="Enter item name" className="input input-bordered w-full" />
          </label>

          {/* category */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">Subcategory</span>
            </div>
            <select {...register('subcategoryName', {
              required: 'Subcategory is required'
            })} className="select select-bordered">
              <option value={''}>Select Subcategory</option>
              <option value={'Wooden Furniture & Sculptures'}>Wooden Furniture & Sculptures</option>
              <option value={'Wooden Home Decor'}>Wooden Home Decor</option>
              <option value={'Wooden Utensils and Kitchenware'}>Wooden Utensils and Kitchenware</option>
              <option value={'Jute Home Decor'}>Jute Home Decor</option>
              <option value={'Jute Kitchenware & utensils'}>Jute Kitchenware & utensils</option>
              <option value={'Jute and wooden jewellery'}>Jute and wooden jewellery</option>
            </select>
            {errors.subcategoryName && (<small className="text-error mt-2">{errors.subcategoryName.message}</small>)}
          </label>
        </div>

        {/* photo url */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">PhotoUrl</span>
          </div>
          <input
            {...register('photo')}
            type="text" placeholder="Enter photo url" className="input input-bordered w-full" />
        </label>

        {/* short description */}
        <label className="form-control">
          <div className="label">
            <span className="label-text text-base font-medium">Short Description</span>
          </div>
          <textarea {...register('sortDescription')} className="textarea textarea-bordered" placeholder="Write sort description"></textarea>
        </label>

        <div className="md:flex md:gap-5">

          {/* price */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">Price</span>
            </div>
            <input
              {...register('price')}
              type="number" placeholder="Enter price" className="input input-bordered w-full" />
          </label>

          {/* rating */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">Rating</span>
            </div>
            <input
              {...register('rating')}
              type="number" placeholder="Enter rating" className="input input-bordered w-full" />
          </label>

          {/* processing time */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-base font-medium">Processing time</span>
            </div>
            <input
              {...register('processingTime')}
              type="number" placeholder="Enter processing time" className="input input-bordered w-full" />
          </label>
        </div>

        <div className="md:flex md:gap-5 mt-2">

          {/* customization */}
          <div className="w-full">
            <span className="label-text text-base font-medium">Customization</span>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Yes</span>
                <input {...register('customization')} value={'Yes'} type="radio" className="radio" />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">No</span>
                <input {...register('customization')} value={'No'} type="radio" className="radio" />
              </label>
            </div>
          </div>

          {/* stock status */}
          <div className="w-full">
            <span className="label-text text-base font-medium">Stock status</span>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">In Stock</span>
                <input {...register('stockStatus')} value={'In stock'} type="radio" className="radio" />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Made to order</span>
                <input {...register('stockStatus')} value={'Made to order'} type="radio" className="radio" />
              </label>
            </div>
          </div>
        </div>

        {/* form submit button */}
        <input
          type="submit"
          value="Update Item"
          className="btn bg-primary text-white w-full mt-3 hover:bg-secondary" />

      </form>
    </section>
  );
};

export default UpdateCraft;