import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/ui/navbar";

const bebasNue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Seblak Super Balikpapan",
  description:
    "Rekomendasi Seblak Favorit di Kota Balikpapan, Balikin moodmu dengan satu suapan.",
  openGraph: {
    title: "Seblak Super Balikpapan",
    description: "Rekomendasi seblak terenak di Balikpapan",
    url: "https://seblaksuper.vercel.app",
    siteName: "Seblak Super",
    images: [
      {
        url: "https://seblaksuper.vercel.app/seblak-super-logo.svg",
        width: 800,
        height: 600,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bebasNue.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative flex flex-col">
            <Navbar />
            <div className="mt-12 lg:mt-16 p-4">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
