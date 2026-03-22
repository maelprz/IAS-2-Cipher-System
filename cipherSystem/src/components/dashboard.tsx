import React from "react";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Cipher Dashboard</h1>
      {children}
    </div>
  );
}
