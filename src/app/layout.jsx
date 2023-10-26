import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "mohiudDin || Food Website",
  description: "Best Food Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="inter.className max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
