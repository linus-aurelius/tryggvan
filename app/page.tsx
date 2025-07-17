"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search,
  MapPin,
  ArrowRight,
  Check
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginPopup from "@/components/LoginPopup";
import RegisterPopup from "@/components/RegisterPopup";
import AllPagesDropdown from "@/components/AllPagesDropdown";

export default function Home() {
  const router = useRouter();
  const [searchLocation, setSearchLocation] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to companions page with search parameter
    const searchParams = new URLSearchParams();
    if (searchLocation.trim()) {
      searchParams.set('location', searchLocation.trim());
    }
    router.push(`/companions?${searchParams.toString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => router.push('/')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-primary rounded-full" />
              <span className="text-lg font-medium text-primary">TryggVän</span>
            </button>
            <div className="flex items-center space-x-8">
              <AllPagesDropdown />
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Logga in
              </button>
              <Button 
                onClick={() => setIsRegisterOpen(true)}
                className="rounded-full px-6"
              >
                Registrera
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-8 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-pink-50 to-green-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-medium text-primary leading-tight">
                  Sällskap för dina<br />älskade föräldrar
                </h1>
                <p className="text-lg text-muted-foreground">
                  Ange postnummer och se vilka vårdgivare som finns tillgängliga i området
                </p>
                
                {/* Search Bar */}
                <div className="max-w-lg">
                  <form onSubmit={handleSearch}>
                    <div className="bg-white rounded-lg p-1 flex items-center gap-2 shadow-sm">
                      <div className="flex-1 flex items-center px-4">
                        <input 
                          type="text"
                          placeholder="Var bor dina föräldrar?" 
                          value={searchLocation}
                          onChange={(e) => setSearchLocation(e.target.value)}
                          className="flex-1 bg-transparent outline-none text-base placeholder:text-muted-foreground py-3"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="rounded-lg px-6 bg-primary hover:bg-primary/90"
                      >
                        Hitta vårdgivare
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </div>

                <div className="pt-2 space-y-2">
                  <p className="text-primary">
                    Letar du efter jobb? 
                    <button 
                      onClick={() => router.push('/create-profile')}
                      className="text-blue-600 hover:text-blue-800 ml-1 font-medium"
                    >
                      Skapa en profil →
                    </button>
                  </p>
                  <p className="text-primary">
                    Vårdgivare? 
                    <button 
                      onClick={() => router.push('/care-seekers')}
                      className="text-green-600 hover:text-green-800 ml-1 font-medium"
                    >
                      Se familjer som söker hjälp →
                    </button>
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img 
                    src="/hero-image.png" 
                    alt="Äldre person med sällskap" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section - Minimalist */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Promenader",
              "Fika",
              "Läsning",
              "Samtal",
              "Hemhjälp",
              "Matlagning",
              "Trädgård",
              "Spel"
            ].map((activity) => (
              <div 
                key={activity}
                className="group cursor-pointer"
                onClick={() => router.push('/companions')}
              >
                <div className="h-32 bg-secondary rounded-3xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <span className="text-lg font-medium text-primary/80 group-hover:text-primary">
                    {activity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works - Clean Steps */}
      <section className="py-20 px-4 lg:px-8 bg-secondary/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-light text-primary mb-16 text-center">
            Så enkelt fungerar det
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-light text-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2">Berätta om era behov</h3>
                <p className="text-muted-foreground">
                  Fyll i information om dina föräldrar och vilken typ av sällskap ni söker
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-light text-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2">Vi matchar er</h3>
                <p className="text-muted-foreground">
                  Baserat på era önskemål hittar vi passande sällskap i ert område
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-light text-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2">Träffas tryggt</h3>
                <p className="text-muted-foreground">
                  Börja med ett första möte och bygg sedan upp en trygg relation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light text-primary mb-6">
            Ge dina föräldrar sällskap de förtjänar
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Starta idag och hitta någon som kan göra deras vardag lite ljusare
          </p>
          <Button size="lg" className="rounded-full px-10">
            Kom igång
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer - Minimal */}
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

      {/* Popups */}
      <LoginPopup 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onOpenRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />
      <RegisterPopup 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)}
        onOpenLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </div>
  );
}