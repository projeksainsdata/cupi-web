'use client'
import { useEffect, useState } from 'react'

const DialogflowChat = ({ 
  isVisible = true, 
  position = 'bottom-right',
  customStyle = {},
  showOnMobile = true 
}) => {
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

    return () => {
      // Cleanup
      if (document.head.contains(linkElement)) {
        document.head.removeChild(linkElement)
      }
      if (document.head.contains(scriptElement)) {
        document.head.removeChild(scriptElement)
      }
    }
  }, [])

  const getPositionStyles = () => {
    switch (position) {
      case 'bottom-left':
        return { bottom: '20px', left: '20px' }
      case 'bottom-right':
        return { bottom: '20px', right: '20px' }
      case 'center':
        return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
      default:
        return { bottom: '20px', right: '20px' }
    }
  }

  if (!isVisible) return null

  return (
    <>
      {isLoaded && (
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
      )}

      <style jsx global>{`
        df-messenger {
          z-index: 999;
          position: fixed;
          --df-messenger-font-color: #1f2937;
          --df-messenger-font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          --df-messenger-chat-background: #f8fafc;
          --df-messenger-message-user-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --df-messenger-message-bot-background: #ffffff;
          --df-messenger-primary-color: #667eea;
          --df-messenger-titlebar-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --df-messenger-titlebar-font-color: #ffffff;
          --df-messenger-input-background: #ffffff;
          --df-messenger-input-font-color: #1f2937;
          --df-messenger-send-icon-color: #667eea;
          ${Object.entries({...getPositionStyles(), ...customStyle}).map(([key, value]) => 
            `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`
          ).join(' ')}
          width: 350px;
          height: 500px;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(103, 126, 234, 0.2);
        }
        
        df-messenger df-messenger-chat {
          border-radius: 16px;
        }
        
        @media (max-width: 768px) {
          df-messenger {
            ${showOnMobile ? `
              bottom: 10px !important;
              right: 10px !important;
              left: 10px !important;
              width: calc(100vw - 20px) !important;
              max-width: 350px !important;
              height: 450px !important;
              margin: 0 auto;
            ` : 'display: none !important;'}
          }
        }
        
        @media (max-width: 480px) {
          df-messenger {
            ${showOnMobile ? `
              width: calc(100vw - 20px) !important;
              height: calc(100vh - 100px) !important;
              max-height: 500px !important;
            ` : 'display: none !important;'}
          }
        }
      `}</style>
    </>
  )
}

export default DialogflowChat