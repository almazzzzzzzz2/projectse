import React, { useState } from 'react';
import './Chat.css';

export default function Chat() {
  // Создаем состояния для хранения текста сообщения и массива сообщений
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  // Функция для обновления текста сообщения при вводе
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Функция для обработки отправки сообщения
  const handleSendMessage = (event) => {
    event.preventDefault();
    // Добавляем отправленное сообщение в массив сообщений
    setChatMessages([...chatMessages, message]);
    // Очищаем поле для ввода
    setMessage('');
  };

  return (
    <div className="formDiv">
      <h1>Чат</h1>
      <div className="chatmessage">
        {/* Отображаем все сообщения в чате */}
        {chatMessages.map((chatMessage, index) => (
          <div key={index}>{chatMessage}</div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          className="messageInput"
          type="text"
          value={message}
          onChange={handleMessageChange}
        />
        <button className="buttonMessage" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
}
