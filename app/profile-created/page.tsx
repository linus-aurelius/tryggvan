"use client";

import { Button } from "@/components/ui/button";
import { 
  CheckCircle,
  Clock,
  Shield,
  Mail,
  ArrowRight
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfileCreatedPage() {
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
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-light text-primary mb-4">
              Välkommen till TryggVän!
            </h1>
            <p className="text-lg text-muted-foreground">
              Tack för att du vill hjälpa äldre personer i din kommun. Din profil har skapats framgångsrikt.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border/30 mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-xl font-medium mb-2">Nästa steg: Verifiering</h2>
                <p className="text-muted-foreground">
                  Vi behöver nu verifiera din identitet och göra en bakgrundskontroll för att säkerställa tryggheten för alla våra användare.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Identitetsverifiering med personnummer</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Bakgrundskontroll och referenser</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">Verifiering av kontaktuppgifter</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <h3 className="font-medium mb-2">Vad händer nu?</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Vi kommer att kontakta dig inom 24 timmar via e-post</p>
              <p>• Verifieringsprocessen tar normalt 2-5 arbetsdagar</p>
              <p>• Du får ett mejl när din profil är godkänd och aktiverad</p>
              <p>• Då kan du börja ta emot förfrågningar från familjer</p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Har du frågor under tiden? Kontakta oss på <br />
              <a href="mailto:support@tryggvan.se" className="text-primary font-medium">support@tryggvan.se</a>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                variant="outline" 
                onClick={() => router.push('/companions')}
                className="rounded-full px-6"
              >
                Utforska andra vårdgivare
              </Button>
              <Button 
                onClick={() => router.push('/')}
                className="rounded-full px-6"
              >
                Tillbaka till startsidan
                <ArrowRight className="ml-2 h-4 w-4" />
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