
import Link from "next/link"
import Image from "next/image"
import ChatTrigger from "../elements/ChatTrigger"

const EditorPicked2 = () => {
    const mainFeatures = [
        {
            id: 1,
            title: "Penilaian Risiko AI",
            description: "Algoritma machine learning yang telah dilatih dengan data medis untuk memberikan penilaian risiko IMS yang akurat berdasarkan gejala dan riwayat kesehatan Anda.",
            icon: "🤖",
            image: "/assets/imgs/cupi/ai-icon.png",
            category: "AI Technology"
        },
        {
            id: 2,
            title: "100% Anonim & Aman",
            description: "Konsultasi sepenuhnya anonim dengan enkripsi end-to-end. Data Anda tidak disimpan dan tidak dapat dilacak ke identitas pribadi Anda.",
            icon: "🔒",
            image: "/assets/imgs/cupi/security-icon.png",
            category: "Privacy"
        },
        {
            id: 3,
            title: "Rekomendasi Terpersonalisasi",
            description: "Dapatkan rekomendasi tindakan yang disesuaikan dengan tingkat risiko Anda, mulai dari pencegahan hingga rujukan ke tenaga medis profesional.",
            icon: "📋",
            image: "/assets/imgs/cupi/personalized-icon.png",
            category: "Personalized Care"
        }
    ];

    return (
        <>
            <div className="row mt-100 mb-70">
                <div className="col-lg-12 text-center mb-70">
                    <h2 className="color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp">
                        Mengapa Memilih CuPI?
                    </h2>
                    <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">
                        Platform kesehatan terdepan dengan teknologi AI untuk penilaian risiko IMS
                    </p>
                </div>
                
                <div className="row">
                    {mainFeatures.map((item, i) => (
                        <div className="col-lg-4 col-md-6 mb-40 wow animate__animated animate__fadeInUp" data-wow-delay={`${i / 10}s`} key={i}>
                            <div className="card-feature text-center hover-up h-100">
                                <div className="feature-icon mb-30">
                                    {/* Sementara menggunakan emoji, nanti bisa diganti dengan gambar */}
                                    <div style={{fontSize: '64px'}}>
                                        {item.icon}
                                    </div>
                                    {/* 
                                    Untuk menggunakan gambar, uncomment baris di bawah ini
                                    dan tambahkan file gambar yang sesuai:
                                    
                                    <Image 
                                        src={item.image}
                                        alt={item.title}
                                        width={64}
                                        height={64}
                                        className="cupi-image"
                                    />
                                    */}
                                </div>
                                <div className="feature-content">
                                    <span className="color-linear text-sm mb-10 d-block">#{item.category}</span>
                                    <h4 className="color-white mb-20">{item.title}</h4>
                                    <p className="color-gray-500 mb-30">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-50">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="cta-section bg-gray-850 border-gray-800 p-50 border-radius-16">
                                <h3 className="color-white mb-20">Siap Untuk Memulai Konsultasi?</h3>
                                <p className="color-gray-500 mb-30">
                                    Dapatkan penilaian risiko IMS dalam hitungan menit. Proses yang mudah, aman, dan terpercaya.
                                </p>
                                <div className="d-flex flex-wrap justify-content-center gap-3">
                                    <ChatTrigger className="btn btn-linear btn-lg">
                                        Mulai Konsultasi Gratis
                                        <i className="fi-rr-comment-alt ms-10" />
                                    </ChatTrigger>
                                    <Link className="btn btn-outline-white btn-lg" href="/about">
                                        Pelajari Lebih Lanjut
                                        <i className="fi-rr-arrow-small-right ms-10" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditorPicked2;