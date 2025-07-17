"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { 
  Search,
  MapPin,
  Filter,
  Clock,
  ChevronDown,
  Heart,
  User,
  Calendar
} from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import AllPagesDropdown from "@/components/AllPagesDropdown";

export default function CareSeekersContent() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [filters, setFilters] = useState({
    interests: [] as string[],
    ageRange: [65, 90],
    frequency: [] as string[],
    startDate: [] as string[]
  });
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const location = searchParams.get('location');
    if (location) {
      setSearchLocation(location);
    }
  }, [searchParams]);
  
  const allCareSeekers = [
    {
      id: 1,
      elderlyPerson: {
        name: "Erik Andersson",
        age: 78,
        location: "Stockholm",
        livingCondition: "Eget hem",
        mobilityLevel: "Måttlig",
        interests: ["Promenader", "Fika", "Läsning", "Trädgård"],
        bio: "Erik är en varm person som älskar berättelser."
      },
      familyContact: {
        name: "Anna Andersson",
        relation: "Barn"
      },
      careNeeds: {
        frequency: "Flera gånger per vecka",
        duration: "2-4 timmar",
        timeOfDay: ["Förmiddag"],
        startDate: "Inom en vecka"
      },
      postedDate: "3 dagar sedan",
      verified: true
    },
    {
      id: 2,
      elderlyPerson: {
        name: "Margareta Lindström",
        age: 82,
        location: "Solna",
        livingCondition: "Seniorboende",
        mobilityLevel: "God",
        interests: ["Spel", "Handarbete", "Fika", "Musik"],
        bio: "Margareta är glad och social, tycker om sällskapsspel."
      },
      familyContact: {
        name: "Lars Lindström",
        relation: "Barn"
      },
      careNeeds: {
        frequency: "En gång per vecka",
        duration: "2-3 timmar",
        timeOfDay: ["Eftermiddag"],
        startDate: "Inom två veckor"
      },
      postedDate: "1 vecka sedan",
      verified: true
    },
    {
      id: 3,
      elderlyPerson: {
        name: "Gustav Holmberg",
        age: 75,
        location: "Täby",
        livingCondition: "Eget hem",
        mobilityLevel: "Begränsad",
        interests: ["Läsning", "Radio", "Samtal", "Schack"],
        bio: "Gustav var tidigare ingenjör, älskar att diskutera teknik."
      },
      familyContact: {
        name: "Eva Holmberg",
        relation: "Maka"
      },
      careNeeds: {
        frequency: "Två gånger per vecka",
        duration: "3-4 timmar",
        timeOfDay: ["Förmiddag", "Eftermiddag"],
        startDate: "Flexibel"
      },
      postedDate: "2 veckor sedan",
      verified: false
    }
  ];

  const filteredCareSeekers = allCareSeekers.filter(careSeeker => {
    if (searchLocation && !careSeeker.elderlyPerson.location.toLowerCase().includes(searchLocation.toLowerCase())) {
      return false;
    }
    
    if (filters.interests.length > 0) {
      const hasMatchingInterest = filters.interests.some(interest => 
        careSeeker.elderlyPerson.interests.includes(interest)
      );
      if (!hasMatchingInterest) return false;
    }
    
    if (careSeeker.elderlyPerson.age < filters.ageRange[0] || careSeeker.elderlyPerson.age > filters.ageRange[1]) {
      return false;
    }
    
    if (filters.frequency.length > 0 && !filters.frequency.includes(careSeeker.careNeeds.frequency)) {
      return false;
    }
    
    return true;
  });

  const handleInterestToggle = (interest: string) => {
    setFilters(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleFrequencyToggle = (frequency: string) => {
    setFilters(prev => ({
      ...prev,
      frequency: prev.frequency.includes(frequency)
        ? prev.frequency.filter(f => f !== frequency)
        : [...prev.frequency, frequency]
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
              <Link href="/companions" className="text-muted-foreground hover:text-primary">Sök sällskap</Link>
              <Link href="/care-seekers" className="text-primary font-medium">Familjer</Link>
              <AllPagesDropdown />
              <button className="text-muted-foreground hover:text-primary">Konto</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Demo Notice */}
        <div className="container mx-auto max-w-6xl px-4 lg:px-8 py-6">
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-sm text-blue-700">
              💼 <strong>Exempel på hur det ser ut för vårdgivare som letar jobb</strong> - Detta är vyn där registrerade vårdgivare kan se och kontakta familjer som söker sällskap
            </p>
          </div>
        </div>

        {/* Header Section */}
        <div className="container mx-auto max-w-6xl px-4 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-light text-primary mb-4">Familjer som söker sällskap</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bläddra bland familjer i ditt område och kontakta dem direkt för att erbjuda dina tjänster
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Interests Filter */}
                  <div>
                    <h3 className="font-medium mb-3">Intressen</h3>
                    <div className="space-y-2">
                      {["Promenader", "Fika", "Läsning", "Trädgård", "Spel", "Handarbete", "Musik", "Samtal"].map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={filters.interests.includes(interest)}
                            onCheckedChange={() => handleInterestToggle(interest)}
                          />
                          <label htmlFor={interest} className="text-sm">{interest}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Age Range Filter */}
                  <div>
                    <h3 className="font-medium mb-3">Åldersintervall</h3>
                    <div className="px-2">
                      <Slider
                        value={filters.ageRange}
                        onValueChange={(value) => setFilters(prev => ({ ...prev, ageRange: value }))}
                        max={100}
                        min={60}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>{filters.ageRange[0]} år</span>
                        <span>{filters.ageRange[1]} år</span>
                      </div>
                    </div>
                  </div>

                  {/* Frequency Filter */}
                  <div>
                    <h3 className="font-medium mb-3">Frekvens</h3>
                    <div className="space-y-2">
                      {["En gång per vecka", "Flera gånger per vecka", "Två gånger per vecka"].map((frequency) => (
                        <div key={frequency} className="flex items-center space-x-2">
                          <Checkbox
                            id={frequency}
                            checked={filters.frequency.includes(frequency)}
                            onCheckedChange={() => handleFrequencyToggle(frequency)}
                          />
                          <label htmlFor={frequency} className="text-sm">{frequency}</label>
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
              Visar {filteredCareSeekers.length} av {allCareSeekers.length} familjer
            </p>
          </div>

          {/* Care Seekers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredCareSeekers.map((careSeeker) => (
              <Link
                key={careSeeker.id}
                href={`/care-seekers/${careSeeker.id}`}
                className="bg-card rounded-2xl p-6 border border-border/30 hover:border-border/50 transition-colors block"
              >
                <div className="flex gap-6">
                  <div className="w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <User className="h-8 w-8 text-muted-foreground" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-medium text-primary mb-1">{careSeeker.elderlyPerson.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                          <MapPin className="h-3 w-3" />
                          <span>{careSeeker.elderlyPerson.location}</span>
                          <span>•</span>
                          <span>{careSeeker.elderlyPerson.age} år</span>
                        </div>
                      </div>
                      {careSeeker.verified && (
                        <div className="flex items-center gap-1 text-green-600">
                          <Heart className="h-3 w-3" />
                          <span className="text-xs">Verifierad</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {careSeeker.elderlyPerson.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {careSeeker.elderlyPerson.interests.slice(0, 3).map((interest) => (
                        <span key={interest} className="px-2 py-1 bg-secondary text-primary text-xs rounded-full">
                          {interest}
                        </span>
                      ))}
                      {careSeeker.elderlyPerson.interests.length > 3 && (
                        <span className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-full">
                          +{careSeeker.elderlyPerson.interests.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{careSeeker.careNeeds.frequency}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{careSeeker.postedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Visa fler familjer
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