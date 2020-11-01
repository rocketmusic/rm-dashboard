import random from "random";
import randomDate from "random-date-generator";
import moment from "moment";

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

const DEFAULT_ARTISTS = [
  {
    artistId: 718013,
    genre: "Pop",
    followers: random.int(3000, 5000),
    contactInfo: {
      name: "Marco Aurelio Santos",
      email: "marco@popmusic.com.br",
      phone: "(21) 94356-1234",
    },
  },
  {
    artistId: 192309,
    genre: "Pop",
    followers: random.int(2000, 3000),
    contactInfo: {
      name: "Leo Abreu",
      email: "leo@breu.net",
      phone: "(11) 98765-2174",
    },
  },
  { artistId: 257824, genre: "EDM", followers: random.int(1500, 2000) },
  { artistId: 523457, genre: "Sertanejo", followers: random.int(1000, 1500) },
  { artistId: 754336, genre: "Sertanejo", followers: random.int(900, 1000) },
  { artistId: 241244, genre: "Sertanejo", followers: random.int(800, 900) },
  { artistId: 286578, genre: "Sertanejo", followers: random.int(600, 800) },
  { artistId: 901230, genre: "Funk", followers: random.int(1000, 1500) },
  { artistId: 832920, genre: "Funk", followers: random.int(800, 1000) },
  { artistId: 209902, genre: "Funk", followers: random.int(600, 800) },
  { artistId: 569409, genre: "Funk", followers: random.int(400, 600) },
];
const ARTIST_IDS = Object.values(DEFAULT_ARTISTS).map((val) => val.artistId);

const DEFAULT_SONG_NAMES = [
  "Não Valorizou, Perdeu",
  "Don't Leave Me Hanging",
  "I Heard",
  "O Pai Tá On",
  "Sleep Forever",
];

export const genLikes = (qty = 10) => {
  const likes = [];

  for (let i = 0; i < qty; i++) {
    likes.push({ artistId: choose(ARTIST_IDS), likes: random.int(1, 1000) });
  }

  return likes.sort((a, b) => b.likes - a.likes);
};

export const genArtists = () => {
  const sortByFollowers = (a, b) => b.followers - a.followers;

  const high = DEFAULT_ARTISTS.filter((artist) => artist.contactInfo).sort(
    sortByFollowers
  );

  const low = DEFAULT_ARTISTS.filter((artist) => !artist.contactInfo).sort(
    sortByFollowers
  );

  return [...high, ...low];
};

export const genSongs = () =>
  DEFAULT_SONG_NAMES.map((songName) => ({
    name: songName,
    artistId: choose(ARTIST_IDS),
    date: moment(
      randomDate.getRandomDateInRange(
        new Date(2020, 10, 1),
        new Date(2020, 11, 1)
      )
    ),
  })).sort((a, b) => (a.date.isSameOrBefore(b.date) ? 1 : -1));
