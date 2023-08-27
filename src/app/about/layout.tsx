import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yash Kelkar | About",
  description: "About me",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
