import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FeedCard from "../FeedCard/FeedCard";

const SongCard = (props) => {
  const { name, artistId, date } = props.data;

  return (
    <FeedCard>
      <Row noGutters className="align-items-center">
        <Col>
          <strong>{name}</strong>
        </Col>
        <Col xs={2}>{artistId}</Col>
        <Col xs={3} className="text-right">
          {date.format("D/M/YYYY")}
        </Col>
      </Row>
    </FeedCard>
  );
};

export default SongCard;
