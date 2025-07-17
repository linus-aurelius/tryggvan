"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  children: React.ReactNode;
}

export default function BackButton({ children }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={() => router.back()}
      className="p-2 hover:bg-secondary"
    >
      <ArrowLeft className="h-4 w-4 mr-2" />
      {children}
    </Button>
  );
}