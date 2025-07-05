import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import Sharebin from "../componets/Sharebin";
import SideBar from "../componets/SideBar";

const Editor = () => {
  const [clients] = useState([
    { socketId: 1, username: "Alice", userState: "uploading" },
    { socketId: 2, username: "Bob", userState: "idle" },
    { socketId: 1, username: "Alice", userState: "uploading" },
    { socketId: 2, username: "Bob", userState: "idle" },
    { socketId: 1, username: "Alice", userState: "uploading" },
    { socketId: 2, username: "Bob", userState: "idle" },
    { socketId: 3, username: "Charlie", userState: "editing" },
    { socketId: 1, username: "Alice", userState: "uploading" },
    { socketId: 2, username: "Bob", userState: "idle" },
    { socketId: 1, username: "Alice", userState: "uploading" },
    { socketId: 2, username: "Bob", userState: "idle" },
    { socketId: 1, username: "Alice", userState: "uploading" },
    { socketId: 2, username: "Bob", userState: "idle" },
    { socketId: 3, username: "Charlie", userState: "editing" },
  ]);

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
          <Sharebin />{" "}
        </div>
      </div>
    </div>
  );
};

export default Editor;
