import React from "react";
import styles from "../styles/Chatbot.module.css";

function Chatbot() {
    const handleChatbot = () => {
        alert("Chatbot is not available yet.");
    }
  return (
    <>
      <div className={styles.chatbot}>
        <button className={styles.chatbotBtn} onClick={handleChatbot}>
            <img
            src="https://freesvg.org/img/1538298822.png"
            alt="chatbot"
            className={styles.chatbotImg}
            />
        </button>
      </div>
    </>
  );
}

export default Chatbot;
