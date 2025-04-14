import AuthLayout from "@/components/AuthLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AuthLayout>{children}</AuthLayout>
      </body>
    </html>
  );
}
