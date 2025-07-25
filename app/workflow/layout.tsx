import React from "react";
import type { Metadata } from "next";
import WorkflowSidebar from "@/components/sidebar/workflow-sidebar";

export const metadata: Metadata = {
  title: "Zenorizon",
  description: "Workflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex">
        <WorkflowSidebar />
        {children}
      </div>
    </>
  );
}
