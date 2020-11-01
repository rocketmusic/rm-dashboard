const FeedCard = (props) => {
  const cssClasses = ["border-bottom"];
  if (props.paddingY || props.paddingY === 0)
    cssClasses.push("px-2", `py-${props.paddingY}`);
  else cssClasses.push("p-2");

  return <div className={cssClasses.join(" ")}>{props.children}</div>;
};

export default FeedCard;
