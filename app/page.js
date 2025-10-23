import Head from 'next/head'
import Layout from "@/components/layout/Layout"
import Hero2 from "@/components/sections/Hero2"
import EditorPicked2 from "@/components/sections/EditorPicked2"
import HealthInfo from "@/components/sections/HealthInfo"
import SocialChat from "@/components/sections/SocialChat"

export default function Home() {
    return (
        <>
            <Head>
                <title>CuPI - Chatbot untuk Pemeriksaan IMS | Konsultasi Kesehatan Online</title>
                <meta name="description" content="CuPI adalah chatbot AI untuk penilaian risiko Infeksi Menular Seksual. Dapatkan konsultasi kesehatan yang aman, privat, dan terpercaya 24/7." />
                <meta name="keywords" content="chatbot kesehatan, IMS, infeksi menular seksual, konsultasi online, penilaian risiko, kesehatan reproduksi" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                {/* Hero Section - Layer 1 */}
                <div className="cover-home1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10 col-lg-12">
                                <Hero2 />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section - Layer 2 */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-1" />
                        <div className="col-xl-10 col-lg-12">
                            <EditorPicked2 />
                        </div>
                    </div>
                </div>

                {/* Additional Info Section - Layer 3 */}
                <HealthInfo />

                {/* Social Chat Section - Layer 4 */}
                <SocialChat />
            </Layout>
        </>
    )
}