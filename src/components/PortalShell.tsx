"use client";

import { useState, type ReactNode } from "react";
import BlackHolePortal from "@/components/BlackHolePortal";

export default function PortalShell({ children }: { children: ReactNode }) {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <BlackHolePortal onFinished={() => setEntered(true)} />}
      {entered && <div className="fade-in-up">{children}</div>}
    </>
  );
}


