"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  Check,
  Calendar,
  MessageCircle
} from "lucide-react";
import { useRouter } from "next/navigation";
import AllPagesDropdown from "@/components/AllPagesDropdown";

export default function CompanionProfile({ params }: { params: { id: string } }) {
  const router = useRouter();

  // Mock data - in real app would fetch based on params.id
  const companion = {
    id: 1,
    name: "Anna Lindström",
    location: "Stockholm",
    age: 58,
    rating: 4.9,
    reviewCount: 23,
    price: 150,
    verified: true,
    bio: "Hej! Jag är en glad och energisk pensionär som älskar att träffa nya människor. Efter 30 år som sjuksköterska vet jag hur viktigt det är med gott sällskap och meningsfulla samtal. Jag älskar att promenera, fika och bara vara närvarande med andra människor.",
    activities: ["Promenader", "Fika", "Samtal", "Spel", "Hemhjälp"],
    availability: "Måndag-fredag 09:00-17:00",
    minBooking: "2 timmar",
    languages: ["Svenska", "Engelska"],
    experience: "5 år inom sällskapstjänster",
    image: "/api/placeholder/400/400"
  };

  const reviews = [
    {
      id: 1,
      rating: 5,
      comment: "Anna är underbar! Min mamma ser alltid fram emot deras träffar. Hon är så varm och omtänksam.",
      author: "Karin J.",
      date: "2 veckor sedan"
    },
    {
      id: 2,
      rating: 4,
      comment: "Mycket trevlig och pålitlig. Pappa trivs jättebra med Anna och de har roligt tillsammans.",
      author: "Per A.",
      date: "1 månad sedan"
    },
    {
      id: 3,
      rating: 5,
      comment: "Professionell och genuint omtänksam. Rekommenderar starkt!",
      author: "Maria S.",
      date: "2 månader sedan"
    }
  ];

  const similarCompanions = [
    { id: 2, name: "Erik A.", rating: 5.0, price: 175 },
    { id: 3, name: "Maria K.", rating: 4.7, price: 125 },
    { id: 4, name: "Lars N.", rating: 4.8, price: 140 }
  ];

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
            <div className="flex items-center space-x-6">
              <a href="/" className="text-muted-foreground hover:text-primary">Hem</a>
              <a href="/companions" className="text-muted-foreground hover:text-primary">Sök</a>
              <AllPagesDropdown />
              <button className="text-muted-foreground hover:text-primary">Konto</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <div className="container mx-auto max-w-4xl px-4 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => router.back()}
              className="p-2 hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Tillbaka till sökresultat
            </Button>
          </div>

          {/* Profile Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-80">
                <div className="aspect-square bg-secondary rounded-3xl" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-light text-primary mb-2">{companion.name}</h1>
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <MapPin className="h-4 w-4" />
                      <span>{companion.location}</span>
                    </div>
                    {companion.verified && (
                      <div className="flex items-center gap-1 text-green-600">
                        <Check className="h-4 w-4" />
                        <span className="text-sm">Verifierad profil</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="h-5 w-5 fill-current text-yellow-400" />
                      <span className="text-lg font-medium">{companion.rating}</span>
                      <span className="text-muted-foreground">({companion.reviewCount} omdömen)</span>
                    </div>
                    <p className="text-xl font-medium">{companion.price} kr/timme</p>
                  </div>
                </div>

                <div className="mb-6">
                  <Button size="lg" className="w-full lg:w-auto rounded-full px-8 mr-4">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Kontakta Anna
                  </Button>
                  <Button variant="outline" size="lg" className="w-full lg:w-auto rounded-full px-8 mt-2 lg:mt-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    Se tillgänglighet
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-light text-primary mb-4">Om Anna</h2>
            <p className="text-muted-foreground leading-relaxed">{companion.bio}</p>
          </div>

          {/* Activities */}
          <div className="mb-8">
            <h2 className="text-2xl font-light text-primary mb-4">Aktiviteter jag erbjuder</h2>
            <div className="flex flex-wrap gap-2">
              {companion.activities.map((activity) => (
                <span 
                  key={activity}
                  className="px-4 py-2 bg-secondary text-primary rounded-full"
                >
                  {activity}
                </span>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="mb-8">
            <h2 className="text-2xl font-light text-primary mb-4">Detaljer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Tillgänglighet</h3>
                <p className="text-muted-foreground">{companion.availability}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Minsta bokning</h3>
                <p className="text-muted-foreground">{companion.minBooking}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Språk</h3>
                <p className="text-muted-foreground">{companion.languages.join(", ")}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Erfarenhet</h3>
                <p className="text-muted-foreground">{companion.experience}</p>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mb-8">
            <h2 className="text-2xl font-light text-primary mb-4">Omdömen</h2>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="bg-card rounded-2xl p-6 border border-border/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'fill-current text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {review.author} • {review.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Similar Companions */}
          <div className="mb-8">
            <h2 className="text-2xl font-light text-primary mb-4">Liknande profiler</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {similarCompanions.map((similar) => (
                <div key={similar.id} className="bg-card rounded-2xl p-4 border border-border/30">
                  <div className="w-full h-24 bg-secondary rounded-xl mb-3" />
                  <h3 className="font-medium mb-1">{similar.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <span className="text-sm">{similar.rating}</span>
                    </div>
                    <span className="text-sm font-medium">{similar.price} kr/tim</span>
                  </div>
                </div>
              ))}
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