"use client";

import { Button } from "@/components/ui/button";
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

export default function CareSeekersPage() {
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
        bio: "Varm och trevlig person som älskar att berätta historier"
      },
      familyContact: {
        name: "Anna Andersson",
        relation: "Barn"
      },
      careNeeds: {
        frequency: "Flera gånger per vecka",
        duration: "2-4 timmar",
        timeOfDay: ["Förmiddag", "Eftermiddag"],
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
        livingCondition: "Servicehus",
        mobilityLevel: "Bra",
        interests: ["Musik", "Hantverk", "Fika", "Samtal"],
        bio: "Pensionerad musiklärare som älskar att sjunga och spela piano"
      },
      familyContact: {
        name: "Lars Lindström",
        relation: "Barn"
      },
      careNeeds: {
        frequency: "En gång per vecka",
        duration: "1-2 timmar",
        timeOfDay: ["Eftermiddag", "Kväll"],
        startDate: "Inom en månad"
      },
      postedDate: "1 vecka sedan",
      verified: true
    },
    {
      id: 3,
      elderlyPerson: {
        name: "Gustav Hansson",
        age: 75,
        location: "Täby",
        livingCondition: "Eget hem",
        mobilityLevel: "Begränsad",
        interests: ["Läsning", "Film", "Spel", "Samtal"],
        bio: "Pensionerad ingenjör som älskar att diskutera teknik och historia"
      },
      familyContact: {
        name: "Maria Hansson",
        relation: "Barnbarn"
      },
      careNeeds: {
        frequency: "Dagligen",
        duration: "Halvdag",
        timeOfDay: ["Förmiddag", "Eftermiddag"],
        startDate: "Omgående"
      },
      postedDate: "2 veckor sedan",
      verified: false
    },
    {
      id: 4,
      elderlyPerson: {
        name: "Astrid Bergström",
        age: 80,
        location: "Stockholm",
        livingCondition: "Äldreboende",
        mobilityLevel: "Rullstol",
        interests: ["Matlagning", "Trädgård", "Natur", "Fika"],
        bio: "Älskar att laga mat och berätta recept från gamla tider"
      },
      familyContact: {
        name: "Peter Bergström",
        relation: "Barn"
      },
      careNeeds: {
        frequency: "Några gånger per månad",
        duration: "2-4 timmar",
        timeOfDay: ["Förmiddag"],
        startDate: "Flexibelt"
      },
      postedDate: "3 veckor sedan",
      verified: true
    }
  ];

  // Filter care seekers based on current filters
  const filteredCareSeekers = allCareSeekers.filter(careSeeker => {
    // Location filter
    if (searchLocation && !careSeeker.elderlyPerson.location.toLowerCase().includes(searchLocation.toLowerCase())) {
      return false;
    }

    // Interests filter
    if (filters.interests.length > 0) {
      if (!filters.interests.some(interest => careSeeker.elderlyPerson.interests.includes(interest))) {
        return false;
      }
    }

    // Age range filter
    if (careSeeker.elderlyPerson.age < filters.ageRange[0] || careSeeker.elderlyPerson.age > filters.ageRange[1]) {
      return false;
    }

    // Frequency filter
    if (filters.frequency.length > 0) {
      if (!filters.frequency.includes(careSeeker.careNeeds.frequency)) {
        return false;
      }
    }

    // Start date filter
    if (filters.startDate.length > 0) {
      if (!filters.startDate.includes(careSeeker.careNeeds.startDate)) {
        return false;
      }
    }

    return true;
  });

  const handleInterestFilter = (interest: string) => {
    setFilters(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleFrequencyFilter = (frequency: string) => {
    setFilters(prev => ({
      ...prev,
      frequency: prev.frequency.includes(frequency)
        ? prev.frequency.filter(f => f !== frequency)
        : [...prev.frequency, frequency]
    }));
  };

  const handleStartDateFilter = (startDate: string) => {
    setFilters(prev => ({
      ...prev,
      startDate: prev.startDate.includes(startDate)
        ? prev.startDate.filter(s => s !== startDate)
        : [...prev.startDate, startDate]
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
              <a href="/companions" className="text-muted-foreground hover:text-primary">Sök sällskap</a>
              <a href="/care-seekers" className="text-primary font-medium">Familjer</a>
              <AllPagesDropdown />
              <button className="text-muted-foreground hover:text-primary">Konto</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Search Header */}
        <div className="bg-secondary/30 px-4 lg:px-8 py-8">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-4">
              <h1 className="text-3xl font-light text-primary mb-2">Familjer som söker sällskap</h1>
              <p className="text-muted-foreground">Hitta familjer i ditt område som behöver hjälp</p>
              <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-700">
                  📋 <strong>Exempel på hur det ser ut för vårdgivare som letar jobb</strong> - Denna vy kommer bara vara synlig för registrerade vårdgivare
                </p>
              </div>
            </div>
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
                <h3 className="font-medium text-lg mb-4">Intressen</h3>
                <div className="space-y-3">
                  {[
                    "Promenader",
                    "Fika", 
                    "Läsning",
                    "Samtal",
                    "Musik",
                    "Trädgård",
                    "Spel",
                    "Hantverk",
                    "Film",
                    "Matlagning"
                  ].map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox 
                        id={interest}
                        checked={filters.interests.includes(interest)}
                        onCheckedChange={() => handleInterestFilter(interest)}
                      />
                      <label htmlFor={interest} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-4">Ålder</h3>
                <div className="px-2">
                  <Slider
                    value={filters.ageRange}
                    onValueChange={(value) => setFilters(prev => ({ ...prev, ageRange: value }))}
                    min={60}
                    max={95}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>{filters.ageRange[0]} år</span>
                    <span>{filters.ageRange[1]} år</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-4">Frekvens</h3>
                <div className="space-y-3">
                  {[
                    "Dagligen",
                    "Flera gånger per vecka",
                    "En gång per vecka",
                    "Några gånger per månad"
                  ].map((frequency) => (
                    <div key={frequency} className="flex items-center space-x-2">
                      <Checkbox 
                        id={frequency}
                        checked={filters.frequency.includes(frequency)}
                        onCheckedChange={() => handleFrequencyFilter(frequency)}
                      />
                      <label htmlFor={frequency} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {frequency}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-4">Start</h3>
                <div className="space-y-3">
                  {[
                    "Omgående",
                    "Inom en vecka",
                    "Inom en månad",
                    "Flexibelt"
                  ].map((startDate) => (
                    <div key={startDate} className="flex items-center space-x-2">
                      <Checkbox 
                        id={startDate}
                        checked={filters.startDate.includes(startDate)}
                        onCheckedChange={() => handleStartDateFilter(startDate)}
                      />
                      <label htmlFor={startDate} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {startDate}
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
                  {filteredCareSeekers.length} familjer i {searchLocation || "Stockholm"}
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sortera:</span>
                  <Button variant="ghost" size="sm">
                    Senaste
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {filteredCareSeekers.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">Inga familjer hittades med de valda filtren.</p>
                    <p className="text-sm text-muted-foreground mt-2">Prova att justera dina sökkriterier.</p>
                  </div>
                ) : (
                  filteredCareSeekers.map((careSeeker) => (
                  <div 
                    key={careSeeker.id}
                    className="bg-card rounded-3xl p-6 border border-border/30 hover:border-border/50 transition-colors cursor-pointer"
                    onClick={() => router.push(`/care-seekers/${careSeeker.id}`)}
                  >
                    <div className="flex gap-6">
                      <div className="w-20 h-20 bg-secondary rounded-2xl flex-shrink-0 flex items-center justify-center">
                        <User className="h-8 w-8 text-muted-foreground" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-medium text-lg">{careSeeker.elderlyPerson.name}</h3>
                            <p className="text-muted-foreground text-sm flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {careSeeker.elderlyPerson.location} • {careSeeker.elderlyPerson.age} år
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-1">
                              {careSeeker.verified && (
                                <Heart className="h-4 w-4 text-green-600" />
                              )}
                              <span className="text-sm text-muted-foreground">
                                {careSeeker.postedDate}
                              </span>
                            </div>
                            <div className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                              {careSeeker.careNeeds.frequency}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-3">{careSeeker.elderlyPerson.bio}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            {careSeeker.elderlyPerson.interests.slice(0, 3).map((interest) => (
                              <span 
                                key={interest}
                                className="px-3 py-1 bg-secondary text-sm rounded-full"
                              >
                                {interest}
                              </span>
                            ))}
                            {careSeeker.elderlyPerson.interests.length > 3 && (
                              <span className="px-3 py-1 bg-secondary text-sm rounded-full">
                                +{careSeeker.elderlyPerson.interests.length - 3} till
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {careSeeker.careNeeds.duration}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {careSeeker.careNeeds.startDate}
                              </span>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/care-seekers/${careSeeker.id}`);
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
    </div>
  );
}