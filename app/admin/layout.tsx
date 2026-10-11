import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Harun SEO",
  description: "Secure Admin Management Panel for Md. Harun or Roshid",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
