import PropTypes from "prop-types";

const CardTitle = ({ title }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
        {title}
      </h3>
    </div>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardTitle;
