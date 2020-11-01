import Button from "react-bootstrap/Button";

const GraphBtn = (props) => {
  const cssClasses = ["px-3"];
  if (props.appendClassName) {
    cssClasses.push(...props.appendClassName.split(" "));
  }

  return (
    <Button variant="light" className={cssClasses.join(" ")} {...props}>
      {props.children}
    </Button>
  );
};

export default GraphBtn;
