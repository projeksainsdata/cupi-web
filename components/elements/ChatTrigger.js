'use client'

const ChatTrigger = ({ children, className = "", style = {} }) => {
  const openChat = (e) => {
    e.preventDefault()
    
    // Dispatch event to open chat
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('openChat'))
    }
  }

  return (
    <button 
      onClick={openChat}
      className={className}
      style={style}
    >
      {children}
    </button>
  )
}

export default ChatTrigger