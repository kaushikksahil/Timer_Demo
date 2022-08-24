const Button = (props) => {
  const { color } = props;
  const button = {
    cursor: "pointer",
    font: "inherit",
    border: "none",
    backgroundColor: color,
    color: "white",
    padding: "0.75rem 3rem",
    display: "inline",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "25px",
    fontWeight: "bold",
    marginRight: "5px",
  };

  return (
    <button name={props.value} onClick={props.onClick} style={button}>
      {props.value}
    </button>
  );
};

export default Button;
