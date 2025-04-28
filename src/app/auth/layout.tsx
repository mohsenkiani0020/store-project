

import AuthLayout from "@/components/AuthLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
};

export default function AuthRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  );
}
