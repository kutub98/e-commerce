// app/ClientPathWrapper.js
"use client";

import { usePathname } from "next/navigation";

export default function ClientPathWrapper({ children }) {
  const pathname = usePathname();
  return children(pathname);
}
