import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import './chat.css';

interface RoommateDetailProps {
  name: string;
  age: number;
  gender: string;
  city: string;
  occupation: string;
  description: string;
  email: string;
}

interface Message {
  text: string;
  sender: string;
  timestamp: number;
}

const ChatPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Ensure roommate details exist, else navigate back
  const roommate = location.state as RoommateDetailProps | undefined;


  // Initialize socket state unconditionally
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Set up socket connection (conditionally create socket)
  useEffect(() => {
    if (roommate) {
      const newSocket = io('http://localhost:5000', {
        transports: ['websocket'],
      });
      setSocket(newSocket);

      // Handle successful connection
      newSocket.on('connect', () => {
        setLoading(false);
        console.log("Connected to chat server.");
      });

      // Listen for incoming messages
      newSocket.on('message', (messageText: string) => {
        console.log("Received message:", messageText);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: messageText, sender: 'Other', timestamp: Date.now() },
        ]);
      });

      // Cleanup socket connection on unmount
      return () => {
        console.log("Disconnecting from chat server...");
        newSocket.close();
      };
    }
  }, [roommate]); // Dependency array ensures effect runs when roommate changes

  const handleSendMessage = () => {
    if (socket && message) {
      const newMessage: Message = { text: message, sender: 'You', timestamp: Date.now() };
      socket.emit('message', message); // Send message to server
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage(''); // Clear input
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  

  if (!roommate) {
    navigate(-1);
    return null;
  }

  return (
    <div className="chat-container">
      <h1>Chat with {roommate.name}</h1>
      {loading && <p>Connecting to chat...</p>}
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <strong>{msg.sender}</strong>: {msg.text}
          </div>
        ))}
      </div>
      <div className="message-input-container">
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="message-input"
        />
        <button onClick={handleSendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;