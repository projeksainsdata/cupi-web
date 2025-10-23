import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import '@/public/assets/css/style.css'
import '@/public/assets/css/health-theme.css'

import { Noto_Sans } from "next/font/google";

import { ThemeProvider } from '@/utils/themeContext';


const notoSans = Noto_Sans({
  variable: "--font-noto-san",
  subsets: ["latin"],
});

export const metadata = {
  title: "CuPI - Chatbot untuk Pemeriksaan IMS | Konsultasi Kesehatan Online",
  description: "CuPI adalah chatbot AI untuk penilaian risiko Infeksi Menular Seksual. Dapatkan konsultasi kesehatan yang aman, privat, dan terpercaya 24/7.",
  keywords: "chatbot kesehatan, IMS, infeksi menular seksual, konsultasi online, penilaian risiko, kesehatan reproduksi",
  author: "CuPI Health Team",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#4f46e5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
