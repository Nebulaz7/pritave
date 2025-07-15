import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pritave - Anonymous Chat Rooms",
  description:
    "Speak freely in anonymous, time-limited chat rooms. Filtered or unfiltered. Your voice, your rules.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="font-proxima antialiased">{children}</body>
    </html>
  );
}
