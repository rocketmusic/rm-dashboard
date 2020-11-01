import { useState, useEffect } from "react";
import uniqid from "uniqid";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { FaHeart, FaUser, FaMusic } from "react-icons/fa";
import Header from "./components/Header/Header";
import Graph from "./components/Graph/Graph";
import Feed from "./components/Feed/Feed";
import LikeCard from "./components/LikeCard/LikeCard";
import ArtistCard from "./components/ArtistCard/ArtistCard";
import SongCard from "./components/SongCard/SongCard";
import { genLikes, genArtists, genSongs } from "./utils";

import styles from "./App.module.css";

const App = () => {
  const [currFeed, setCurrFeed] = useState("LIKES");
  const [likes, setLikes] = useState(genLikes());
  const [artists, setArtists] = useState(genArtists());
  const [songs, setSongs] = useState(genSongs());

  console.log(likes);

  let feed;
  switch (currFeed) {
    case "LIKES":
      feed = (
        <Feed title="Likes" icon={<FaHeart />}>
          {likes.map((like, idx) => (
            <LikeCard key={uniqid()} data={like} />
          ))}
        </Feed>
      );
      break;
    case "ARTISTS":
      feed = (
        <Feed title="Artistas" icon={<FaUser />}>
          {artists.map((artist, idx) => (
            <ArtistCard key={idx} data={artist} />
          ))}
        </Feed>
      );
      break;
    case "SONGS":
      feed = (
        <Feed title="Lançamentos" icon={<FaMusic />}>
          {songs.map((song, idx) => (
            <SongCard key={idx} data={song} />
          ))}
        </Feed>
      );
      break;
    default:
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLikes((likes) => [{ artistId: 121212, likes: 1000 }, ...likes]);
  //   }, 2000);
  // });

  return (
    <div className={styles.Container}>
      <Header />
      <div className={styles.MainContent}>
        <div>
          <Graph title="Artistas em alta" graphIdx={0} className="mb-5" />
          <Graph
            title="Artistas em alta por gênero"
            graphIdx={1}
            buttons={[
              { label: "Funk", graphIdx: 1 },
              { label: "Sertanejo", graphIdx: 2 },
            ]}
          />
        </div>

        <div className={styles.FeedsContainer}>
          <h2 className="mb-3">Seus feeds</h2>
          <div className="mb-2">
            <ButtonGroup size="lg">
              <Button
                variant="dark"
                className="d-flex align-items-center px-4 py-3"
                onClick={() => setCurrFeed("LIKES")}
                active={currFeed === "LIKES"}
                disabled={currFeed === "LIKES"}
              >
                <FaHeart />
              </Button>
              <Button
                variant="dark"
                className="d-flex align-items-center px-4 py-3"
                onClick={() => setCurrFeed("ARTISTS")}
                active={currFeed === "ARTISTS"}
                disabled={currFeed === "ARTISTS"}
              >
                <FaUser />
              </Button>
              <Button
                variant="dark"
                className="d-flex align-items-center px-4 py-3"
                onClick={() => setCurrFeed("SONGS")}
                active={currFeed === "SONGS"}
                disabled={currFeed === "SONGS"}
              >
                <FaMusic />
              </Button>
            </ButtonGroup>
          </div>
          {feed}
        </div>
      </div>
    </div>
  );
};

export default App;
