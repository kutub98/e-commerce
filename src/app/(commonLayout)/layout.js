import NavBar from "../Components/Shared/NavBar";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js"
};

export default function CommonLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
