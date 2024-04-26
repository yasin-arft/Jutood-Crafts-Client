import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <h3 className="text-2xl font-semibold font-pacifico">Oops!</h3>
      <p>An un expected error happened</p>
      <h2 className="text-9xl font-bold font-pacifico">{error.status}</h2>
      <p>{error.message || error.statusText}</p>
      <button onClick={() => navigate(-1)} className="btn bg-primary text-white hover:bg-secondary">Go Back</button>
    </div>
  );
};

export default Error;