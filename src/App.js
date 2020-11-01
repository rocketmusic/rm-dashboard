import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { FaHeart, FaUser, FaMusic } from "react-icons/fa";

import graph1Pic from "./assets/graph-1.png";
import graph2FunkPic from "./assets/graph-2-funk.png";
import graph2SertanejoPic from "./assets/graph-2-sertanejo.png";

import styles from "./App.module.css";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState();
  const [selectedFeed, setSelectedFeed] = useState("LIKES");

  let graph2;
  switch (selectedGenre) {
    case "FUNK":
      graph2 = <img src={graph2FunkPic} alt="Graph 1" height="250px" />;
      break;
    case "SERTANEJO":
      graph2 = <img src={graph2SertanejoPic} alt="Graph 1" height="250px" />;
      break;
    default:
      graph2 = (
        <div className={`${styles.GraphContainer} rounded`}>
          <em>Selecione um gênero</em>
        </div>
      );
  }

  return (
    <div className={styles.Container}>
      <div>Header</div>
      <div className={styles.MainContent}>
        <div>
          <div className="mb-5">
            <h2 className="mb-3">Artistas em alta</h2>
            <img src={graph1Pic} alt="Graph 1" height="250px" />
          </div>
          <div>
            <h2 className="mb-3">Artistas por gênero</h2>
            <div className="mb-2">
              <Button
                variant="light"
                className="px-3 mr-2"
                onClick={() => setSelectedGenre("FUNK")}
                active={selectedGenre === "FUNK"}
                disabled={selectedGenre === "FUNK"}
              >
                Funk
              </Button>
              <Button
                variant="light"
                className="px-3"
                onClick={() => setSelectedGenre("SERTANEJO")}
                active={selectedGenre === "SERTANEJO"}
                disabled={selectedGenre === "SERTANEJO"}
              >
                Sertanejo
              </Button>
            </div>
            {graph2}
          </div>
        </div>

        <div className={styles.FeedsContainer}>
          <h2 className="mb-3">Seus feeds</h2>
          <div className="mb-2">
            <ButtonGroup size="lg">
              <Button
                variant="dark"
                className="d-flex align-items-center px-4 py-3"
                onClick={() => setSelectedFeed("LIKES")}
                active={selectedFeed === "LIKES"}
                disabled={selectedFeed === "LIKES"}
              >
                <FaHeart />
              </Button>
              <Button
                variant="dark"
                className="d-flex align-items-center px-4 py-3"
                onClick={() => setSelectedFeed("ARTISTS")}
                active={selectedFeed === "ARTISTS"}
                disabled={selectedFeed === "ARTISTS"}
              >
                <FaUser />
              </Button>
              <Button
                variant="dark"
                className="d-flex align-items-center px-4 py-3"
                onClick={() => setSelectedFeed("SONGS")}
                active={selectedFeed === "SONGS"}
                disabled={selectedFeed === "SONGS"}
              >
                <FaMusic />
              </Button>
            </ButtonGroup>
          </div>
          <div className={`${styles.FeedContent} rounded bg-dark shadow-lg`}>
            CONTEÚDO DO FEED: {selectedFeed}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
