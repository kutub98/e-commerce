import localFont from "next/font/local";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata = {
  title: "Daily Necessities || Super Shop",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className={`${geistSans.variable} ${geistMono.variable}`}>
          <h1>Admin Header</h1>
          {children}
          <footer>Admin Footer</footer>
        </div>
      </body>
    </html>
  );
}
