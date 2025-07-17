import { Suspense } from "react";
import CompanionsContent from "@/components/CompanionsContent";

function CompanionsLoading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 bg-primary rounded-full animate-pulse mx-auto mb-4" />
        <p className="text-muted-foreground">Laddar sällskap...</p>
      </div>
    </div>
  );
}

export default function CompanionsPage() {
  return (
    <Suspense fallback={<CompanionsLoading />}>
      <CompanionsContent />
    </Suspense>
  );
}