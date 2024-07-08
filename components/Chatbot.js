import React, { useState } from "react";
import styles from "../styles/Chatbot.module.css";
import axios from "axios";

function Chatbot() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  const sendMessage = () => {
    const getChatbotResponse = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5050/chat",
          { question: input,
            thread_id: ""
           },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data); // Log the entire response object to debug if needed
        const botResponse = response.data.response;
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, user: "bot" },
        ]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, user: "me" },
      ]);
      setInput(""); // Reset input field after sending a message
      setIsLoading(true);
      getChatbotResponse(); // Call the function to get the response from the bot
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
                className={`${styles.message} ${message.user === "me" ? styles.me : styles.bot}`}
                style={message.user === "me" ? { textAlign: "right" } : { textAlign: "left" }}
              >
                <p>{message.text}</p>
              </div>
            ))}
            {isLoading && (
              <div className={styles.loading}>
                <p>Loading...</p>
              </div>
            )}
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
