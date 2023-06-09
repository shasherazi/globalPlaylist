import { useRef } from "react";
import Form from "./components/Form";
import SpotifyIFrame from "./components/SpotifyIFrame";
import "./stlyes/App.css";

function App() {
  const iframe = useRef<HTMLIFrameElement>(null);
  return (
    <>
      <div className="header">
        <h1 className="title">Global Spotify playlist</h1>
        <div className="social-badges">
          <a
            href="https://www.buymeacoffee.com/syedhassanaskri"
            target="_blank"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              className="coffee"
              alt="Buy Me A Coffee"
            />
          </a>
          <a
            href="https://github.com/shasherazi/globalPlaylist"
            target="_blank"
          >
            <img
              src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
              className="github"
              alt="Github logo"
            />
          </a>
        </div>
      </div>
      <p className="description">
        Add your favorite song to the playlist and listen to it with the rest of
        the world!
      </p>
      <br />
      <Form ref={iframe} />
      <SpotifyIFrame ref={iframe} />
      <p className="footer">
        Or see the playlist on Spotify{" "}
        <a
          href="https://open.spotify.com/playlist/5guHkOV7FI54QTX9JspOsY"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </p>
    </>
  );
}

export default App;
