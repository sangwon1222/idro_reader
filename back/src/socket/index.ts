import { Server } from "socket.io";
import SocketManager from "../socketManager";

class SocketIO {
  private io: Server;

  async init() {
    this.io = new Server(3000, {
      cors: { origin: "*" },
    });

    this.io.on("connection", async (socket) => {
      const sockets = await this.io.fetchSockets();
      const total = () => this.io.engine.clientsCount;
      const userInfo = sockets.map((v) => {
        return { id: v.id, totalCnt: total() };
      });

      socket.emit("connect-device", userInfo);

      socket.on("disconnection", (data: any) => {
        console.log("disconnection", data);
      });

      socket.on("onBuzzer", () => this.onBuzzer());
      socket.on("onAntenna", (mode) => this.onAntenna(mode));
      socket.on("startReadRFID", () => this.startReadRFID());
    });
  }

  async onBuzzer() {
    SocketManager.handle.tcp.onBuzzer();
  }

  async onAntenna(mode: string) {
    SocketManager.handle.tcp.onAntenna(mode);
  }
  async startReadRFID() {
    SocketManager.handle.tcp.startReadRFID();
  }
}

export default SocketIO;
