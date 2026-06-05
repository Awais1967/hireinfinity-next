import "./globals.css";
import { Geist_Mono, Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { AppSplash } from "../common/ui/AppSplash";
import { Nav } from "../layout/Nav";
import { Footer } from "../layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://hireinfinity.com"),
  title: {
    default: "HireInfinity",
    template: "%s | HireInfinity",
  },
  description: "Hire senior, vetted engineers compatible with your hours in 5 days or less.",
  openGraph: {
    title: "HireInfinity",
    description: "Hire senior, vetted engineers compatible with your hours in 5 days or less.",
    url: "https://hireinfinity.com",
    siteName: "HireInfinity",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} min-h-full`} suppressHydrationWarning>
        <AppSplash />
        <div className="flex min-h-screen flex-col bg-[#fafbfc] font-sans selection:bg-blue-600/30 selection:text-blue-200">
          <Nav />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
