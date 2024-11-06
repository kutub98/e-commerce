import { Inter } from "next/font/google";
import "./globals.css";

// export const metadata = Metadata({
//   title: "PH Health Care",
//   description: "Dashboard"
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
