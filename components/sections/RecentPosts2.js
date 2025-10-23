
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/components/elements/Pagination"

const RecentPosts2 = () => {
    const healthArticles = [
        {
            id: 1,
            title: "Mengenal Jenis-jenis Infeksi Menular Seksual",
            category: "Edukasi",
            duration: "5",
            authorName: "Dr. Sarah",
            date: "23 Oktober 2025",
            excerpt: "Panduan lengkap tentang berbagai jenis IMS dan cara pencegahannya."
        },
        {
            id: 2,
            title: "Pentingnya Deteksi Dini IMS",
            category: "Pencegahan",
            duration: "4",
            authorName: "Dr. Ahmad",
            date: "22 Oktober 2025",
            excerpt: "Mengapa deteksi dini sangat penting untuk pengobatan yang efektif."
        },
        {
            id: 3,
            title: "Cara Berkomunikasi dengan Pasangan tentang Kesehatan Seksual",
            category: "Komunikasi",
            duration: "6",
            authorName: "Dr. Maya",
            date: "21 Oktober 2025",
            excerpt: "Tips untuk memulai percakapan yang sulit namun penting."
        },
        {
            id: 4,
            title: "Mitos dan Fakta seputar IMS",
            category: "Edukasi",
            duration: "3",
            authorName: "Dr. Budi",
            date: "20 Oktober 2025",
            excerpt: "Membongkar mitos yang beredar dan menyajikan fakta ilmiah."
        },
        {
            id: 5,
            title: "Panduan Penggunaan Chatbot CuPI",
            category: "Tutorial",
            duration: "7",
            authorName: "Tim CuPI",
            date: "19 Oktober 2025",
            excerpt: "Langkah-langkah menggunakan CuPI untuk penilaian risiko optimal."
        },
        {
            id: 6,
            title: "Kapan Harus Berkonsultasi dengan Dokter",
            category: "Konsultasi",
            duration: "4",
            authorName: "Dr. Lisa",
            date: "18 Oktober 2025",
            excerpt: "Mengenali tanda-tanda yang memerlukan perhatian medis segera."
        },
        {
            id: 7,
            title: "Kesehatan Mental dan IMS",
            category: "Psikologi",
            duration: "8",
            authorName: "Dr. Rina",
            date: "17 Oktober 2025",
            excerpt: "Dampak psikologis IMS dan cara mengatasinya."
        },
        {
            id: 8,
            title: "Pencegahan IMS untuk Remaja",
            category: "Remaja",
            duration: "5",
            authorName: "Dr. Andi",
            date: "16 Oktober 2025",
            excerpt: "Panduan khusus untuk remaja tentang kesehatan reproduksi."
        }
    ];

    return (
        <>
            <div className="box-list-posts">
                <div className="row">
                    {healthArticles.map((item, i) => (
                        <div className="col-lg-6" key={i}>
                            <div className="card-blog-1 hover-up wow animate__animated animate__fadeIn" data-wow-delay={`${i / 10}s`}>
                                <div className="card-image mb-20">
                                    <div style={{
                                        height: '200px',
                                        backgroundColor: '#1a1a2e',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '8px'
                                    }}>
                                        <div style={{fontSize: '48px'}}>
                                            {item.category === 'Edukasi' ? '📚' : 
                                             item.category === 'Pencegahan' ? '🛡️' :
                                             item.category === 'Komunikasi' ? '💬' :
                                             item.category === 'Tutorial' ? '🎯' :
                                             item.category === 'Konsultasi' ? '👩‍⚕️' :
                                             item.category === 'Psikologi' ? '🧠' :
                                             item.category === 'Remaja' ? '👥' : '📖'}
                                        </div>
                                    </div>
                                </div>
                                <div className="card-info">
                                    <div className="row">
                                        <div className="col-7">
                                            <Link className="color-linear text-sm" href="/blog-archive">
                                                #{item.category}
                                            </Link>
                                        </div>
                                        <div className="col-5 text-end">
                                            <span className="color-gray-700 text-sm timeread">{item.duration} menit baca</span>
                                        </div>
                                    </div>
                                    <Link href={`/blog/${item.id}`}>
                                        <h5 className="color-gray-50 mt-20">{item.title}</h5>
                                    </Link>
                                    <p className="color-gray-500 mt-10 text-sm">{item.excerpt}</p>
                                    <div className="row align-items-center mt-25">
                                        <div className="col-7">
                                            <div className="box-author">
                                                <Image width={48} height={48} src="/assets/imgs/page/homepage2/author.png" alt="Doctor" />
                                                <div className="author-info">
                                                    <h6 className="color-gray-700">{item.authorName}</h6>
                                                    <span className="color-gray-700 text-sm">{item.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5 text-end">
                                            <Link className="readmore color-gray-500 text-sm" href={`/blog/${item.id}`}>
                                                <span>Baca</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Pagination />
            </div>
        </>
    );
};

export default RecentPosts2;