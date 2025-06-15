import React, { useState } from 'react';

const Login = () => {
  const [roomId, setRoomId] = useState('');
  const [name, setName] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    // Prevent default if it's a form event
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    
    // Validate inputs
    if (!roomId.trim()) {
      alert('Please enter a room ID');
      return;
    }
    
    if (!name.trim()) {
      alert('Please enter your name');
      return;
    }
    
    // Here you would typically:
    // - Make an API call to join the room
    // - Navigate to the room/chat interface
    // - Store user data in context/state management
    // - Handle authentication if needed
    
    console.log('Joining room:', {
      roomId: roomId.trim(),
      name: name.trim(),
      timestamp: new Date().toISOString()
    });
    
    // Example: You might call a function like:
    // joinRoom({ roomId: roomId.trim(), name: name.trim() });
    // or navigate: navigate(`/room/${roomId.trim()}`);
  };

  return (
    <div className="min-h-[100vh] bg-primary flex pt-16 justify-center">
      <div className="w-full max-w-md">
       
        <div className="bg-secondary rounded-2xl shadow-themed-xl p-8 border border-primary">
               <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand rounded-full mb-4 shadow-themed-md">
            <i className="fi fi-br-users text-white text-2xl"></i>
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">Join Room</h1>
          <p className="text-secondary text-sm">Enter your details to connect with others</p>
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
                  onChange={(e) => setRoomId(e.target.value)}
                  onFocus={() => setFocusedField('roomId')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter room ID"
                  className={`w-full px-4 py-3 bg-tertiary border rounded-xl text-primary placeholder-tertiary focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 ${
                    focusedField === 'roomId' ? 'shadow-themed-md' : 'shadow-themed-sm'
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
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 bg-tertiary border rounded-xl text-primary placeholder-tertiary focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-200 ${
                    focusedField === 'name' ? 'shadow-themed-md' : 'shadow-themed-sm'
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
              disabled={!roomId.trim() || !name.trim()}
              className="w-full bg-brand hover:bg-blue-600 disabled:bg-tertiary disabled:text-tertiary disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl shadow-themed-md hover:shadow-themed-lg transform hover:-translate-y-0.5 disabled:transform-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-secondary"
            >
              <span className="flex items-center justify-center">
                <i className="fi fi-br-sign-in-alt mr-2"></i>
                Join Room
              </span>
            </button>
          </div>

          {/* Divider */}
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
            <a
              href="#"
              className="inline-flex items-center text-brand hover:text-blue-600 font-medium text-sm transition-colors duration-200 hover:underline"
            >
              <i className="fi fi-br-plus mr-2"></i>
              Create a new room
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-tertiary text-xs">
            Secure and private room connections
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;