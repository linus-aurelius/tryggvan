"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ArrowLeft,
  ArrowRight,
  Check,
  Upload,
  MapPin,
  User,
  Calendar,
  Heart
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProfilePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    personnummer: "",
    location: "",
    bio: "",
    activities: [] as string[],
    experience: "",
    availability: {
      vardagar: { 
        enabled: false, 
        days: {
          måndag: { enabled: true, from: "09:00", to: "17:00" },
          tisdag: { enabled: true, from: "09:00", to: "17:00" },
          onsdag: { enabled: true, from: "09:00", to: "17:00" },
          torsdag: { enabled: true, from: "09:00", to: "17:00" },
          fredag: { enabled: true, from: "09:00", to: "17:00" }
        }
      },
      helger: { 
        enabled: false, 
        days: {
          lördag: { enabled: true, from: "10:00", to: "16:00" },
          söndag: { enabled: true, from: "10:00", to: "16:00" }
        }
      },
      flexibel: { enabled: false }
    },
    hourlyRate: "",
    photo: null as File | null
  });

  const totalSteps = 5;

  const activities = [
    "Promenader", "Fika", "Läsning", "Samtal", 
    "Hemhjälp", "Matlagning", "Trädgård", "Spel"
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleActivityToggle = (activity: string) => {
    setFormData(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }));
  };

  const handleSubmit = () => {
    // Here you would normally send data to backend
    console.log("Profile data:", formData);
    // Navigate to welcome/verification page
    router.push("/profile-created");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <User className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-light text-primary mb-2">Grundläggande information</h2>
              <p className="text-muted-foreground">Berätta lite om dig själv</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Förnamn</label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  placeholder="Anna"
                  className="rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Efternamn</label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  placeholder="Andersson"
                  className="rounded-xl"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">E-post</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="anna@example.com"
                className="rounded-xl"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Telefonnummer</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="070-123 45 67"
                  className="rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Ålder</label>
                <Input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                  placeholder="65"
                  className="rounded-xl"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Personnummer</label>
              <Input
                value={formData.personnummer}
                onChange={(e) => setFormData(prev => ({ ...prev, personnummer: e.target.value }))}
                placeholder="YYYYMMDD-XXXX"
                className="rounded-xl"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Behövs för säkerhetsverifiering och bakgrundskontroll
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-light text-primary mb-2">Var befinner du dig?</h2>
              <p className="text-muted-foreground">Så att vi kan matcha dig med personer i närheten</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Ort/Stad</label>
              <Input
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                placeholder="Stockholm"
                className="rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Berätta lite om dig själv</label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                placeholder="Jag är en glad och energisk person som älskar att träffa nya människor..."
                rows={4}
                className="w-full p-3 border border-border rounded-xl resize-none outline-none focus:border-primary/50"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-light text-primary mb-2">Vilka aktiviteter erbjuder du?</h2>
              <p className="text-muted-foreground">Välj alla som passar dig</p>
            </div>

            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground">
                {formData.activities.length} av {activities.length} valda
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFormData(prev => ({ ...prev, activities: [...activities] }))}
                  className="text-sm"
                >
                  Välj alla
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFormData(prev => ({ ...prev, activities: [] }))}
                  className="text-sm"
                >
                  Rensa alla
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activities.map((activity) => (
                <div
                  key={activity}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    formData.activities.includes(activity)
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-border/50'
                  }`}
                  onClick={() => handleActivityToggle(activity)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      formData.activities.includes(activity)
                        ? 'bg-primary border-primary'
                        : 'border-border'
                    }`}>
                      {formData.activities.includes(activity) && (
                        <Check className="h-3 w-3 text-white" />
                      )}
                    </div>
                    <span className="font-medium">{activity}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-700">
                💡 Du kan ändra dessa aktiviteter när som helst senare i dina profilinställningar
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-light text-primary mb-2">Erfarenhet och tillgänglighet</h2>
              <p className="text-muted-foreground">Hjälp oss förstå din bakgrund</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Berätta om din erfarenhet</label>
              <textarea
                value={formData.experience}
                onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                placeholder="Jag har arbetat som sjuksköterska i 30 år och har stor erfarenhet av att ta hand om äldre..."
                rows={3}
                className="w-full p-3 border border-border rounded-xl resize-none outline-none focus:border-primary/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">När är du tillgänglig?</label>
              <div className="space-y-4">
                {/* Vardagar */}
                <div className="border border-border rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Checkbox 
                      id="vardagar"
                      checked={formData.availability.vardagar.enabled}
                      onCheckedChange={(checked) => {
                        setFormData(prev => ({
                          ...prev,
                          availability: {
                            ...prev.availability,
                            vardagar: {
                              ...prev.availability.vardagar,
                              enabled: checked as boolean
                            }
                          }
                        }));
                      }}
                    />
                    <label htmlFor="vardagar" className="text-sm font-medium">Vardagar (måndag-fredag)</label>
                  </div>
                  
                  {formData.availability.vardagar.enabled && (
                    <div className="space-y-3 mt-4">
                      {Object.entries(formData.availability.vardagar.days).map(([day, dayInfo]) => (
                        <div key={day} className="bg-secondary/30 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id={`vardagar-${day}`}
                                checked={dayInfo.enabled}
                                onCheckedChange={(checked) => {
                                  setFormData(prev => ({
                                    ...prev,
                                    availability: {
                                      ...prev.availability,
                                      vardagar: {
                                        ...prev.availability.vardagar,
                                        days: {
                                          ...prev.availability.vardagar.days,
                                          [day]: {
                                            ...prev.availability.vardagar.days[day as keyof typeof prev.availability.vardagar.days],
                                            enabled: checked as boolean
                                          }
                                        }
                                      }
                                    }
                                  }));
                                }}
                              />
                              <label htmlFor={`vardagar-${day}`} className="text-sm font-medium capitalize">
                                {day}
                              </label>
                            </div>
                            {!dayInfo.enabled && (
                              <span className="text-xs text-muted-foreground">Inte tillgänglig</span>
                            )}
                          </div>
                          
                          {dayInfo.enabled && (
                            <div className="flex items-center space-x-3">
                              <div className="flex-1">
                                <label className="block text-xs text-muted-foreground mb-1">Från</label>
                                <input
                                  type="time"
                                  value={dayInfo.from}
                                  onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    availability: {
                                      ...prev.availability,
                                      vardagar: {
                                        ...prev.availability.vardagar,
                                        days: {
                                          ...prev.availability.vardagar.days,
                                          [day]: {
                                            ...prev.availability.vardagar.days[day as keyof typeof prev.availability.vardagar.days],
                                            from: e.target.value
                                          }
                                        }
                                      }
                                    }
                                  }))}
                                  className="w-full p-2 border border-border rounded-lg text-sm"
                                />
                              </div>
                              <div className="flex-1">
                                <label className="block text-xs text-muted-foreground mb-1">Till</label>
                                <input
                                  type="time"
                                  value={dayInfo.to}
                                  onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    availability: {
                                      ...prev.availability,
                                      vardagar: {
                                        ...prev.availability.vardagar,
                                        days: {
                                          ...prev.availability.vardagar.days,
                                          [day]: {
                                            ...prev.availability.vardagar.days[day as keyof typeof prev.availability.vardagar.days],
                                            to: e.target.value
                                          }
                                        }
                                      }
                                    }
                                  }))}
                                  className="w-full p-2 border border-border rounded-lg text-sm"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Helger */}
                <div className="border border-border rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Checkbox 
                      id="helger"
                      checked={formData.availability.helger.enabled}
                      onCheckedChange={(checked) => {
                        setFormData(prev => ({
                          ...prev,
                          availability: {
                            ...prev.availability,
                            helger: {
                              ...prev.availability.helger,
                              enabled: checked as boolean
                            }
                          }
                        }));
                      }}
                    />
                    <label htmlFor="helger" className="text-sm font-medium">Helger (lördag-söndag)</label>
                  </div>
                  
                  {formData.availability.helger.enabled && (
                    <div className="space-y-3 mt-4">
                      {Object.entries(formData.availability.helger.days).map(([day, dayInfo]) => (
                        <div key={day} className="bg-secondary/30 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id={`helger-${day}`}
                                checked={dayInfo.enabled}
                                onCheckedChange={(checked) => {
                                  setFormData(prev => ({
                                    ...prev,
                                    availability: {
                                      ...prev.availability,
                                      helger: {
                                        ...prev.availability.helger,
                                        days: {
                                          ...prev.availability.helger.days,
                                          [day]: {
                                            ...prev.availability.helger.days[day as keyof typeof prev.availability.helger.days],
                                            enabled: checked as boolean
                                          }
                                        }
                                      }
                                    }
                                  }));
                                }}
                              />
                              <label htmlFor={`helger-${day}`} className="text-sm font-medium capitalize">
                                {day}
                              </label>
                            </div>
                            {!dayInfo.enabled && (
                              <span className="text-xs text-muted-foreground">Inte tillgänglig</span>
                            )}
                          </div>
                          
                          {dayInfo.enabled && (
                            <div className="flex items-center space-x-3">
                              <div className="flex-1">
                                <label className="block text-xs text-muted-foreground mb-1">Från</label>
                                <input
                                  type="time"
                                  value={dayInfo.from}
                                  onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    availability: {
                                      ...prev.availability,
                                      helger: {
                                        ...prev.availability.helger,
                                        days: {
                                          ...prev.availability.helger.days,
                                          [day]: {
                                            ...prev.availability.helger.days[day as keyof typeof prev.availability.helger.days],
                                            from: e.target.value
                                          }
                                        }
                                      }
                                    }
                                  }))}
                                  className="w-full p-2 border border-border rounded-lg text-sm"
                                />
                              </div>
                              <div className="flex-1">
                                <label className="block text-xs text-muted-foreground mb-1">Till</label>
                                <input
                                  type="time"
                                  value={dayInfo.to}
                                  onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    availability: {
                                      ...prev.availability,
                                      helger: {
                                        ...prev.availability.helger,
                                        days: {
                                          ...prev.availability.helger.days,
                                          [day]: {
                                            ...prev.availability.helger.days[day as keyof typeof prev.availability.helger.days],
                                            to: e.target.value
                                          }
                                        }
                                      }
                                    }
                                  }))}
                                  className="w-full p-2 border border-border rounded-lg text-sm"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Flexibel */}
                <div className="border border-border rounded-xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Checkbox 
                      id="flexibel"
                      checked={formData.availability.flexibel.enabled}
                      onCheckedChange={(checked) => {
                        setFormData(prev => ({
                          ...prev,
                          availability: {
                            ...prev.availability,
                            flexibel: {
                              ...prev.availability.flexibel,
                              enabled: checked as boolean
                            }
                          }
                        }));
                      }}
                    />
                    <label htmlFor="flexibel" className="text-sm font-medium">Flexibel</label>
                  </div>
                  
                  {formData.availability.flexibel.enabled && (
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Du kan diskutera specifika tider direkt med klienter
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-700">
                💡 Du kan justera ditt schema när som helst i dina profilinställningar
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Önskad timpris (kr)</label>
              <Input
                type="number"
                value={formData.hourlyRate}
                onChange={(e) => setFormData(prev => ({ ...prev, hourlyRate: e.target.value }))}
                placeholder="150"
                className="rounded-xl"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-light text-primary mb-2">Lägg till en profilbild</h2>
              <p className="text-muted-foreground">En vänlig bild hjälper människor att känna sig trygga</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="h-16 w-16 text-muted-foreground" />
              </div>
              <Button variant="outline" className="rounded-full">
                <Upload className="h-4 w-4 mr-2" />
                Ladda upp bild
              </Button>
            </div>

            <div className="bg-secondary/30 rounded-2xl p-6">
              <h3 className="font-medium mb-4">Sammanfattning av din profil:</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Namn:</strong> {formData.firstName} {formData.lastName}</p>
                <p><strong>Plats:</strong> {formData.location}</p>
                <p><strong>Aktiviteter:</strong> {formData.activities.join(', ')}</p>
                <p><strong>Tillgänglighet:</strong></p>
                <div className="ml-4 text-sm">
                  {formData.availability.vardagar.enabled && (
                    <div>
                      <strong>Vardagar:</strong> {
                        Object.entries(formData.availability.vardagar.days)
                          .filter(([day, info]) => info.enabled)
                          .map(([day, info]) => `${day} (${info.from}-${info.to})`)
                          .join(', ')
                      }
                    </div>
                  )}
                  {formData.availability.helger.enabled && (
                    <div>
                      <strong>Helger:</strong> {
                        Object.entries(formData.availability.helger.days)
                          .filter(([day, info]) => info.enabled)
                          .map(([day, info]) => `${day} (${info.from}-${info.to})`)
                          .join(', ')
                      }
                    </div>
                  )}
                  {formData.availability.flexibel.enabled && (
                    <div><strong>Flexibel:</strong> Efter överenskommelse</div>
                  )}
                </div>
                <p><strong>Timpris:</strong> {formData.hourlyRate} kr</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-700">
                ✅ Alla dessa inställningar kan enkelt ändras när som helst efter att du skapat din profil
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
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
            <div className="text-sm text-muted-foreground">
              Steg {currentStep} av {totalSteps}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <div className="container mx-auto max-w-2xl px-4 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => router.back()}
              className="p-2 hover:bg-secondary"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Tillbaka
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Framsteg</span>
              <span className="text-sm text-muted-foreground">{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-card rounded-3xl p-8 border border-border/30">
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="rounded-full px-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Föregående
            </Button>

            {currentStep === totalSteps ? (
              <Button
                onClick={handleSubmit}
                className="rounded-full px-8"
              >
                Skapa profil
                <Check className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className="rounded-full px-6"
              >
                Nästa
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
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