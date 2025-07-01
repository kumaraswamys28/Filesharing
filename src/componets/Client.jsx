import React from 'react'

const Client = ({ username,userState,initial }) => {
  

  return (
    <div className="flex border-accent  active:active-bg items-center space-x-3 p-3 bg-tertiary rounded-lg border border-primary hover:hover-bg transition-all duration-200">


      <div className="w-8 h-8 bg-gradient-to-br from-brand to-brand-secondary border-accent rounded-full flex items-center justify-center text-accent text-sm font-bold shadow-themed-lg">
        {initial}
        
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-primary truncate">
          {username}
        </p>
        <p className="text-xs text-secondary">{userState}</p>
      </div>
    </div>
  )
}

export default Client
