import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yash Kelkar | Projects",
  description: "My Projects",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
