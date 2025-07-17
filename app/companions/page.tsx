"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { 
  Search,
  MapPin,
  Filter,
  Star,
  Clock,
  ChevronDown
} from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import LoginPopup from "@/components/LoginPopup";
import RegisterPopup from "@/components/RegisterPopup";
import AllPagesDropdown from "@/components/AllPagesDropdown";

export default function CompanionsPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [filters, setFilters] = useState({
    activities: [] as string[],
    priceRange: [0, 500],
    availability: [] as string[],
    languages: [] as string[]
  });
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const location = searchParams.get('location');
    if (location) {
      setSearchLocation(location);
    }
  }, [searchParams]);
  
  const allCompanions = [
    {
      id: 1,
      name: "Anna Lindström",
      location: "Stockholm",
      age: 58,
      rating: 4.9,
      reviewCount: 23,
      price: 150,
      available: true,
      availableThisWeek: true,
      availableWeekends: false,
      availableWeekdays: true,
      availableEvenings: false,
      languages: ["Svenska", "Engelska"],
      bio: "Pensionerad sjuksköterska som älskar att träffa nya människor",
      activities: ["Promenader", "Fika", "Samtal"],
      image: "/api/placeholder/400/400"
    },
    {
      id: 2,
      name: "Erik Andersson",
      location: "Solna",
      age: 62,
      rating: 5.0,
      reviewCount: 41,
      price: 175,
      available: true,
      availableThisWeek: true,
      availableWeekends: true,
      availableWeekdays: true,
      availableEvenings: true,
      languages: ["Svenska"],
      bio: "Pensionerad lärare med passion för böcker och musik",
      activities: ["Läsning", "Musik", "Spel"],
      image: "/api/placeholder/400/400"
    },
    {
      id: 3,
      name: "Maria Karlsson",
      location: "Täby",
      age: 55,
      rating: 4.7,
      reviewCount: 19,
      price: 125,
      available: false,
      availableThisWeek: false,
      availableWeekends: true,
      availableWeekdays: false,
      availableEvenings: false,
      languages: ["Svenska", "Finska"],
      bio: "Varm och omtänksam med erfarenhet av äldreomsorg",
      activities: ["Fika", "Hemhjälp"],
      image: "/api/placeholder/400/400"
    },
    {
      id: 4,
      name: "Lars Nilsson",
      location: "Göteborg",
      age: 60,
      rating: 4.8,
      reviewCount: 32,
      price: 140,
      available: true,
      availableThisWeek: true,
      availableWeekends: true,
      availableWeekdays: true,
      availableEvenings: false,
      languages: ["Svenska"],
      bio: "Pensionerad trädgårdsmästare som älskar naturen",
      activities: ["Trädgård", "Promenader", "Samtal"],
      image: "/api/placeholder/400/400"
    },
    {
      id: 5,
      name: "Ingrid Svensson",
      location: "Stockholm",
      age: 67,
      rating: 4.6,
      reviewCount: 15,
      price: 180,
      available: true,
      availableThisWeek: false,
      availableWeekends: false,
      availableWeekdays: true,
      availableEvenings: true,
      languages: ["Svenska", "Engelska"],
      bio: "Erfaren inom matlagning och hemhjälp",
      activities: ["Matlagning", "Hemhjälp", "Fika"],
      image: "/api/placeholder/400/400"
    },
    {
      id: 6,
      name: "Gunnar Pettersson",
      location: "Malmö",
      age: 59,
      rating: 4.9,
      reviewCount: 28,
      price: 160,
      available: true,
      availableThisWeek: true,
      availableWeekends: true,
      availableWeekdays: false,
      availableEvenings: false,
      languages: ["Svenska"],
      bio: "Pensionerad musiker som älskar att spela och sjunga",
      activities: ["Musik", "Samtal", "Spel"],
      image: "/api/placeholder/400/400"
    }
  ];

  // Filter companions based on current filters
  const filteredCompanions = allCompanions.filter(companion => {
    // Location filter
    if (searchLocation && !companion.location.toLowerCase().includes(searchLocation.toLowerCase())) {
      return false;
    }

    // Activities filter
    if (filters.activities.length > 0) {
      if (!filters.activities.some(activity => companion.activities.includes(activity))) {
        return false;
      }
    }

    // Price range filter
    if (companion.price < filters.priceRange[0] || companion.price > filters.priceRange[1]) {
      return false;
    }

    // Availability filter
    if (filters.availability.length > 0) {
      const availabilityMatch = filters.availability.some(avail => {
        switch (avail) {
          case 'Denna vecka':
            return companion.availableThisWeek;
          case 'Helger':
            return companion.availableWeekends;
          case 'Vardagar':
            return companion.availableWeekdays;
          case 'Kvällar':
            return companion.availableEvenings;
          default:
            return false;
        }
      });
      if (!availabilityMatch) return false;
    }

    // Languages filter
    if (filters.languages.length > 0) {
      if (!filters.languages.some(lang => companion.languages.includes(lang))) {
        return false;
      }
    }

    return true;
  });

  const handleActivityFilter = (activity: string) => {
    setFilters(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }));
  };

  const handleAvailabilityFilter = (availability: string) => {
    setFilters(prev => ({
      ...prev,
      availability: prev.availability.includes(availability)
        ? prev.availability.filter(a => a !== availability)
        : [...prev.availability, availability]
    }));
  };

  const handleLanguageFilter = (language: string) => {
    setFilters(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(l => l !== language)
        : [...prev.languages, language]
    }));
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
            <div className="flex items-center space-x-6">
              <a href="/" className="text-muted-foreground hover:text-primary">Hem</a>
              <a href="/companions" className="text-primary font-medium">Sök sällskap</a>
              <a href="/care-seekers" className="text-muted-foreground hover:text-primary">Familjer</a>
              <AllPagesDropdown />
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="text-muted-foreground hover:text-primary"
              >
                Konto
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Search Header */}
        <div className="bg-secondary/30 px-4 lg:px-8 py-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 max-w-2xl">
                <div className="bg-card rounded-full p-2 flex items-center gap-2">
                  <div className="flex-1 flex items-center px-4">
                    <MapPin className="h-5 w-5 text-muted-foreground mr-3" />
                    <input 
                      type="text"
                      placeholder="Stockholm" 
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                    />
                  </div>
                  <Button size="sm" className="rounded-full px-6">
                    <Search className="h-4 w-4 mr-2" />
                    Sök
                  </Button>
                </div>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 lg:px-8 py-8">
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 space-y-8`}>
              <div>
                <h3 className="font-medium text-lg mb-4">Område</h3>
                <Input placeholder="Sök område..." className="rounded-xl" />
              </div>

              <div>
                <h3 className="font-medium text-lg mb-4">Aktiviteter</h3>
                <div className="space-y-3">
                  {[
                    "Promenader",
                    "Fika", 
                    "Läsning",
                    "Hemhjälp",
                    "Musik",
                    "Trädgård",
                    "Spel",
                    "Samtal"
                  ].map((activity) => (
                    <div key={activity} className="flex items-center space-x-2">
                      <Checkbox 
                        id={activity}
                        checked={filters.activities.includes(activity)}
                        onCheckedChange={() => handleActivityFilter(activity)}
                      />
                      <label htmlFor={activity} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {activity}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-4">Pris per timme</h3>
                <div className="px-2">
                  <Slider
                    value={filters.priceRange}
                    onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value }))}
                    max={500}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>{filters.priceRange[0]} kr</span>
                    <span>{filters.priceRange[1]} kr</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-4">Tillgänglighet</h3>
                <div className="space-y-3">
                  {[
                    "Denna vecka",
                    "Helger",
                    "Vardagar",
                    "Kvällar"
                  ].map((availability) => (
                    <div key={availability} className="flex items-center space-x-2">
                      <Checkbox 
                        id={availability}
                        checked={filters.availability.includes(availability)}
                        onCheckedChange={() => handleAvailabilityFilter(availability)}
                      />
                      <label htmlFor={availability} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {availability}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-4">Språk</h3>
                <div className="space-y-3">
                  {[
                    "Svenska",
                    "Engelska",
                    "Finska"
                  ].map((language) => (
                    <div key={language} className="flex items-center space-x-2">
                      <Checkbox 
                        id={language}
                        checked={filters.languages.includes(language)}
                        onCheckedChange={() => handleLanguageFilter(language)}
                      />
                      <label htmlFor={language} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {language}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-light">
                  {filteredCompanions.length} sällskap i {searchLocation || "Stockholm"}
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sortera:</span>
                  <Button variant="ghost" size="sm">
                    Relevans
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {filteredCompanions.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">Inga vårdgivare hittades med de valda filtren.</p>
                    <p className="text-sm text-muted-foreground mt-2">Prova att justera dina sökkriterier.</p>
                  </div>
                ) : (
                  filteredCompanions.map((companion) => (
                  <div 
                    key={companion.id}
                    className="bg-card rounded-3xl p-6 border border-border/30 hover:border-border/50 transition-colors cursor-pointer"
                    onClick={() => router.push(`/companions/${companion.id}`)}
                  >
                    <div className="flex gap-6">
                      <div className="w-20 h-20 bg-secondary rounded-2xl flex-shrink-0" />
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-medium text-lg">{companion.name}</h3>
                            <p className="text-muted-foreground text-sm">{companion.location}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="h-4 w-4 fill-current text-yellow-400" />
                              <span className="font-medium">{companion.rating}</span>
                              <span className="text-muted-foreground text-sm">({companion.reviewCount})</span>
                            </div>
                            <p className="font-medium">{companion.price} kr/tim</p>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-3">{companion.bio}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            {companion.activities.map((activity) => (
                              <span 
                                key={activity}
                                className="px-3 py-1 bg-secondary text-sm rounded-full"
                              >
                                {activity}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className={`text-sm ${companion.available ? 'text-green-600' : 'text-muted-foreground'}`}>
                                {companion.available ? 'Tillgänglig' : 'Upptagen'}
                              </span>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/companions/${companion.id}`);
                              }}
                            >
                              Visa profil
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))
                )}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" className="rounded-full px-8">
                  Visa fler resultat
                </Button>
              </div>
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