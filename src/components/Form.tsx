import React, { useState } from "react";
import styles from "../stlyes/Form.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function Form() {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // const testUrl = "http://127.0.0.1:5001/global-playlist-shasherazi/us-central1/add_track";

    if (input === "") {
      toast.error("Please enter a valid url");
      return;
    }

    const url = "https://add-track-53dyj6olra-uc.a.run.app/";
    console.log(input);
    fetch(`${url}?track=${input}`)
      .then((res) => res.text())
      .then((data) => {
        if (data === "Invalid track") {
          toast.error("Invalid track");
        } else if (data === "Track already in playlist") {
          toast.info("Track already in playlist");
        } else {
          toast.success("Track added to playlist");
        }
      });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e as any);
    }
  };

  return (
    <div className={styles.form}>
      <label className={styles.formHeading} htmlFor="url">
        Enter the song url
      </label>
      <input
        id="url"
        type="text"
        autoComplete="off"
        placeholder="https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
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
