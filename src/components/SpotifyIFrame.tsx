import styles from "../stlyes/SpotifyIFrame.module.css";

function SpotifyIFrame() {
  return (
    <iframe
      className={styles.spotifyIFrame}
      src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5trt9i14X7j?utm_source=generator"
      width="100%"
      height="400"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

export default SpotifyIFrame;
