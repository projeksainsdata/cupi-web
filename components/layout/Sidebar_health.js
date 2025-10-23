import Link from "next/link"
import IconWithFallback from "../elements/IconWithFallback"
import ChatTrigger from "../elements/ChatTrigger"
import Image from "next/image"

const Sidebar = ({ openClass }) => {
    const popularHealthPosts = [
        {
            id: 1,
            title: "Tips Konsultasi dengan CuPI",
            duration: "3",
            date: "23 Okt 2025",
            icon: "💬"
        },
        {
            id: 2,
            title: "Pentingnya Skrining Rutin IMS",
            duration: "5",
            date: "22 Okt 2025",
            icon: "🔍"
        },
        {
            id: 3,
            title: "Cara Menjaga Privasi Online",
            duration: "4",
            date: "21 Okt 2025",
            icon: "🔒"
        },
        {
            id: 4,
            title: "Mengatasi Kecemasan Kesehatan",
            duration: "6",
            date: "20 Okt 2025",
            icon: "🧠"
        },
        {
            id: 5,
            title: "Panduan Hidup Sehat",
            duration: "7",
            date: "19 Okt 2025",
            icon: "💪"
        }
    ];

    const testimonials = [
        {
            content: "CuPI sangat membantu saya memahami risiko kesehatan dengan cara yang aman dan privat.",
            authorName: "Anonymous User",
            date: "2 hari lalu",
            avatar: "avatar1.jpg"
        },
        {
            content: "Interface yang mudah dipahami dan informasi yang akurat. Sangat direkomendasikan!",
            authorName: "Pengguna CuPI",
            date: "1 minggu lalu",
            avatar: "avatar2.jpg"
        },
        {
            content: "Fitur edukasi di CuPI membuka mata saya tentang pentingnya kesehatan reproduksi.",
            authorName: "User Terdaftar",
            date: "2 minggu lalu",
            avatar: "avatar3.jpg"
        }
    ];

    const healthStats = [
        { icon: "📊", label: "Konsultasi Selesai", value: "10,000+" },
        { icon: "👥", label: "Pengguna Aktif", value: "5,000+" },
        { icon: "⭐", label: "Rating Kepuasan", value: "4.8/5" },
        { icon: "🏥", label: "Klinik Partner", value: "50+" },
        { icon: "📚", label: "Artikel Tersedia", value: "200+" },
        { icon: "🔬", label: "Accuracy Rate", value: "95%" }
    ];

    return (
        <>
            <div className="sidebar">
                <div className="box-sidebar bg-gray-850 border-gray-800">
                    <div className="head-sidebar wow animate__animated animate__fadeIn">
                        <h5 className="line-bottom">Artikel Populer</h5>
                    </div>
                    <div className="content-sidebar">
                        <div className="list-posts">
                            {popularHealthPosts.map((item, i) => (
                                <div className="item-post wow animate__animated animate__fadeIn" data-wow-delay={`${i / 10}s`} key={i}>
                                    <div className="image-post">
                                        <Link href={`/blog/${item.id}`}>
                                            <div style={{
                                                width: '64px',
                                                height: '64px',
                                                backgroundColor: '#1a1a2e',
                                                borderRadius: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '24px'
                                            }}>
                                                {item.icon}
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="info-post border-gray-800">
                                        <Link href={`/blog/${item.id}`}>
                                            <h6 className="color-white">{item.title}</h6>
                                        </Link>
                                        <span className="color-gray-700">{item.duration} menit baca</span>
                                        <ul className="d-inline-block">
                                            <li className="color-gray-700">{item.date}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="box-sidebar bg-gray-850 border-gray-800">
                    <div className="head-sidebar wow animate__animated animate__fadeIn">
                        <h5 className="line-bottom">Testimoni Pengguna</h5>
                    </div>
                    <div className="content-sidebar">
                        <div className="list-comments">
                            {testimonials.map((item, i) => (
                                <div className="item-comment border-gray-800 wow animate__animated animate__fadeIn" data-wow-delay={`${i / 10}s`} key={i}>
                                    <p className="color-gray-500 mb-20">&ldquo;{item.content}&rdquo;</p>
                                    <div className="box-author-small">
                                        <div style={{
                                            width: '32px',
                                            height: '32px',
                                            backgroundColor: '#4f46e5',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '14px',
                                            fontWeight: 'bold'
                                        }}>
                                            {item.authorName.charAt(0)}
                                        </div>
                                        <div className="author-info">
                                            <span className="d-block color-gray-700 text-sm">{item.authorName}</span>
                                            <span className="color-gray-700 text-xs">{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="box-sidebar bg-gray-850 border-gray-800">
                    <div className="head-sidebar">
                        <div className="text-center">
                            <h2 className="color-linear mb-10">CuPI</h2>
                            <h6 className="color-gray-700">Statistik Platform</h6>
                        </div>
                    </div>
                    <div className="content-sidebar">
                        <div className="row mt-30 mb-10">
                            {healthStats.map((item, i) => (
                                <div className="col-sm-6 col-6 mb-20 wow animate__animated animate__fadeIn" data-wow-delay={`${i / 10}s`} key={i}>
                                    <div className="text-center p-3" style={{
                                        backgroundColor: '#1a1a2e',
                                        borderRadius: '8px',
                                        border: '1px solid #333'
                                    }}>
                                        <div style={{fontSize: '24px', marginBottom: '8px'}}>
                                            {item.icon}
                                        </div>
                                        <div className="color-linear text-sm font-weight-bold">
                                            {item.value}
                                        </div>
                                        <div className="color-gray-600 text-xs">
                                            {item.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-20">
                            <ChatTrigger className="btn btn-linear btn-sm">
                                Mulai Konsultasi
                            </ChatTrigger>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;