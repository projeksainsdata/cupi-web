import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import Hero2 from "@/components/sections/Hero2"
import EditorPicked2 from "@/components/sections/EditorPicked2"
import TrendingTopic2 from "@/components/slider/TrendingTopic2"
import RecentPosts2 from "@/components/sections/RecentPosts2"
import Sidebar from "@/components/layout/Sidebar_health"
import HealthInfo from "@/components/sections/HealthInfo"

export default function Home2() {
    return (
        <>
            <Layout>
                <div className="cover-home1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <Hero2 />
                                <EditorPicked2 />
                                <TrendingTopic2 />
                                <div className="row mt-70">
                                    <div className="col-lg-12 mb-50">
                                        <h2 className="color-linear d-inline-block mb-10">Artikel Kesehatan Terbaru</h2>
                                        <p className="text-lg color-gray-500">Informasi terkini tentang kesehatan reproduksi dan pencegahan IMS</p>
                                    </div>
                                    <div className="col-lg-8">
                                        <RecentPosts2 />
                                    </div>
                                    <div className="col-lg-4">
                                        <Sidebar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HealthInfo />
            </Layout>
        </>
    )
}