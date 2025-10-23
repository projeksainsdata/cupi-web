import Link from "next/link"
import Image from "next/image"
import ChatTrigger from "@/components/elements/ChatTrigger"

const Hero2 = () => {
    const healthFeatures = [
        { title: "Penilaian Risiko", icon: "🔍", description: "Evaluasi risiko IMS pribadi" },
        { title: "Konsultasi 24/7", icon: "💬", description: "Chatbot tersedia kapan saja" },
        { title: "Privasi Terjamin", icon: "🔒", description: "Data kesehatan aman & rahasia" },
        { title: "Rekomendasi", icon: "📋", description: "Saran tindakan berdasarkan risiko" },
        { title: "Edukasi", icon: "📚", description: "Informasi lengkap tentang IMS" },
        { title: "Deteksi Dini", icon: "⚡", description: "Identifikasi gejala sejak dini" }
    ];

    return (
        <>
            <div className="banner banner-home2">
                <div className="text-center">
                    <div className="mb-30">
                        <Image 
                            src="/assets/imgs/cupi/cupi.png" 
                            alt="CuPI Chatbot" 
                            width={120} 
                            height={120}
                            className="mx-auto"
                            style={{filter: 'drop-shadow(0 10px 20px rgba(79, 70, 229, 0.3))'}}
                        />
                    </div>
                    <h6 className="color-gray-600">Selamat Datang di CuPI</h6>
                    <h1 className="color-white">
                        <span className="color-linear">Chatbot</span> untuk<br className="d-none d-lg-block" />
                        Pemeriksaan <span className="color-linear">IMS</span>
                    </h1>
                    <p className="color-gray-500 mt-20 mb-30 text-lg">
                        Dapatkan penilaian risiko Infeksi Menular Seksual dengan bantuan AI yang aman dan terpercaya
                    </p>
                    <div className="mt-40">
                        <ChatTrigger className="btn btn-linear btn-lg me-20">
                            Mulai Konsultasi Sekarang
                            
                        </ChatTrigger>
                        {/* <Link href="/about" className="btn btn-outline-white btn-lg">
                            Pelajari Lebih Lanjut
                        </Link> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero2;