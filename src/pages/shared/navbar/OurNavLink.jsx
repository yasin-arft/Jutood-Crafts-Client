import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const OurNavLink = ({item}) => {
  return (
    <li><NavLink to={item.path}>{item.text}</NavLink></li>
  );
};

OurNavLink.propTypes = {
  item: PropTypes.object
};

export default OurNavLink;