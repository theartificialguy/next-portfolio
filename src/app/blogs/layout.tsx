import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yash Kelkar | Blogs",
  description: "My Blogs",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
