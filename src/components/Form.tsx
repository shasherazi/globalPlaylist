import styles from "../stlyes/Form.module.css";

function Form() {
  return (
    <div className={styles.form}>
      <label className={styles.formHeading} htmlFor="url">
        Enter the song url:
      </label>
      <input
        id="url"
        type="text"
        autoComplete="off"
        placeholder="https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT"
      />
      <button className={styles.formButton} type="submit">
        Add to playlist
      </button>
    </div>
  );
}

export default Form;
