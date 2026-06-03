import "./globals.css";
import { Nav } from "../layout/Nav";
import { Footer } from "../layout/Footer";

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
      <body className="min-h-full">
        <div className="flex min-h-screen flex-col bg-[#fafbfc] selection:bg-blue-600/30 selection:text-blue-200">
          <Nav />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
