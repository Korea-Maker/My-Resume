import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Chatbot.module.css";
import axios from "axios";

function Chatbot() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    const getChatbotResponse = async () => {
      const threadId = localStorage.getItem("thread_id");
      const requestData = {
        question: input
      };
      if (threadId) {
        requestData.thread_id = threadId;
      }

      try {
        const response = await axios.post(
          "http://localhost:5050/chat",
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data); // Log the entire response object to debug if needed
        const botResponse = response.data.response;
        const responseThreadId = response.data.thread_id;

        // Save thread_id to localStorage
        if (responseThreadId) {
          localStorage.setItem("thread_id", responseThreadId);
        }

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
              >
                <p>{message.text}</p>
              </div>
            ))}
            {isLoading && (
              <div className={styles.loading}>
                <p>Loading...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className={styles.chatInputContainer}>
            <input
              type="text"
              className={styles.chatInput}
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => e.key === "Enter" && !isLoading && sendMessage()}
              disabled={isLoading} // Disable input when loading
            />
            <button
              className={styles.sendButton}
              onClick={sendMessage}
              disabled={isLoading} // Disable button when loading
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
