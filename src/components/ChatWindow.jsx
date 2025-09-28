import React, { useState, useRef, useEffect } from "react";
import { AVATAR_DEFAULT_URL } from "../constant/constant";
import { removeChat } from "../store/chatSlice";
import { useDispatch } from "react-redux";

const ChatWindow = ({ chat }) => {
  const { _id, fullName, photoUrl } = chat;
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([
    { sender: "friend", text: "Hey! How are you?" },
    { sender: "me", text: "I'm good, you?" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { sender: "me", text: newMessage }]);
    setNewMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="flex flex-col h-full w-full bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-[#252526]">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full border border-gray-700">
              <img src={photoUrl || AVATAR_DEFAULT_URL} alt={fullName} />
            </div>
          </div>
          <span className="font-medium text-[#569cd6]">{fullName}</span>
        </div>
        <button
          className="btn btn-ghost btn-sm text-[#569cd6] hover:text-white"
          onClick={() => dispatch(removeChat())}
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat ${
              msg.sender === "me" ? "chat-end" : "chat-start"
            }`}
          >
            <div
              className={`chat-bubble ${
                msg.sender === "me"
                  ? "bg-[#0a84ff] text-white"
                  : "bg-[#3a3d41] text-gray-200"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="flex p-3 border-t border-[#252526] gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="input input-bordered flex-1 bg-[#252526] text-gray-100 focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="btn bg-[#0a84ff] text-white hover:bg-[#006fcf]"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
