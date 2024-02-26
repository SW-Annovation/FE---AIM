import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chat.css';
import { getSpeech } from './useSpeechToText';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    const fetchInitialMessages = async () => {
      try {
        const response = await getInitialMessagesFromBackend();
        const initialMessages = response.data;
        setMessages(initialMessages);

        // 초기 메시지를 받아와서 메시지 목록에 추가하고 음성으로 읽어주기
        initialMessages.forEach((msg) => {
          addMessage(msg.sender, msg.message);
          readMessage(msg.message);
        });
      } catch (error) {
        console.error('백엔드와 초기 메시지 통신 중 오류 발생:', error);
        addMessage('챗봇', '백엔드와 초기 메시지 통신 중 오류 발생');
        readMessage('백엔드와 초기 메시지 통신 중 오류 발생');
      }
    };

    fetchInitialMessages();
  }, []);

  const addMessage = (sender, message) => {
    setMessages((prevMessages) => [...prevMessages, { sender, message }]);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = async () => {
    const message = userInput.trim();
    if (message.length === 0) return;

    addMessage('나나', message);
    setUserInput('');

    try {
      const response = await sendMessageToBackend(message);
      const receivedMessage = response.data;

      addMessage('챗봇', receivedMessage);
      readMessage(receivedMessage);
    } catch (error) {
      console.error('백엔드와 통신 중 오류 발생:', error);
      addMessage('챗봇', '네트워크 연결상태를 확인해주세요!');
      readMessage('네트워크 연결상태를 확인해주세요!');
    }
  };

  const sendMessageToBackend = async (message) => {
    const backendApiUrl = '백엔드 API 주소';
    return axios.post(backendApiUrl, { message });
  };

  const getInitialMessagesFromBackend = async () => {
    // 초기 메시지를 받아오는 로직
    const backendApiUrl = '백엔드 초기 메시지 API 주소';
    return axios.get(backendApiUrl);
  };

  const readMessage = (text) => {
    // 음성으로 메시지 읽어주기
    getSpeech(text);
    console.log(text);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 엔터 키가 눌렸을 때 메시지 전송
      handleSendMessage();
    }
  };

  return (
    <div id="chat-container">
      <div id="chat-messages">
        {messages.slice(0).reverse().map((msg, index) => (
          <div key={index} className="message">
            {`${msg.sender}: ${msg.message}`}
          </div>
        ))}
      </div>
      <div id="user-input">
        <input
          type="text"
          placeholder="메시지를 입력하세요..."
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // 엔터 키 이벤트 핸들러 추가
        />
        <button onClick={handleSendMessage}>전송</button>
      </div>
    </div>
  );
};

export default ChatApp;
