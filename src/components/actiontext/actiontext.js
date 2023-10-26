import PropTypes from 'prop-types';

const ActionText = (props) => {
  const { label } = props;
  return (
    <>
      <button className="active-button" onClick="/" disabled="false">
        {label}
      </button>
    </>
  );
};

ActionText.propTypes = {
  label: PropTypes.any.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default ActionText;
