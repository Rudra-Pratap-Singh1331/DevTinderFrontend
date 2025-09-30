import io from "socket.io-client";

let socket;

export const socketConnection = () => {
  if (!socket) {
    socket = io("http://localhost:1001", { withCredentials: true });
  }
  return socket; // hamesha return karo
};

export const disconnect = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
