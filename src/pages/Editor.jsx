import React, { useEffect, useState } from "react";
import Client from "../componets/Client";
const Editor = () => {
    const clients=[
    { socketId: 1, username: "test" },
    { socketId: 1, username: "test" },
    { socketId: 1, username: "test" },
  ];
//   const [clients, setClients] = useState([]);
//   useEffect(()=>{
//     setClients([
//     { socketId: 1, username: "test" },
//     { socketId: 1, username: "test" },
//     { socketId: 1, username: "test" },
//   ])
//   },[])
  return (
    <div className="min-h-[100vh] bg-primary flex pt-16 justify-center">
      <div className="w-full max-w-md">
        <div className="aside text-primary">
          this is aside
          <div className="aside-inner">
            <h1>this is inner</h1>
            <div className="client-list">
              {clients.map((client) => {
                <Client key={client.socketId} username={client.username} />;
              })}
            </div>
          </div>
        </div>
        <div className="editorwrap text-secondary">
          this is editor 1.06.20 this is jsut a test
        </div>
      </div>
    </div>
  );
};

export default Editor;
