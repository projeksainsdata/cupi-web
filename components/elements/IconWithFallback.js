'use client'
import { useState } from 'react'
import Image from 'next/image'

const IconWithFallback = ({ src, alt, emoji, size = 64 }) => {
    const [imageError, setImageError] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <div className="icon-with-fallback" style={{ width: size, height: size }}>
            {!imageError && src ? (
                <Image
                    src={src}
                    alt={alt}
                    width={size}
                    height={size}
                    onError={() => setImageError(true)}
                    onLoad={() => setImageLoaded(true)}
                    style={{
                        display: imageLoaded ? 'block' : 'none',
                        filter: 'drop-shadow(0 5px 15px rgba(79, 70, 229, 0.3))'
                    }}
                />
            ) : null}
            
            {(imageError || !src || !imageLoaded) && (
                <div 
                    className="emoji-fallback"
                    style={{
                        fontSize: `${size * 0.8}px`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        opacity: imageLoaded ? 0 : 1,
                        transition: 'opacity 0.3s ease'
                    }}
                >
                    {emoji}
                </div>
            )}
        </div>
    )
}

export default IconWithFallback