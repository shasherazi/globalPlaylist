import Form from "./components/Form";
import SpotifyIFrame from "./components/SpotifyIFrame";
import "./stlyes/App.css";

function App() {
  return (
    <>
      <div className="header">
        <h1 className="title">Global Spotify playlist</h1>
        <a href="https://www.buymeacoffee.com/syedhassanaskri" target="_blank">
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            className="coffee"
            alt="Buy Me A Coffee"
          />
        </a>
      </div>
      <p className="description">
        Add your favorite song to the playlist and listen to it with the rest of
        the world! Songs will be removed after 30 days of being added.
      </p>
      <br />
      <Form />
      <SpotifyIFrame />
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
