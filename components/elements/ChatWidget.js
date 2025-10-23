'use client'
import { useState, useEffect } from 'react'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load Dialogflow CSS
    const linkElement = document.createElement('link')
    linkElement.rel = 'stylesheet'
    linkElement.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css'
    document.head.appendChild(linkElement)

    // Load Dialogflow JS
    const scriptElement = document.createElement('script')
    scriptElement.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js'
    scriptElement.onload = () => setIsLoaded(true)
    document.head.appendChild(scriptElement)

    // Listen for global chat toggle events
    const handleChatToggle = () => {
      setIsOpen(prev => !prev)
    }

    window.addEventListener('toggleChat', handleChatToggle)
    window.addEventListener('openChat', () => setIsOpen(true))
    window.addEventListener('closeChat', () => setIsOpen(false))

    return () => {
      window.removeEventListener('toggleChat', handleChatToggle)
      window.removeEventListener('openChat', () => setIsOpen(true))
      window.removeEventListener('closeChat', () => setIsOpen(false))
      
      if (document.head.contains(linkElement)) {
        document.head.removeChild(linkElement)
      }
      if (document.head.contains(scriptElement)) {
        document.head.removeChild(scriptElement)
      }
    }
  }, [])

  const toggleChat = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <div className={`chat-widget-container ${isOpen ? 'chat-open' : ''}`}>
        <button 
          className="chat-toggle-btn"
          onClick={toggleChat}
          aria-label={isOpen ? 'Tutup Chat' : 'Buka Chat CuPI'}
        >
          {isOpen ? (
            <span className="close-icon">✕</span>
          ) : (
            <>
              <span className="chat-icon">💬</span>
              <span className="chat-text">Chat CuPI</span>
            </>
          )}
        </button>

        {/* Chat Window */}
        {isOpen && isLoaded && (
          <div className="chat-window">
            <df-messenger
              project-id="adept-lead-435007-p0"
              agent-id="5df7f970-1a57-4cbb-b7fa-de56a31fcd54"
              language-code="id"
              max-query-length="-1"
              allow-feedback="all"
            >
              <df-messenger-chat chat-title="CuPI - Konsultasi Kesehatan">
              </df-messenger-chat>
            </df-messenger>
          </div>
        )}
      </div>

      <style jsx global>{`
        .chat-widget-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          font-family: 'Noto Sans', sans-serif;
        }

        .chat-toggle-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 50px;
          padding: 15px 20px;
          color: white;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 120px;
          justify-content: center;
        }

        .chat-toggle-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
        }

        .chat-toggle-btn .chat-icon {
          font-size: 20px;
          animation: bounce 2s infinite;
        }

        .chat-toggle-btn .close-icon {
          font-size: 18px;
          font-weight: bold;
        }

        .chat-open .chat-toggle-btn {
          background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%);
          border-radius: 50%;
          min-width: 50px;
          width: 50px;
          height: 50px;
          padding: 0;
        }

        .chat-open .chat-toggle-btn:hover {
          background: linear-gradient(135deg, #fd7e14 0%, #dc3545 100%);
        }

        .chat-window {
          position: absolute;
          bottom: 70px;
          right: 0;
          width: 350px;
          height: 500px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          animation: slideUp 0.3s ease-out;
          border: 2px solid rgba(102, 126, 234, 0.2);
        }

        .chat-window df-messenger {
          width: 100%;
          height: 100%;
          --df-messenger-font-color: #1f2937;
          --df-messenger-font-family: 'Noto Sans', sans-serif;
          --df-messenger-chat-background: #f8fafc;
          --df-messenger-message-user-background: #ffffff;
          --df-messenger-message-user-font-color: #1f2937;
          --df-messenger-message-bot-background: #f1f5f9;
          --df-messenger-primary-color: #667eea;
          --df-messenger-titlebar-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --df-messenger-titlebar-font-color: #ffffff;
          --df-messenger-input-background: #ffffff;
          --df-messenger-input-font-color: #1f2937;
          --df-messenger-send-icon-color: #667eea;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }

        @media (max-width: 768px) {
          .chat-widget-container {
            bottom: 15px;
            right: 15px;
          }

          .chat-window {
            width: calc(100vw - 30px);
            max-width: 350px;
            right: -15px;
            height: 450px;
          }

          .chat-toggle-btn {
            padding: 12px 16px;
            font-size: 14px;
            min-width: 100px;
          }
        }

        @media (max-width: 480px) {
          .chat-window {
            width: calc(100vw - 20px);
            right: -10px;
            bottom: 60px;
            height: calc(100vh - 120px);
            max-height: 500px;
          }
        }
      `}</style>
    </>
  )
}

export default ChatWidget