import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Chatbot.module.css";
import axios from "axios";

function Chatbot() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState([
    "이종욱에 대해 말해주세요.",
    "이종욱의 이력을 알려주세요.",
    "이종욱의 성격의 장단점을 알려주세요."
  ]);

  const messagesEndRef = useRef(null);
  const chatbotContainerRef = useRef(null);

  const handleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  const handleClickOutside = (event) => {
    if (chatbotContainerRef.current && chatbotContainerRef.current.contains && !chatbotContainerRef.current?.contains(event.target)) {
      setIsChatbotVisible(false);
    }
  };

  useEffect(() => {
    if (isChatbotVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChatbotVisible]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (question) => {
    const getChatbotResponse = async () => {
      const threadId = localStorage.getItem("thread_id");
      const requestData = {
        question: question || input
      };
      if (threadId) {
        requestData.thread_id = threadId;
      }

      try {
        const response = await axios.post(
          "https://api.jongwook.xyz/chat",
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        let botResponse = response.data.response;
        const responseThreadId = response.data.thread_id;
        const newSuggestedQuestions = response.data.suggested_questions;

        // Replace \n with <br> for proper HTML rendering
        botResponse = botResponse.replace(/\n/g, "<br>");

        // Save thread_id to localStorage
        if (responseThreadId) {
          localStorage.setItem("thread_id", responseThreadId);
        }

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, user: "bot" },
        ]);

        if (newSuggestedQuestions) {
          setSuggestedQuestions(newSuggestedQuestions);
        } else {
          setSuggestedQuestions(["이종욱에 대해 말해주세요.", "이종욱의 이력을 알려주세요.", "이종욱의 성격의 장단점을 알려주세요."]);
        }
      } catch (error) {
        console.error(error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: error.response.data.response, user: "bot" },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    if ((question || input).trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: question || input, user: "me" },
      ]);
      setInput("");
      setIsLoading(true);
      setSuggestedQuestions([]);
      getChatbotResponse();
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
        <div className={styles.overlay} onClick={handleChatbot}>
          <div className={styles.chatbotContainer} ref={chatbotContainerRef} onClick={(e) => e.stopPropagation()}>
            <div className={styles.chatHeader}>AI Chatbot</div>
            <div className={styles.chatMessages}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${styles.message} ${message.user === "me" ? styles.me : styles.bot}`}
                  dangerouslySetInnerHTML={{ __html: message.text }}
                />
              ))}
              {isLoading && (
                <div className={styles.loading}>
                  <p>Loading...</p>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            {suggestedQuestions.length > 0 && (
              <div className={styles.suggestedQuestions}>
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    className={styles.suggestedQuestionBtn}
                    onClick={() => sendMessage(question)}
                    disabled={isLoading}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}
            <div className={styles.chatInputContainer}>
              <input
                type="text"
                className={styles.chatInput}
                value={input}
                placeholder="Type a message..."
                onChange={(e) => setInput(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && !isLoading && sendMessage()}
                disabled={isLoading}
              />
              <button
                className={styles.sendButton}
                onClick={() => sendMessage()}
                disabled={isLoading}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
