import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bonk Lab",
  description: "Enter a new frequency",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen bg-black text-white overflow-x-hidden`}>
        
        {/* Stars Background */}
        <Image
          src="/stars-subtle.png"
          alt="Stars Background"
          fill
          className="object-cover z-0 pointer-events-none"
          priority
        />

        {/* Bonk Logo Top Left */}
        <div className="absolute top-4 left-4 z-50">
          <Image
            src="/bonk-icon.png"
            alt="Bonk Lab Logo"
            width={60}
            height={60}
            className="hover:rotate-12 transition-transform duration-300"
          />
        </div>

        {/* Page Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
