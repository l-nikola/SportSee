import PropTypes from "prop-types";

export default function SidebarButton({ icon }) {
  return (
    <button className="sidebarButton">
      <img src={icon} alt="Icon" />
    </button>
  );
}

SidebarButton.propTypes = {
  icon: PropTypes.string.isRequired,
};
