// import localFont from "next/font/local";
import "../globals.css";
import NavBar from "../Components/Shared/NavBar";

// const geistSans = localFont({
//   src: "../fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900"
// });
// const geistMono = localFont({
//   src: "../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900"
// });

export const metadata = {
  title: "Daily Necessities || Super Shop",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="bg-white z-[999]"> */}
        <NavBar />
        {/* </div> */}
        {children}
      </body>
    </html>
  );
}
