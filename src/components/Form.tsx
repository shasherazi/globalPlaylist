import React, { useState } from "react";
import styles from "../stlyes/Form.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function Form() {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(input);
    fetch(`https://add-track-53dyj6olra-uc.a.run.app/?track=${input}`);
    toast.success("Song added to playlist!");
  };

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
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className={styles.formButton}
        type="submit"
        onClick={handleSubmit}
      >
        Add to playlist
      </button>
      <ToastContainer
        style={{
          fontSize: "16px",
        }}
      />
    </div>
  );
}

export default Form;
