import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleRegister = data => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photo = data.photo;

    console.log(name, email, password, photo);
  }

  return (
    <div className="max-w-md mx-auto mb-6 md:mb-8 lg:mb-10">
      <form onSubmit={handleSubmit(handleRegister)}>
        {/* name */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Name</span>
          </div>
          <input
            {...register('name')}
            type="text"
            placeholder="Your name"
            className="input input-bordered w-full"
          />
        </label>

        {/* email */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Email</span>
          </div>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please provide a valid email'
              }
            })}
            type="email"
            placeholder="example@email.com"
            className="input input-bordered w-full" />
        </label>
        {errors.email && (<small className="text-error">{errors.email.message}</small>)}

        {/* password */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Password</span>
          </div>
          <div className="relative">
            <input
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                  message: 'Password must contain an uppercase letter, lowercase letter and 6 characters'
                }
              })}
              type={
                showPassword ?
                  'text' :
                  'password'
              }
              placeholder="Your password"
              className="input input-bordered w-full" />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2" >
              {
                showPassword ?
                  <FaEye /> :
                  <FaEyeSlash />
              }
            </span>
          </div>
        </label>
        {errors.password && (<small className="text-error">{errors.password.message}</small>)}

        {/* photo url */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Photo Url</span>
          </div>
          <input
            {...register('photo')}
            type="text"
            placeholder="Paste your photo url"
            className="input input-bordered w-full" />
        </label>

        {/* form submit button */}
        <input
          type="submit"
          value="Register"
          className="btn bg-primary text-white w-full mt-3 hover:bg-secondary" />

        {/* redirect to register */}
        <p className="mt-4">Already have an account? Please <Link className="underline text-blue-700" to={'/login'}>Login</Link></p>
      </form>
    </div>
  );
};

export default Register;