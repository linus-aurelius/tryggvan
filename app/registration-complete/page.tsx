"use client";

import { Button } from "@/components/ui/button";
import { 
  Check,
  Heart,
  Mail,
  Clock,
  ArrowRight
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function RegistrationCompletePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => router.push('/')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-primary rounded-full" />
              <span className="text-lg font-medium text-primary">TryggVän</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <div className="container mx-auto max-w-2xl px-4 lg:px-8 py-16">
          {/* Success Content */}
          <div className="text-center space-y-8">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="h-10 w-10 text-green-600" />
            </div>

            {/* Main Message */}
            <div className="space-y-4">
              <h1 className="text-3xl font-light text-primary">
                Välkommen till TryggVän!
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Ditt konto har skapats och vi börjar genast leta efter passande sällskap
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-card rounded-3xl p-8 border border-border/30 text-left">
              <h2 className="text-xl font-medium text-primary mb-6 text-center">
                Vad händer nu?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">Bekräfta din e-post</h3>
                    <p className="text-sm text-muted-foreground">
                      Vi har skickat en bekräftelselänk till din e-post. Klicka på länken för att aktivera ditt konto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">Vi matchar er</h3>
                    <p className="text-sm text-muted-foreground">
                      Baserat på era önskemål letar vi efter passande sällskap i ert område.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">Få förslag inom 24 timmar</h3>
                    <p className="text-sm text-muted-foreground">
                      Ni får förslag på lämpliga sällskap via e-post och kan sedan välja vem ni vill träffa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="font-medium text-blue-800 mb-2">Kom ihåg:</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Första mötet är alltid kostnadsfritt</li>
                <li>• Ni bestämmer helt själva vem ni vill träffa</li>
                <li>• All kommunikation sker via vår säkra plattform</li>
                <li>• Ni kan ändra era önskemål när som helst</li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => router.push('/companions')}
                className="rounded-full px-8"
              >
                Bläddra bland sällskap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => router.push('/')}
                className="rounded-full px-8"
              >
                Tillbaka till startsidan
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 lg:px-8 border-t border-border/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <button 
              onClick={() => router.push('/')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-primary rounded-full" />
              <span className="text-lg font-medium text-primary">TryggVän</span>
            </button>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Om oss</a>
              <a href="#" className="hover:text-primary transition-colors">Säkerhet</a>
              <a href="#" className="hover:text-primary transition-colors">Kontakt</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}