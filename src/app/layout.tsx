import type { Metadata } from "next";

// ✅ Import fonts properly
import { Sora, Figtree, Quicksand } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Make",
  description: "Make",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Keep only external CSS (icons ok) */}
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
      </head>

      {/* ✅ Apply fonts here */}
      <body
        className={`${sora.variable} ${figtree.variable} ${quicksand.variable} font-sora`}
      >
        {children}
      </body>
    </html>
  );
}