import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Client from "../componets/Client";
import toast from "react-hot-toast";
import Sharebin from "../componets/Sharebin";

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

  const { roomId: paramRoomId } = useParams();
  const location = useLocation(); //  sate object
    const navigate = useNavigate();

  if (location.state==null) {
    navigate("*");
  }else{
 var { roomId, currentUser, timestamp } = location.state;
  }
 



  const CopyLink = () => {
    const fullUrl = `${window.location.origin}/editor/${paramRoomId}`;
    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        toast.success("Copied to clipboard");
      })
      .catch((err) => {
        toast.error("Failed to copy:", err);
      });
  };

  const Sharebtn = () => {
    const shareData = {
      title: "Join my session",
      text: "Join me in this room:",
      url: window.location.href,
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .catch((err) => toast.error("Share failed:", err));
    } else {
      toast.error("Sharing not supported. Copying link instead.");
      navigator.clipboard.writeText(shareData.url);
    }
  };

  return (
    <div className="min-h-[100vh] bg-primary flex">
      <div className="w-80 bg-secondary border-r border-primary shadow-themed-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center shadow-themed-sm">
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

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto h-full">
          <div className="p-6 space-y-6">
            {/* Room Info */}
            <div className="bg-tertiary rounded-xl p-4 border border-primary">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-primary">
                  Room Info
                </h3>
                <button className="p-1 text-secondary hover:text-primary transition-colors duration-200">
                  <i className="fi fi-br-copy text-xs" onClick={CopyLink}></i>
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-xs">
                  <i className="fi fi-br-key text-brand mr-2"></i>
                  <span className="text-secondary">ID: {roomId}</span>
                </div>
                <div className="flex items-center text-xs">
                  <i className="fi fi-br-clock text-brand mr-2"></i>
                  <span className="text-secondary"> Joined on {timestamp}</span>
                </div>
              </div>
            </div>

            {/* Connected Users */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-primary flex items-center">
                  <i className="fi fi-br-users text-brand mr-2"></i>
                  Connected Users
                </h3>
                <span className="bg-brand text-white text-xs px-2 py-1 rounded-full font-medium">
                  {clients.length}
                </span>
              </div>

              <div className="space-y-3">
                {clients.map((client, index) => (
                  <Client
                    key={client.socketId + index}
                    username={client.username}
                    userState={client.userState}
                    initial={client.username?.charAt(0).toUpperCase() || "K"}
                  />
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-sm font-semibold text-primary mb-4 flex items-center">
                <i className="fi fi-br-bolt text-brand mr-2"></i>
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={Sharebtn}
                  className="bg-tertiary hover:bg-hover border border-primary rounded-lg p-3 text-center transition-all duration-200 hover:shadow-themed-sm"
                >
                  <i className="fi fi-br-share text-brand text-lg mb-2 block"></i>
                  <span className="text-xs text-primary font-medium">
                    Share
                  </span>
                </button>

                <button
                  onClick={() => {
                    navigate(-1);
                  }}
                  className="bg-tertiary hover:bg-hover border border-primary rounded-lg p-3 text-center transition-all duration-200 hover:shadow-themed-sm"
                >
                  <i className="fi fi-br-sign-out-alt text-error text-lg mb-2 block"></i>
                  <span className="text-xs text-error font-medium">Leave</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-primary">
        <div className="p-6">
          {/* <h3 className="font-medium text-primary mb-2">Main Editor Area</h3>
          <p className="text-secondary text-sm">
            Your code editor will go here
          </p> */}
          <Sharebin />{" "}
        </div>
      </div>
    </div>
  );
};

export default Editor;
