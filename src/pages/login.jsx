import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

const Login = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [name, setName] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    if (!roomId.trim()) {
      toast.error("Please enter a room ID");
      return;
    }
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    navigate(`/editor/${roomId.trim()}`, {
      state: {
        roomId: roomId.trim(),
        currentUser: name.trim(),
        timestamp: new Date().toISOString(),
      }, // State object to pass to the next route
    });
    console.log("Joining room:", {
      roomId: roomId.trim(),
      name: name.trim(),
      timestamp: new Date().toISOString(),
    });
  };

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success(`New room created with ID: ${id}`);
  };

  const handlekey = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const { rmid } = useParams();

  // **FIX 1: Handle URL parameter and prevent controlled input warning**
  // This effect now correctly handles cases where 'rmid' might be undefined
  // by falling back to an empty string. It also includes 'rmid' in the
  // dependency array as a best practice.
  useEffect(() => {
    setRoomId(rmid || "");
  }, [rmid]);

  return (
    <div className="min-h-[100vh] bg-primary flex pt-16 justify-center">
      <div className="w-full max-w-md">
        <div className="bg-secondary rounded-2xl shadow-themed-xl p-8 border border-primary">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand rounded-full mb-4 shadow-themed-md">
              <i className="fi fi-br-users text-white text-2xl"></i>
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">Join Room</h1>
            <p className="text-secondary text-sm">
              Enter your details to connect with others
            </p>
          </div>

          <div className="space-y-6">
            {/* Room ID Input */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-primary mb-2">
                <i className="fi fi-br-key text-brand mr-2"></i>
                Room ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={roomId}
                  onKeyUp={handlekey}
                  onChange={(e) => setRoomId(e.target.value)}
                  onFocus={() => setFocusedField("roomId")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter room ID"
                  className={`w-full px-4 py-3 bg-tertiary border rounded-xl text-primary placeholder-tertiary focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 ${
                    focusedField === "roomId"
                      ? "shadow-themed-md"
                      : "shadow-themed-sm"
                  }`}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <i className="fi fi-br-search text-tertiary text-sm"></i>
                </div>
              </div>
            </div>

            {/* Name Input */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-primary mb-2">
                <i className="fi fi-br-user text-brand mr-2"></i>
                Your Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onKeyUp={handlekey}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 bg-tertiary border rounded-xl text-primary placeholder-tertiary focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 ${
                    focusedField === "name"
                      ? "shadow-themed-md"
                      : "shadow-themed-sm"
                  }`}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <i className="fi fi-br-edit text-tertiary text-sm"></i>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-brand hover:bg-blue-600 disabled:bg-tertiary disabled:text-tertiary disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl shadow-themed-md hover:shadow-themed-lg transform hover:-translate-y-0.5 disabled:transform-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-secondary"
            >
              <span className="flex items-center justify-center">
                <i className="fi fi-br-sign-in-alt mr-2"></i>
                Join Room
              </span>
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-secondary text-tertiary">or</span>
            </div>
          </div>

          {/* Create Room Link */}
          <div className="text-center">
            <p className="text-secondary text-sm mb-3">Don't have a room ID?</p>
            {/* **FIX 2: Changed from <a> to <button> for better semantics ** */}
            <button
              type="button"
              onClick={createNewRoom}
              className="inline-flex items-center text-brand hover:text-blue-600 font-medium text-sm transition-colors duration-200 hover:underline"
            >
              <i className="fi fi-br-plus mr-2"></i>
              Create a new room
            </button>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-tertiary text-xs">
            Secure and private room connection
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;