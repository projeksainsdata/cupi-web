'use client'
import Link from "next/link"

const SocialChat = () => {
    const socialPlatforms = [
        {
            id: 1,
            name: "CuPI di WhatsApp",
            description: "Chat dengan CuPI chatbot langsung di WhatsApp. Dapatkan penilaian risiko IMS dengan mudah dan privat.",
            iconSvg: (
                <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.473 3.516"/>
                </svg>
            ),
            color: "bg-green-500",
            hoverColor: "hover:bg-green-600",
            textColor: "text-white",
            link: "https://wa.me/6285183998151", // Nanti akan diganti dengan link WhatsApp yang sebenarnya
            buttonText: "Chat CuPI"
        },
        {
            id: 2,
            name: "CuPI di Telegram",
            description: "Akses CuPI chatbot melalui Telegram. Interface yang familiar dengan fitur konsultasi kesehatan lengkap.",
            iconSvg: (
                <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
            ),
            color: "bg-blue-500",
            hoverColor: "hover:bg-blue-600",
            textColor: "text-white",
            link: "https://t.me/cupi_imsbot", // Nanti akan diganti dengan link Telegram yang sebenarnya
            buttonText: "Chat CuPI"
        },
        {
            id: 3,
            name: "CuPI di Messenger",
            description: "Konsultasi dengan CuPI melalui Facebook Messenger. Terintegrasi dengan akun Facebook Anda.",
            iconSvg: (
                <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
                    <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.974 12-11.11C24 4.975 18.627.001 12.001.001zm1.191 14.963l-3.056-3.259-5.963 3.259L10.732 8.1l3.13 3.259L19.76 8.1l-6.569 6.863z"/>
                </svg>
            ),
            color: "bg-blue-600",
            hoverColor: "hover:bg-blue-700",
            textColor: "text-white",
            link: "https://www.facebook.com/cupichatid", // Nanti akan diganti dengan link Facebook yang sebenarnya
            buttonText: "Chat CuPI"
        }
    ];

    return (
        <>
            <div className="social-chat-section bg-gray-900 py-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb-70">
                            <h2 className="color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp">
                                Chat dengan CuPI di Platform Favorit Anda
                            </h2>
                            <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                                CuPI tersedia di berbagai platform. Pilih yang paling nyaman untuk konsultasi kesehatan Anda
                            </p>
                        </div>
                        
                        <div className="row justify-content-center">
                            {socialPlatforms.map((platform, i) => (
                                <div className="col-lg-4 col-md-6 mb-40 wow animate__animated animate__fadeInUp" data-wow-delay={`${i * 0.1}s`} key={platform.id}>
                                    <div className="social-chat-card bg-gray-850 border-gray-800 p-40 border-radius-16 h-100 text-center hover-up">
                                        <div className="social-icon mb-30">
                                            <div 
                                                className={`icon-circle ${platform.color} mx-auto d-flex align-items-center justify-content-center`}
                                                style={{
                                                    width: '80px',
                                                    height: '80px',
                                                    borderRadius: '50%'
                                                }}
                                            >
                                                {platform.iconSvg}
                                            </div>
                                        </div>
                                        
                                        <div className="social-content">
                                            <h4 className="color-white mb-20">{platform.name}</h4>
                                            <p className="color-gray-500 mb-30 text-sm">
                                                {platform.description}
                                            </p>
                                            
                                            <Link 
                                                href={platform.link}
                                                className={`btn ${platform.color} ${platform.hoverColor} ${platform.textColor} btn-sm border-0`}
                                            >
                                                {platform.buttonText}
                                                <i className="fi-rr-arrow-small-right ms-10" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-50">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="contact-info bg-gray-850 border-gray-800 p-40 border-radius-16">
                                        <h5 className="color-white mb-20">Lebih Suka Chat Langsung di Website?</h5>
                                        <p className="color-gray-500 mb-30">
                                            CuPI juga tersedia langsung di website ini. Klik tombol di bawah untuk mulai konsultasi sekarang.
                                        </p>
                                        <div className="d-flex flex-wrap justify-content-center gap-3">
                                            <button 
                                                className="btn btn-linear btn-lg"
                                                onClick={() => window.dispatchEvent(new Event('openChat'))}
                                            >
                                                Chat CuPI Sekarang
                                                <i className="fi-rr-comment-alt ms-10" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .social-chat-section {
                    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                }
                
                .social-chat-card {
                    transition: all 0.3s ease;
                    border: 1px solid rgba(75, 85, 99, 0.3);
                }
                
                .social-chat-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                    border-color: rgba(102, 126, 234, 0.4);
                }
                
                .icon-circle {
                    transition: all 0.3s ease;
                }
                
                .social-chat-card:hover .icon-circle {
                    transform: scale(1.1);
                }
                
                .contact-info {
                    border: 1px solid rgba(75, 85, 99, 0.3);
                }
                
                @media (max-width: 768px) {
                    .social-chat-section {
                        padding: 60px 0;
                    }
                    
                    .social-chat-card {
                        padding: 30px 20px;
                    }
                    
                    .contact-info {
                        padding: 30px 20px;
                    }
                }
            `}</style>
        </>
    );
};

export default SocialChat;