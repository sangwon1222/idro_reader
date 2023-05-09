import { Socket } from "socket.io";
import TCP from "./tcp";
import SocketIO from "./socket";

export default class SocketManager {
  private static _handle: SocketManager;
  static get handle() {
    return SocketManager._handle;
  }

  private mSocket: SocketIO;
  private mTCP: TCP;
  get tcp() {
    return this.mTCP;
  }
  constructor() {
    SocketManager._handle = this;
    this.mSocket = new SocketIO();
    this.mTCP = new TCP();
  }

  async init() {
    await this.mSocket.init();
    await this.mTCP.init();
  }
}
