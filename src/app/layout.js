import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Playfair_Display, Be_Vietnam_Pro } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bevietnam",
  display: "swap",
});

export const metadata = {
  title: "Gia Hảo Trương — Portfolio",
  description:
    "Business Assistant / Marketing Assistant Portfolio — bridging creativity and business logic.",
  icons: {
    icon: "https://res.cloudinary.com/dd7gti2kn/image/upload/v1751001518/samples/people/Giaohao/giahao_1_h731cm.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${beVietnam.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
