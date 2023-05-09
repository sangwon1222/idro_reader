const define = [
  { label: "버저음 켜기", eventName: "onBuzzer" },
  { label: "버저음 끄기", eventName: "offBuzzer" },
  { label: "RFID 스캔 시작", eventName: "startReadRFID" },
  { label: "RFID 스캔 정지", eventName: "stopReadRFID" },
  { label: "1번 안테나 활성화", eventName: "onAtn1", common: "onAntenna" },
  { label: "2번 안테나 활성화", eventName: "onAtn2", common: "onAntenna" },
  {
    label: "1번, 2번 안테나 활성화",
    eventName: "onAtn1Atn2",
    common: "onAntenna",
  },
  { label: "3번 안테나 활성화", eventName: "onAtn3", common: "onAntenna" },
  {
    label: "1번, 3번 안테나 활성화",
    eventName: "onAtn1Atn3",
    common: "onAntenna",
  },
  {
    label: "2번, 3번 안테나 활성화",
    eventName: "onAtn2Atn3",
    common: "onAntenna",
  },
  {
    label: "1번, 2번, 3번 안테나 활성화",
    eventName: "onAtn1Atn2Atn3",
    common: "onAntenna",
  },
  { label: "4번 안테나 활성화", eventName: "onAtn4", common: "onAntenna" },
  {
    label: "1번, 4번 안테나 활성화",
    eventName: "onAtn1Atn4",
    common: "onAntenna",
  },
  {
    label: "2번, 4번 안테나 활성화",
    eventName: "onAtn2Atn4",
    common: "onAntenna",
  },
  {
    label: "1번, 2번, 4번 안테나 활성화",
    eventName: "onAtn1Atn2Atn4",
    common: "onAntenna",
  },
  {
    label: "3번, 4번 안테나 활성화",
    eventName: "onAtn3Atn4",
    common: "onAntenna",
  },
  {
    label: "1번, 3번, 4번 안테나 활성화",
    eventName: "onAtn1Atn3Atn4",
    common: "onAntenna",
  },
  {
    label: "2번, 3번, 4번 안테나 활성화",
    eventName: "onAtn2Atn3Atn4",
    common: "onAntenna",
  },
  {
    label: "모든 안테나 활성화",
    eventName: "onAtn1Atn2Atn3Atn4",
    common: "onAntenna",
  },
];

export default define;
