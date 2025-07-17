"use client";

import { Button } from "@/components/ui/button";
import { 
  Check,
  Heart,
  Search,
  Eye,
  MessageCircle,
  ArrowRight,
  User,
  Bell
} from "lucide-react";
import { useRouter } from "next/navigation";
import AllPagesDropdown from "@/components/AllPagesDropdown";

export default function ProfileSuccessPage() {
  const router = useRouter();

  // This would come from the registration data in a real app
  const profileData = {
    elderlyPersonName: "Erik",
    familyContactName: "Anna",
    profileId: "1"
  };

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
            <AllPagesDropdown />
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
                Profilen för {profileData.elderlyPersonName} är skapad!
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Bra jobbat {profileData.familyContactName}! Nu kan vårdgivare se era behov och kontakta er.
              </p>
            </div>

            {/* What happens next */}
            <div className="bg-card rounded-3xl p-8 border border-border/30 text-left">
              <h2 className="text-xl font-medium text-primary mb-6 text-center flex items-center justify-center gap-2">
                <Bell className="h-5 w-5" />
                Vad händer nu?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">Din profil är nu synlig</h3>
                    <p className="text-sm text-muted-foreground">
                      Verifierade vårdgivare kan nu se {profileData.elderlyPersonName}s profil och era behov
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">Vårdgivare kan kontakta er</h3>
                    <p className="text-sm text-muted-foreground">
                      Intresserade vårdgivare kommer att skicka meddelanden om de passar era behov
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Search className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">Sök själv bland vårdgivare</h3>
                    <p className="text-sm text-muted-foreground">
                      Ni kan också aktivt söka och kontakta vårdgivare som verkar passa bra
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-primary">Vad vill du göra nu?</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  onClick={() => router.push('/companions')}
                  className="rounded-xl p-6 h-auto flex flex-col items-center space-y-2"
                  size="lg"
                >
                  <Search className="h-6 w-6" />
                  <span className="font-medium">Sök vårdgivare</span>
                  <span className="text-sm opacity-90">Hitta någon som passar</span>
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => router.push(`/care-seekers/${profileData.profileId}`)}
                  className="rounded-xl p-6 h-auto flex flex-col items-center space-y-2"
                  size="lg"
                >
                  <Eye className="h-6 w-6" />
                  <span className="font-medium">Se din profil</span>
                  <span className="text-sm opacity-70">Så som vårdgivare ser den</span>
                </Button>
              </div>

              <div className="pt-4">
                <Button 
                  variant="ghost"
                  onClick={() => router.push('/messages')}
                  className="rounded-xl"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Gå till meddelanden
                </Button>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="font-medium text-blue-800 mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Tips för att hitta rätt vårdgivare
              </h3>
              <ul className="text-sm text-blue-700 space-y-2 text-left">
                <li>• Läs igenom vårdgivarnas profiler och omdömen noggrant</li>
                <li>• Skicka personliga meddelanden som berättar om {profileData.elderlyPersonName}</li>
                <li>• Boka alltid ett första kostnadsfritt möte innan ni bestämmer er</li>
                <li>• Lita på er känsla - rätt person kommer att kännas naturlig</li>
              </ul>
            </div>

            {/* Bottom Action */}
            <div className="pt-8">
              <Button 
                onClick={() => router.push('/companions')}
                size="lg" 
                className="rounded-full px-8"
              >
                Börja söka vårdgivare
                <ArrowRight className="ml-2 h-5 w-5" />
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