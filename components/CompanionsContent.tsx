"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { 
  Search,
  MapPin,
  Star,
  Filter,
  ChevronDown,
  Check,
  Heart
} from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import AllPagesDropdown from "@/components/AllPagesDropdown";

export default function CompanionsContent() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [filters, setFilters] = useState({
    activities: [] as string[],
    priceRange: [100, 300],
    rating: 0,
    availability: [] as string[]
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
      verified: true,
      bio: "Glad och energisk pensionär som älskar att träffa nya människor.",
      activities: ["Promenader", "Fika", "Samtal", "Spel"],
      availability: "Måndag-fredag 09:00-17:00",
      image: "/api/placeholder/150/150"
    },
    {
      id: 2,
      name: "Erik Andersson",
      location: "Göteborg",
      age: 62,
      rating: 5.0,
      reviewCount: 31,
      price: 175,
      verified: true,
      bio: "Tidigare sjuksköterska med stor erfarenhet av äldrevård.",
      activities: ["Promenader", "Läsning", "Hemhjälp", "Samtal"],
      availability: "Alla dagar 08:00-20:00",
      image: "/api/placeholder/150/150"
    },
    {
      id: 3,
      name: "Maria Karlsson",
      location: "Malmö",
      age: 45,
      rating: 4.7,
      reviewCount: 18,
      price: 125,
      verified: false,
      bio: "Varm och omtänksam person som trivs i sällskap med äldre.",
      activities: ["Fika", "Spel", "Handarbete", "Musik"],
      availability: "Vardagar 10:00-16:00",
      image: "/api/placeholder/150/150"
    },
    {
      id: 4,
      name: "Lars Nilsson",
      location: "Uppsala",
      age: 55,
      rating: 4.8,
      reviewCount: 27,
      price: 140,
      verified: true,
      bio: "Pensionerad lärare som älskar att lära och dela berättelser.",
      activities: ["Läsning", "Promenader", "Samtal", "Schack"],
      availability: "Måndag-fredag 09:00-15:00",
      image: "/api/placeholder/150/150"
    }
  ];

  const filteredCompanions = allCompanions.filter(companion => {
    if (searchLocation && !companion.location.toLowerCase().includes(searchLocation.toLowerCase())) {
      return false;
    }
    
    if (filters.activities.length > 0) {
      const hasMatchingActivity = filters.activities.some(activity => 
        companion.activities.includes(activity)
      );
      if (!hasMatchingActivity) return false;
    }
    
    if (companion.price < filters.priceRange[0] || companion.price > filters.priceRange[1]) {
      return false;
    }
    
    if (filters.rating > 0 && companion.rating < filters.rating) {
      return false;
    }
    
    return true;
  });

  const handleActivityToggle = (activity: string) => {
    setFilters(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-primary rounded-full" />
              <span className="text-lg font-medium text-primary">TryggVän</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-muted-foreground hover:text-primary">Hem</Link>
              <Link href="/companions" className="text-primary font-medium">Sök sällskap</Link>
              <Link href="/care-seekers" className="text-muted-foreground hover:text-primary">Familjer</Link>
              <AllPagesDropdown />
              <button className="text-muted-foreground hover:text-primary">Konto</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Header Section */}
        <div className="container mx-auto max-w-6xl px-4 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-light text-primary mb-4">Hitta trygg sällskap</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upptäck våra verifierade sällskap som är redo att skapa meningsfulla stunder med dina nära och kära
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-card rounded-2xl p-6 border border-border/30 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Sök efter plats..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="pl-10 border-0 bg-background"
                />
              </div>
              
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="min-w-[120px] justify-between rounded-full"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
                <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-border/30">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Activities Filter */}
                  <div>
                    <h3 className="font-medium mb-3">Aktiviteter</h3>
                    <div className="space-y-2">
                      {["Promenader", "Fika", "Samtal", "Spel", "Läsning", "Hemhjälp", "Handarbete", "Musik"].map((activity) => (
                        <div key={activity} className="flex items-center space-x-2">
                          <Checkbox
                            id={activity}
                            checked={filters.activities.includes(activity)}
                            onCheckedChange={() => handleActivityToggle(activity)}
                          />
                          <label htmlFor={activity} className="text-sm">{activity}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <h3 className="font-medium mb-3">Prisintervall (kr/timme)</h3>
                    <div className="px-2">
                      <Slider
                        value={filters.priceRange}
                        onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value }))}
                        max={400}
                        min={50}
                        step={25}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>{filters.priceRange[0]} kr</span>
                        <span>{filters.priceRange[1]} kr</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <h3 className="font-medium mb-3">Minimum betyg</h3>
                    <div className="space-y-2">
                      {[5, 4, 3, 0].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <Checkbox
                            id={`rating-${rating}`}
                            checked={filters.rating === rating}
                            onCheckedChange={() => setFilters(prev => ({ ...prev, rating: filters.rating === rating ? 0 : rating }))}
                          />
                          <label htmlFor={`rating-${rating}`} className="flex items-center text-sm">
                            {rating === 0 ? "Alla betyg" : (
                              <>
                                {rating}+ <Star className="h-3 w-3 fill-current text-yellow-400 ml-1" />
                              </>
                            )}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Availability Filter */}
                  <div>
                    <h3 className="font-medium mb-3">Tillgänglighet</h3>
                    <div className="space-y-2">
                      {["Vardagar", "Helger", "Kvällar", "Flexibel"].map((time) => (
                        <div key={time} className="flex items-center space-x-2">
                          <Checkbox
                            id={time}
                            checked={filters.availability.includes(time)}
                            onCheckedChange={() => {
                              setFilters(prev => ({
                                ...prev,
                                availability: prev.availability.includes(time)
                                  ? prev.availability.filter(t => t !== time)
                                  : [...prev.availability, time]
                              }));
                            }}
                          />
                          <label htmlFor={time} className="text-sm">{time}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Visar {filteredCompanions.length} av {allCompanions.length} sällskap
            </p>
          </div>

          {/* Companions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanions.map((companion) => (
              <Link
                key={companion.id}
                href={`/companions/${companion.id}`}
                className="bg-card rounded-2xl p-6 border border-border/30 hover:border-border/50 transition-colors block"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4" />
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-primary mb-1">{companion.name}</h3>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-3 w-3" />
                      <span>{companion.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current text-yellow-400" />
                        <span className="font-medium">{companion.rating}</span>
                        <span className="text-muted-foreground text-sm">({companion.reviewCount})</span>
                      </div>
                      {companion.verified && (
                        <div className="flex items-center gap-1 text-green-600">
                          <Check className="h-3 w-3" />
                          <span className="text-xs">Verifierad</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-lg font-medium text-primary">{companion.price} kr/timme</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {companion.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    {companion.activities.slice(0, 3).map((activity) => (
                      <span key={activity} className="px-2 py-1 bg-secondary text-primary text-xs rounded-full">
                        {activity}
                      </span>
                    ))}
                    {companion.activities.length > 3 && (
                      <span className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-full">
                        +{companion.activities.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Visa fler sällskap
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 lg:px-8 border-t border-border/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link 
              href="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-primary rounded-full" />
              <span className="text-lg font-medium text-primary">TryggVän</span>
            </Link>
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