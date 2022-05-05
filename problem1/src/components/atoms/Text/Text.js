const Text = (props) => {
  if (!props.text) return null;

  function createMarkup() {
    if (props.text) return { __html: props.text };
    else return { __html: "" };
  }
  return (
    <div
      style={props.style}
      className={props.classnames}
      dangerouslySetInnerHTML={createMarkup()}
      onClick={props.onClick}
      {...props}
    />
  );
};

export default Text;
