const Input = (props) => {
  return <input value={props.text} className={props.style} {...props} />;
};

export default Input;
