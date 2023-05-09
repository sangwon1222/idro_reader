import net from "net";
import packet from "../packet";

class TCP {
  private mTcp: net.Socket;

  async init() {
    await this.connect();
  }

  async connect() {
    const options = {
      port: 5578,
      host: "192.168.9.6",
    };
    this.mTcp = net.createConnection(options);
    this.mTcp.on("connect", function () {
      console.log("__connect");
    });

    this.mTcp.on("data", function (data) {
      console.log("__data", data.toString());
    });
    this.mTcp.on("close", function () {
      this.stopReadRFID();
      console.log("client disconnted.");
    });

    this.stopReadRFID();
  }

  async stop() {
    console.log("stop", packet.stop);
    this.mTcp.write(packet.stop);
  }

  async startReadRFID() {
    console.log("startReadRFID", packet.startReadRFID);
    this.mTcp.write(packet.startReadRFID);
  }

  async stopReadRFID() {
    console.log("stopReadRFID", packet.stopReadRFID);
    this.mTcp.write(packet.stopReadRFID);
  }

  async setAntms(ms: number) {
    this.mTcp.write(`>x j ${ms}`);
  }

  async onAntenna(mode: string) {
    console.log(mode);
    this.mTcp.write(packet[mode]);
  }

  async onBuzzer() {
    console.log(packet.onBuzzer);
    this.mTcp.write(packet.onBuzzer);
  }

  async offBuzzer() {
    console.log(packet.offBuzzer);
    this.mTcp.write(packet.offBuzzer);
  }
}

export default TCP;
