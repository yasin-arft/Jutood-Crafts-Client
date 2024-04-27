import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    return
  }

  if (currentUser) {
    return children
  }

  return (<Navigate to={'/login'} />);
};

PrivateRoute.propTypes = {
  children: PropTypes.node
};

export default PrivateRoute;


