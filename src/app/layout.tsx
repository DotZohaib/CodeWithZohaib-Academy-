import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import Providers from "@/components/ProgressBarProvider";

// Font Setup
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

// Page Metadata
export const metadata: Metadata = {
  title: "CodeWithZohaib | Learn Programming Languages & All Courses Online",
  description: "CodeWithZohaib offers an extensive range of courses to empower you with in-depth knowledge in Next.js, JavaScript, Python, C++, and many other programming languages and frameworks. Whether you're a beginner or an advanced developer, our expert-led tutorials, hands-on projects, and interactive lessons are designed to help you master coding skills and excel in the tech world. Join us today for access to up-to-date resources and start your journey to becoming a skilled developer across all major languages and technologies.",
};

// RootLayout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
