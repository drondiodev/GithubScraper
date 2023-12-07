import PropTypes from "prop-types";

const CardLanguage = ({ language }) => {
  return (
    <div>
      <p className="mt-6 text-base leading-7 text-gray-600">{description}</p>
    </div>
  );
};

CardLanguage.propTypes = {
  description: PropTypes.string.isRequired,
};

export default CardLanguage;
