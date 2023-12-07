import PropTypes from "prop-types";

const CardDescription = ({ description }) => {
  return (
    <div>
      <p className="mt-6 text-base leading-7 text-gray-600">{description}</p>
    </div>
  );
};

CardDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default CardDescription;
