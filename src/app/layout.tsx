import type { Metadata } from "next";
import { CartProvider } from "./context/cart-context";
import "./globals.css";
import Navbar from "@/component/NavBar";
import Footer from "@/component/Footer";
import AnimatedParticles from "@/component/AnimatedParticles"; 

export const metadata: Metadata = {
  title: "Freshora Laundry",
  description: "Your one-stop solution for all laundry needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @keyframes rise-and-sway {
            0% {
              transform: translateY(0) translateX(0) scale(0.5);
              opacity: 0;
            }
            10% {
              opacity: 0.7;
            }
            90% {
              opacity: 0.7;
            }
            100% {
              transform: translateY(-100vh) translateX(calc(var(--left-end) - var(--left-start))) scale(1);
              opacity: 0;
            }
          }
          .particle {
            position: absolute;
            bottom: -150px;
            width: var(--size);
            height: var(--size);
            left: var(--left-start);
            animation: rise-and-sway var(--duration) linear var(--delay) infinite;
            user-select: none;
            pointer-events: none;
          }
          body {
            background-color: transparent;
          }
        `}</style>
      </head>
      <body>
        <CartProvider>
          <AnimatedParticles />
          <div className="relative z-10 bg-[#f7fafc]">
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
