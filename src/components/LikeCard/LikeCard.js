import FeedCard from "../FeedCard/FeedCard";

const LikeCard = (props) => {
  const { artistId, likes } = props.data;

  return (
    <FeedCard animate={props.animate}>
      <div className="text-center">
        O artista{" "}
        <strong>
          <em>ID:</em> {artistId}
        </strong>{" "}
        recebeu <strong>{likes}</strong> likes ontem.
      </div>
    </FeedCard>
  );
};

export default LikeCard;
