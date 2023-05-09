import * as net from "net";

abstract class IdroRFID {
  protected mTCPConnect!: net.Socket;

  async connectTCP(host = "192.168.9.6", port = 80) {
    console.log("connectTCP", host, ":", port);
    return new Promise((resolve, reject) => {
      const options = { host, port };
      this.mTCPConnect = net.createConnection(options);
      this.mTCPConnect.setMaxListeners(25);
      this.mTCPConnect.on("connect", async () => {
        console.log("connect!!!");
        resolve(true);
      });

      //this.mTCPConn.on('data', (data: Buffer) => this.onRecvTCP(data));
      this.mTCPConnect.on("close", (hasError: boolean) => {
        console.log("disconnect!!!");
      });

      this.mTCPConnect.on("error", (err) => {
        console.log("connect error");
        console.log(err);
        console.log("connect error");
        reject(err);
      });
    });
  }
}
