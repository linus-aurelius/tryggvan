import { Suspense } from "react";
import CareSeekersContent from "@/components/CareSeekersContent";

function CareSeekersLoading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 bg-primary rounded-full animate-pulse mx-auto mb-4" />
        <p className="text-muted-foreground">Laddar familjer...</p>
      </div>
    </div>
  );
}

export default function CareSeekersPage() {
  return (
    <Suspense fallback={<CareSeekersLoading />}>
      <CareSeekersContent />
    </Suspense>
  );
}