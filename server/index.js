const { Server } = require("socket.io");
const io = new Server(8000, {
  cors: true,
});

const emailToSocketIDMap = new Map();
const SocketIDtoEmailMap = new Map();

io.on("connection", (socket) => {
  console.log(`Socket Connected`, socket.id);
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketIDMap.set(email, socket.id);
    SocketIDtoEmailMap.set(socket.id, email);
    io.to(socket.id).emit("room:join", data);
  });
});
