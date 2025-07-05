
import toast from "react-hot-toast";
import Client from "../componets/Client";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const SideBar = ({clients}) => {
    const { roomId } = useParams();
  const location = useLocation(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      toast.error("Invalid room access. Redirecting...");
      navigate("/");
    }
  }, [location.state, navigate]);
  const timestamp = location.state?.timestamp;

  const CopyLink = () => {
    const fullUrl = `${roomId}`;
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
      navigator.clipboard.writeText(
        `${shareData.title}\n ${shareData.text}${shareData.url}`
      );
    }
  };
  return (
    <div className="flex-1 overflow-y-auto h-full">
          <div className="p-6 space-y-6">
            {/* Room Info */}
            <div className="bg-tertiary rounded-xl p-4 border border-accent">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-primary">
                  Room Info
                </h3>
                <button
                  onClick={CopyLink}
                  className="relative group p-1 text-secondary bg-secondary aspect-square h-10 cursor-pointer rounded-xl  hover:text-primary transition-colors duration-200"
                >
                  <i className="fi fi-br-copy text-accent text-xs"></i>

                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    Copy link
                  </span>
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
                    navigate("/");
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
  )
}

export default SideBar
