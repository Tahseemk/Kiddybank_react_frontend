import {io} from "socket.io-client";

const BASEURL = `${process.env.REACT_APP_BASEURL}`;

export const socketService = {
  connect,
};

function connect() {
  return new Promise((resolve, reject) => {
    const socket = io(BASEURL, {
    });
    socket.on("connect", () => {
      resolve(socket);
    });
  });
}