import React, { useState } from "react";
import styles from "../styles/Chatbot.module.css";

function Chatbot() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: "me" }]);
      setInput(""); // Reset input field after sending a message
    }
  };

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
      {isChatbotVisible && (
        <div className={styles.chatbotContainer}>
          <div className={styles.chatHeader}>Chatbot</div>
          <div className={styles.chatMessages}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{ textAlign: message.user === "me" ? "right" : "left" }}
              >
                <p>{message.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.chatInputContainer}>
            <input
              type="text"
              className={styles.chatInput}
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button className={styles.sendButton} onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
