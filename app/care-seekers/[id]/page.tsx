import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Heart,
  MapPin,
  Clock,
  User,
  Calendar,
  MessageCircle,
  Home,
  Users
} from "lucide-react";
import Link from "next/link";
import AllPagesDropdown from "@/components/AllPagesDropdown";
import BackButton from "@/components/BackButton";

export default async function CareSeekerProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Mock data - in real app would fetch based on params.id
  const careSeeker = {
    id: 1,
    elderlyPerson: {
      name: "Erik Andersson",
      age: 78,
      location: "Stockholm",
      livingCondition: "Eget hem",
      mobilityLevel: "Måttlig - behöver stöd ibland",
      interests: ["Promenader", "Fika", "Läsning", "Trädgård", "Musik"],
      bio: "Erik är en varm och trevlig person som älskar att berätta historier från sitt liv. Han har arbetat som lärare i 40 år och älskar fortfarande att lära sig nya saker. Han bor i sitt eget hem i Stockholm och trivs bra där, men saknar lite mer sällskap i vardagen."
    },
    familyContact: {
      name: "Anna Andersson",
      relation: "Barn",
      phone: "070-123 45 67",
      email: "anna.andersson@email.com"
    },
    careNeeds: {
      frequency: "Flera gånger per vecka",
      duration: "2-4 timmar",
      timeOfDay: ["Förmiddag", "Eftermiddag"],
      startDate: "Inom en vecka",
      specialNeeds: "Tycker om lugna aktiviteter och djupa samtal. Har lätt hörselnedsättning så talar gärna lite högre."
    },
    postedDate: "3 dagar sedan",
    verified: true,
    image: "/api/placeholder/400/400"
  };

  const similarFamilies = [
    { id: 2, name: "Margareta L.", age: 82, location: "Solna", timePosted: "1 vecka sedan" },
    { id: 3, name: "Gustav H.", age: 75, location: "Täby", timePosted: "2 veckor sedan" },
    { id: 4, name: "Astrid B.", age: 80, location: "Stockholm", timePosted: "3 veckor sedan" }
  ];

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
        <div className="container mx-auto max-w-4xl px-4 lg:px-8 py-8">
          {/* Demo Notice */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-sm text-blue-700">
              📋 <strong>Exempel på hur det ser ut för vårdgivare som letar jobb</strong> - Denna profilvy kommer bara vara synlig för registrerade vårdgivare och visar hur familjer presenterar sina behov
            </p>
          </div>

          {/* Back Button */}
          <div className="mb-6">
            <BackButton>Tillbaka till familjer</BackButton>
          </div>

          {/* Profile Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-80">
                <div className="aspect-square bg-secondary rounded-3xl flex items-center justify-center">
                  <User className="h-20 w-20 text-muted-foreground" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-light text-primary mb-2">{careSeeker.elderlyPerson.name}</h1>
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <MapPin className="h-4 w-4" />
                      <span>{careSeeker.elderlyPerson.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Users className="h-4 w-4" />
                      <span>{careSeeker.elderlyPerson.age} år</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Clock className="h-4 w-4" />
                      <span>Publicerad {careSeeker.postedDate}</span>
                    </div>
                    {careSeeker.verified && (
                      <div className="flex items-center gap-1 text-green-600">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">Verifierad familj</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {careSeeker.careNeeds.frequency}
                    </div>
                    <p className="text-sm text-muted-foreground">{careSeeker.careNeeds.duration} per besök</p>
                  </div>
                </div>

                <div className="mb-6">
                  <Button size="lg" className="w-full lg:w-auto rounded-full px-8 mr-4">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Kontakta familjen
                  </Button>
                  <Button variant="outline" size="lg" className="w-full lg:w-auto rounded-full px-8 mt-2 lg:mt-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    Visa tillgänglighet
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-light text-primary mb-4">Om {careSeeker.elderlyPerson.name}</h2>
            <p className="text-muted-foreground leading-relaxed">{careSeeker.elderlyPerson.bio}</p>
          </div>

          {/* Interests & Activities */}
          <div className="mb-8">
            <h2 className="text-2xl font-light text-primary mb-4">Intressen och aktiviteter</h2>
            <div className="flex flex-wrap gap-2">
              {careSeeker.elderlyPerson.interests.map((interest) => (
                <span 
                  key={interest}
                  className="px-4 py-2 bg-secondary text-primary rounded-full"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Care Needs */}
          <div className="mb-8">
            <h2 className="text-2xl font-light text-primary mb-4">Vad familjen söker</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Boendesituation</h3>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  {careSeeker.elderlyPerson.livingCondition}
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Rörlighet</h3>
                <p className="text-muted-foreground">{careSeeker.elderlyPerson.mobilityLevel}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Frekvens</h3>
                <p className="text-muted-foreground">{careSeeker.careNeeds.frequency}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Längd per besök</h3>
                <p className="text-muted-foreground">{careSeeker.careNeeds.duration}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Tider som passar</h3>
                <p className="text-muted-foreground">{careSeeker.careNeeds.timeOfDay.join(", ")}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Önskad start</h3>
                <p className="text-muted-foreground">{careSeeker.careNeeds.startDate}</p>
              </div>
            </div>
          </div>

          {/* Special Needs */}
          {careSeeker.careNeeds.specialNeeds && (
            <div className="mb-8">
              <h2 className="text-2xl font-light text-primary mb-4">Särskilda önskemål</h2>
              <div className="bg-card rounded-2xl p-6 border border-border/30">
                <p className="text-muted-foreground">{careSeeker.careNeeds.specialNeeds}</p>
              </div>
            </div>
          )}

          {/* Family Contact */}
          <div className="mb-8">
            <h2 className="text-2xl font-light text-primary mb-4">Kontaktperson</h2>
            <div className="bg-card rounded-2xl p-6 border border-border/30">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{careSeeker.familyContact.name}</h3>
                  <p className="text-muted-foreground">{careSeeker.elderlyPerson.name}s {careSeeker.familyContact.relation.toLowerCase()}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {careSeeker.familyContact.phone} • {careSeeker.familyContact.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Families */}
          <div className="mb-8">
            <h2 className="text-2xl font-light text-primary mb-4">Andra familjer i området</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {similarFamilies.map((family) => (
                <Link 
                  key={family.id} 
                  href={`/care-seekers/${family.id}`}
                  className="bg-card rounded-2xl p-4 border border-border/30 cursor-pointer hover:border-border/50 transition-colors block"
                >
                  <div className="w-full h-24 bg-secondary rounded-xl mb-3 flex items-center justify-center">
                    <User className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-medium mb-1">{family.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{family.age} år</span>
                    <span className="text-sm text-muted-foreground">{family.timePosted}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{family.location}</p>
                </Link>
              ))}
            </div>
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