import PropTypes from "prop-types";

function NavBar({ children }) {
  return <div className="grid-rows-2 bg-yellow-500  p-4 ">{children}</div>;
}

export default NavBar;

NavBar.propTypes = {
  children: PropTypes.node,
};
