import define from "../define";
import { io } from "socket.io-client";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import React from "react";

const Idro: React.FC = () => {
  const [socket, setSocket] = useState(null as any);
  useEffect(() => {
    connect();
  }, []);

  const connect = async () => {
    const socketIO = io("http://localhost:3000", {});
    setSocket(socketIO);
    socketIO.on("connect", () => {
      console.log("connect");
    });
    socketIO.on("connect-device", (data) => {
      console.log("connect-device", data);
    });
  };

  const callEvent = async (eventName: string, common?: string) => {
    try {
      const event = common ? common : eventName;
      console.log(event);
      socket.emit(event, eventName);
    } catch (error) {
      console.error(error);
    }
  };

  interface TypeDefine {
    label: string;
    eventName: string;
    common: string;
  }
  return (
    <IdroDiv>
      <div className="btn-wrap">
        {define.map(({ eventName, label, common }, idx: number) => {
          return (
            <button key={idx} onClick={() => callEvent(eventName, common)}>
              {label}
            </button>
          );
        })}
      </div>
    </IdroDiv>
  );
};

export default Idro;

const IdroDiv = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 1rem;
  .btn-wrap {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
    > button {
      padding: 1rem;
      border: 1px rgba(255, 255, 255, 0.1) solid;
      border-radius: 0.5rem;
      display: flex;
      items-align: center;
      transition: all 0.25s;
      &:hover {
        color: ${(props) => props.theme["main-dark-300"]};
        background-color: ${(props) => props.theme["white-200"]};
        font-weight: 800;
      }
    }
  }
`;
