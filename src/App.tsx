import Form from "./components/Form";
import SpotifyIFrame from "./components/SpotifyIFrame";
import "./stlyes/App.css";

function App() {
  return (
    <>
      <h1 className="title">Global Spotify playlist</h1>
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
          href="https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j"
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
