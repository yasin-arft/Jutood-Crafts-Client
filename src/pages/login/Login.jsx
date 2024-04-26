import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  // auth info
  const { loginUser, setLoading } = useContext(AuthContext);

  // react hook form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // login handler
  const handleLogin = data => {
    const email = data.email;
    const password = data.password;

    // login with email and password
    loginUser(email, password)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
  }

  return (
    <div className="max-w-md mx-auto mb-6 md:mb-8 lg:mb-10">
      <h2 className="text-3xl font-semibold text-center my-4">Please Login!</h2>

      {/* login form */}
      <form onSubmit={handleSubmit(handleLogin)}>
        {/* email */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Email</span>
          </div>
          <input
            {...register('email', {
              required: 'Provide your email'
            })}
            type="email" placeholder="example@email.com" className="input input-bordered w-full" />
        </label>
        {errors.email && (<small className="text-error">{errors.email.message}</small>)}

        {/* password */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-base font-medium">Password</span>
          </div>
          <input
            {...register('password', {
              required: 'Provide your password'
            })}
            type="password" placeholder="Your password" className="input input-bordered w-full" />
        </label>
        {errors.password && (<small className="text-error">{errors.password.message}</small>)}

        {/* form submit button */}
        <input type="submit" value="Login" className="btn bg-primary text-white w-full mt-3 hover:bg-secondary" />
      </form>

      {/* redirect to register */}
      <p className="mt-4">Don&#39;t have an account? Please <Link className="underline text-blue-700" to={'/register'}>Register</Link></p>

      <div className="divider">Or</div>

      {/* social login options */}
      <button className="btn w-full border border-secondary hover:border-royal-blue-dark hover:bg-primary hover:text-white">
        <FaGoogle className="text-xl" />
        Login with Google
      </button>
      <button className="btn w-full border border-secondary hover:border-royal-blue-dark hover:bg-primary hover:text-white mt-3">
        <FaGithub className="text-xl" />
        Login with Github
      </button>
    </div>
  );
};

export default Login;