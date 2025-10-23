'use client'
import { useState } from 'react'

const ChatButton = ({ onClick, isActive = false }) => {
  return (
    <button 
      onClick={onClick}
      className={`btn btn-linear btn-lg chat-cta-button ${isActive ? 'active' : ''}`}
    >
      <span className="chat-icon">💬</span>
      <span className="chat-text">
        {isActive ? 'Tutup Chat' : 'Mulai Chat Sekarang'}
      </span>
    </button>
  )
}

export default ChatButton