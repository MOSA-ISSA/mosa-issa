import localFont from "next/font/local";
import "./globals.css";
import TheProvider from './hooks/TheProvider';
import Theme from './Theme';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "mosa issa",
  description: "cv",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TheProvider>
          <Theme>
            {children}
          </Theme>
        </TheProvider>
      </body>
    </html>
  );
}
