import styles from "./Feed.module.css";

const Feed = (props) => {
  return (
    <div className={`${styles.Feed} rounded bg-dark shadow-lg p-3`}>
      <h2 className="d-flex align-items-center">
        {props.icon}
        <div className="ml-2">{props.title}</div>
      </h2>
      <div className={styles.FeedContent}>{props.children}</div>
    </div>
  );
};

export default Feed;
