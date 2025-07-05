import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import Sharebin from "../componets/Sharebin";
import SideBar from "../componets/SideBar";
import { initSocket } from "../Sockets/socket-client.js";
import { ACTIONS } from "../../actions";

const Editor = () => {
  const location = useLocation(); //  sate object
  const navigate = useNavigate();
  useEffect(() => {
    if (!location.state) {
      toast.error("Invalid room access. Redirecting...");
      navigate("/");
    }
  }, [location.state, navigate]);

  const roomId = location.state?.roomId;
  const currentUser = location.state?.currentUser;
  const socketRef = useRef(null);
  function handleError(err) {
    console.error("Socket error:", err);
    toast.error("An error occurred with the socket connection.");
    navigate("/");
  }
   useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();

      socketRef.current.on("connect_error", (err) => {
        handleError(err);
      });

      socketRef.current.on("connect_failed", (err) => {
        handleError(err);
      });

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: currentUser,
      });
      socketRef.current.on(ACTIONS.JOINED, ({ clients, username }) => {
        if (username !== currentUser) {
          toast.success(`${username} has joined the room`);
        }
        setClient(clients);
      });

      //listening to disconectin
      socketRef.current.on(ACTIONS.DISCONNECT, ({ socketId, username }) => {
        toast.success(`${username} has left the room`);
        setClient((prev) =>
          prev.filter((client) => client.socketId !== socketId)
        );
      });
    };
    init();
    return()=>{
      socketRef.current.disconnect();
      socketRef.current.off(ACTIONS.JOINED);  
      socketRef.current.off(ACTIONS.DISCONNECT);
    }
  },[]);

  const [clients, setClient] = useState([
    { socketId: 1, username: "Alice", userState: "uploading" },
    { socketId: 2, username: "Bob", userState: "idle" },
    { socketId: 3, username: "Charlie", userState: "editing" },
    { socketId: 4, username: "Dave", userState: "viewing" },
    { socketId: 5, username: "Eve", userState: "idle" },
    { socketId: 6, username: "Frank", userState: "editing" },
    { socketId: 7, username: "Grace", userState: "uploading" },
    { socketId: 8, username: "Heidi", userState: "viewing" },
  ]);

 
  return (
    <div className="min-h-[100vh] bg-primary flex">
      <div className="w-80 bg-secondary border-r border-primary shadow-themed-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand aspect-square rounded-lg flex items-center justify-center shadow-themed-sm">
              <i className="fi fi-br-code text-white text-lg">
                {currentUser?.charAt(0).toUpperCase() || "K"}
              </i>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">{currentUser}</h1>
              <p className="text-xs text-secondary">Room: {roomId}</p>
            </div>
          </div>
        </div>

        <SideBar clients={clients} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-primary">
        <div className="p-6">
          <Sharebin roomId={roomId} socketRef={socketRef} />
        </div>
      </div>
    </div>
  );
};

export default Editor;
