import localFont from "next/font/local";
import Header from "./components/Header";
import "./globals.css";

const switzer = localFont({
  src: [
    { path: "./fonts/Switzer-Regular.woff", weight: "400" },
    { path: "./fonts/Switzer-Medium.woff", weight: "500" },
    { path: "./fonts/Switzer-Semibold.woff", weight: "600" },
    { path: "./fonts/Switzer-Bold.woff", weight: "700" },
  ]
});

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>

  );
}