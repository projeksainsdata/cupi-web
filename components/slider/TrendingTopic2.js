'use client'
import Link from 'next/link'
import Image from 'next/image'

import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },

    // Navigation
    navigation: {
        prevEl: ".swiper-button-prev-style-2",
        nextEl: ".swiper-button-next-style-2",
    },

    //responsive
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
}

const TrendingTopic2 = () => {
    const healthTopics = [
        {
            title: "Pencegahan HIV/AIDS",
            article: 15,
            icon: "🔴",
            description: "Panduan lengkap pencegahan dan pengobatan"
        },
        {
            title: "Kesehatan Reproduksi",
            article: 23,
            icon: "💗",
            description: "Tips menjaga kesehatan organ reproduksi"
        },
        {
            title: "Gonore & Klamidia",
            article: 12,
            icon: "🔬",
            description: "Deteksi dini dan pengobatan"
        },
        {
            title: "Sifilis",
            article: 8,
            icon: "⚕️",
            description: "Gejala dan tahapan penyakit"
        },
        {
            title: "Herpes Genital",
            article: 18,
            icon: "🩺",
            description: "Manajemen dan pencegahan"
        },
        {
            title: "HPV & Kanker",
            article: 11,
            icon: "🎗️",
            description: "Vaksinasi dan screening"
        },
        {
            title: "Hepatitis B",
            article: 9,
            icon: "💛",
            description: "Penularan dan pencegahan"
        },
        {
            title: "Konseling Seksual",
            article: 14,
            icon: "💬",
            description: "Dukungan psikologis dan edukasi"
        }
    ];

    return (
        <>
            <div className="text-center mt-70">
                <h2 className="color-linear mb-10">Topik Kesehatan Populer</h2>
                <p className="text-lg color-gray-500">Jelajahi artikel-artikel terpilih tentang kesehatan reproduksi</p>
            </div>
            <div className="mb-70 mt-70">
                <div className="box-swiper">
                    <div className="swiper-container">
                        <Swiper {...swiperOptions}
                            className="swiper-wrapper"
                        >
                            {healthTopics.map((item, i) => (
                                <SwiperSlide className="swiper-slide" key={i}>
                                    <div className="card-style-1">
                                        <Link href="/blog-archive">
                                            <div className="card-image" style={{
                                                backgroundColor: '#1a1a2e',
                                                height: '303px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                position: 'relative',
                                                borderRadius: '8px'
                                            }}>
                                                <div style={{fontSize: '64px', marginBottom: '20px'}}>
                                                    {item.icon}
                                                </div>
                                                <div className="card-info" style={{
                                                    position: 'absolute',
                                                    bottom: '0',
                                                    left: '0',
                                                    right: '0',
                                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                                    padding: '20px'
                                                }}>
                                                    <div className="info-bottom">
                                                        <h6 className="color-white mb-5">{item.title}</h6>
                                                        <p className="text-xs color-gray-400 mb-5">{item.description}</p>
                                                        <p className="text-xs color-linear">{item.article} Artikel</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-button-prev swiper-button-prev-style-2" />
                        <div className="swiper-button-next swiper-button-next-style-2" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrendingTopic2;

