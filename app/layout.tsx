import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Backend Developer Portfolio | PHP Laravel API Engineer",
  description: "Professional developer portfolio for a Backend Developer specializing in PHP, Laravel, RESTful API, MySQL, Redis, RabbitMQ, and system integration."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
