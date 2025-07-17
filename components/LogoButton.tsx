"use client";

import { useRouter } from "next/navigation";

export default function LogoButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push('/')}
      className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
    >
      <div className="w-8 h-8 bg-primary rounded-full" />
      <span className="text-lg font-medium text-primary">TryggVän</span>
    </button>
  );
}