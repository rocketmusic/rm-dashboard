import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaSearch, FaDollarSign } from "react-icons/fa";
import FeedCard from "../FeedCard/FeedCard";
import Modals from "../Modals";

const ArtistCard = (props) => {
  const [isInspecting, setIsInspecting] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const { artistId, genre, followers } = props.data;

  return (
    <>
      <FeedCard>
        <Row noGutters className="align-items-center">
          <Col xs={4}>
            <strong>ID: {artistId}</strong>
          </Col>
          <Col xs={4}>
            <strong>Gênero:</strong> {genre}
          </Col>
          <Col className="d-flex justify-content-end">
            <strong>{followers}</strong>
          </Col>
          <Col xs={3} className="d-flex justify-content-end">
            <Button
              size="sm"
              className="mr-1"
              onClick={() => setIsInspecting(true)}
              active={isInspecting}
            >
              <small className="d-flex align-items-center">
                <FaSearch />
              </small>
            </Button>
            <Button
              size="sm"
              variant="success"
              disabled={props.data.contactInfo}
              title={
                props.data.contactInfo
                  ? "Você já comprou as informações desse artista"
                  : ""
              }
              onClick={() => setIsBuying(true)}
              active={isBuying}
            >
              <small className="d-flex align-items-center">
                <FaDollarSign />
              </small>
            </Button>
          </Col>
        </Row>
      </FeedCard>
      <Modals.Buying
        show={isBuying}
        onHide={() => setIsBuying(false)}
        artistId={artistId}
      />
      <Modals.Inspecting
        show={isInspecting}
        onHide={() => setIsInspecting(false)}
        artistId={artistId}
        contactInfo={props.data.contactInfo}
      />
    </>
  );
};

export default ArtistCard;
