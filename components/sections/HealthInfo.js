import Link from "next/link"
import Image from "next/image"
import ChatTrigger from "../elements/ChatTrigger"

const HealthInfo = () => {
    const steps = [
        {
            step: "01",
            title: "Mulai Konsultasi",
            description: "Klik 'Mulai Konsultasi' dan jawab pertanyaan pembuka",
            icon: "🎯"
        },
        {
            step: "02", 
            title: "Isi Kuesioner",
            description: "Jawab serangkaian pertanyaan tentang gejala dan riwayat kesehatan",
            icon: "📝"
        },
        {
            step: "03",
            title: "Analisis AI",
            description: "Sistem menganalisis jawaban dengan algoritma machine learning",
            icon: "🧠"
        },
        {
            step: "04",
            title: "Terima Hasil",
            description: "Dapatkan penilaian risiko dan rekomendasi tindakan lanjutan",
            icon: "📊"
        }
    ];

    const trustIndicators = [
        { icon: "✅", label: "Berdasarkan Pedoman Medis Internasional" },
        { icon: "🔒", label: "Data Terenkripsi & Anonim" },
        { icon: "👨‍⚕️", label: "Dikembangkan Bersama Tenaga Medis" },
        { icon: "📱", label: "Akses 24/7 dari Mana Saja" }
    ];

    return (
        <>
            {/* How it Works Section */}
            <div className="section-how-it-works bg-gray-900 py-100">
                <div className="container">
                    <div className="text-center mb-70">
                        <h2 className="color-linear mb-20">Cara Kerja CuPI</h2>
                        <p className="text-lg color-gray-500">Proses konsultasi yang mudah dan cepat dalam 4 langkah sederhana</p>
                    </div>
                    <div className="row">
                        {steps.map((step, i) => (
                            <div className="col-lg-3 col-md-6 mb-40" key={i}>
                                <div className="card-step text-center hover-up wow animate__animated animate__fadeInUp" data-wow-delay={`${i / 10}s`}>
                                    <div className="step-number mb-20">
                                        <span className="color-white font-weight-bold">{step.step}</span>
                                    </div>
                                    <div className="step-icon mb-20" style={{fontSize: '48px'}}>
                                        {step.icon}
                                    </div>
                                    <h5 className="color-white mb-15">{step.title}</h5>
                                    <p className="color-gray-500">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trust & Security Section */}
            <div className="section-trust py-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-40">
                            <h2 className="color-linear mb-30">Kepercayaan & Keamanan</h2>
                            <p className="text-lg color-gray-500 mb-40">
                                CuPI dibangun dengan standar keamanan tertinggi dan berdasarkan pedoman medis internasional. 
                                Privasi Anda adalah prioritas utama kami.
                            </p>
                            <div className="trust-list">
                                {trustIndicators.map((item, i) => (
                                    <div className="trust-item d-flex align-items-center mb-20" key={i}>
                                        <div className="trust-icon me-15" style={{fontSize: '24px'}}>
                                            {item.icon}
                                        </div>
                                        <span className="color-gray-300">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 mb-40">
                            <div className="stats-grid">
                                <div className="row">
                                    <div className="col-6 mb-30">
                                        <div className="stat-card text-center p-30 bg-gray-850 border-gray-800">
                                            <div className="stat-number color-linear mb-10">
                                                <h3>95%</h3>
                                            </div>
                                            <div className="stat-label color-gray-500">
                                                Tingkat Akurasi
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-30">
                                        <div className="stat-card text-center p-30 bg-gray-850 border-gray-800">
                                            <div className="stat-number color-linear mb-10">
                                                <h3>24/7</h3>
                                            </div>
                                            <div className="stat-label color-gray-500">
                                                Tersedia Online
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-30">
                                        <div className="stat-card text-center p-30 bg-gray-850 border-gray-800">
                                            <div className="stat-number color-linear mb-10">
                                                <h3>10K+</h3>
                                            </div>
                                            <div className="stat-label color-gray-500">
                                                Konsultasi Selesai
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mb-30">
                                        <div className="stat-card text-center p-30 bg-gray-850 border-gray-800">
                                            <div className="stat-number color-linear mb-10">
                                                <h3>4.8/5</h3>
                                            </div>
                                            <div className="stat-label color-gray-500">
                                                Rating Pengguna
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="section-final-cta py-100 bg-gray-850">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
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
                            <h2 className="color-white mb-20">Mulai Konsultasi Kesehatan Anda Hari Ini</h2>
                            <p className="text-lg color-gray-500 mb-40">
                                Dapatkan penilaian risiko IMS yang akurat dan terpercaya. Proses anonim, aman, dan gratis.
                            </p>
                            <div className="d-flex flex-wrap justify-content-center gap-3 mb-40">
                                <ChatTrigger className="btn btn-linear btn-lg">
                                    Mulai Konsultasi Sekarang
                                    <i className="fi-rr-arrow-small-right ms-10"></i>
                                </ChatTrigger>
                                {/* <Link href="#" className="btn btn-outline-white btn-lg">
                                    Tentang CuPI
                                </Link> */}
                            </div>
                            <div className="emergency-note p-30 bg-gray-800 border-radius-12">
                                <div className="mb-15" style={{fontSize: '24px'}}>⚠️</div>
                                <p className="color-gray-400 mb-0">
                                    <strong>Penting:</strong> CuPI adalah alat skrining awal, bukan pengganti konsultasi medis profesional. 
                                    Untuk kondisi darurat, segera hubungi layanan kesehatan terdekat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HealthInfo;