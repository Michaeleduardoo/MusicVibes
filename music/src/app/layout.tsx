import "./globals.css";

export const metadata = {
  title: "MusicVibes",
  description: "Ouvir música",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-Br">
      <body className=" bg-cyan-800 text-zinc-50">{children}</body>
    </html>
  );
}
