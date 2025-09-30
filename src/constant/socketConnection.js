// socketService.js
import { io } from "socket.io-client";

export const createSocket = () => {
  // Always create a fresh socket instance
  const socket = io("http://localhost:1001", { withCredentials: true });

  // Optional: return cleanup function if needed
  const disconnect = () => {
    if (socket) {
      socket.disconnect();
    }
  };

  return { socket, disconnect };
};
