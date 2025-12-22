import "./globals.css";


export const metadata = {
  title: "Aryan | Full Stack Developer | Next.js, TypeScript | Portfolio website",
  description:
    "Aryan is a full-stack developer building scalable web apps using Next.js, TypeScript, Tailwind, and MERN stack.",
  keywords: [
    "Aryan developer",
    "Aryan Code",
    "Aryancode27",
    "Full stack developer portfolio",
    "Next.js developer India",
    "MERN stack developer",
    "Frontend developer portfolio",
  ],
  openGraph: {
    title: "Aryan – Full Stack Developer",
    description:
      "Portfolio of Aryan, a full-stack developer focused on clean UI and scalable systems.",
    url: "https://aryancode27.vercel.app",
    siteName: "Aryan Portfolio",
    images: ["/icon.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
