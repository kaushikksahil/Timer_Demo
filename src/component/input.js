const Input = (props) => {
  const label = {
    paddingRight: "10px",
    fontSize: "1.1rem",
    fontWeight: "600",
  };
  return (
    <div>
      <label htmlFor={props.input.id} style={label}>
        {props.label}
      </label>
      <input {...props.input} onChange={props.onChange} />
    </div>
  );
};

export default Input;
