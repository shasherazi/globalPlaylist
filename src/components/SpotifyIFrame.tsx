import styles from "../stlyes/SpotifyIFrame.module.css";

function SpotifyIFrame() {
  return (
    <iframe
      className={styles.spotifyIFrame}
      src="https://open.spotify.com/embed/playlist/5guHkOV7FI54QTX9JspOsY?utm_source=generator&theme=0"
      height="370"
      width="100%"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

export default SpotifyIFrame;
