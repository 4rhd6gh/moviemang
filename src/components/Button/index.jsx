import PropTypes from "prop-types";

export default function Button(props) {
  const {
    variant,
    text,
    type,
    form,
    value = "",
    width = "w-20",
    height = "h-10",
    margin = "my-2",
    backgroundColor,
    borderRadius = "",
    color,
    disabled = false,
    focus = false,
    onClick,
  } = props;

  let buttonType = "";
  if (variant === "contained") {
    buttonType = disabled
      ? "bg-gray-600 text-gray-300 cursor-not-allowed"
      : "bg-sky-700 text-gray-100";
  } else if (variant === "outlined") {
    buttonType = disabled
      ? "border-2 border-gray-300 text-gray-300 cursor-not-allowed"
      : "text-indigo-900 border-2 border-indigo-900 hover:bg-indigo-100";
  } else {
    buttonType = null;
  }

  let buttonFocus = focus;
  buttonFocus = buttonFocus
    ? "focus:outline-none focus:ring-1 focus:ring-offset-2"
    : "";

  return (
    <button
      disabled={disabled}
      type={type}
      form={form}
      value={value}
      className={` cursor-pointer ${margin} ${borderRadius} ${width} ${height} ${color} ${buttonType} ${buttonFocus} ${backgroundColor} `}
      onClick={disabled ? null : onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined"]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  form: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,
  onClick: PropTypes.func,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
};
