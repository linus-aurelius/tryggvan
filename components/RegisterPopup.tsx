"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  X,
  ArrowLeft,
  ArrowRight,
  Check,
  User,
  Heart,
  MapPin,
  Calendar,
  Clock
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface RegisterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

export default function RegisterPopup({ isOpen, onClose, onOpenLogin }: RegisterPopupProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Who needs help (basic info)
    elderlyCare: {
      name: "",
      age: "",
      location: "",
      livingCondition: "",
      mobilityLevel: "",
      medicalConditions: ""
    },
    
    // Step 2: What they like to do (activities & interests)
    activitiesAndInterests: [] as string[],
    
    // Step 3: When and how often (scheduling)
    carePreferences: {
      frequency: "",
      duration: "",
      timeOfDay: [] as string[],
      startDate: "",
      specialNeeds: ""
    },
    
    // Step 4: About you (personal info)
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    relation: ""
  });

  const totalSteps = 4;

  const activitiesAndInterests = [
    "Promenader", "Fika", "Läsning", "Samtal", 
    "Hemhjälp", "Matlagning", "Trädgård", "Spel",
    "Musik", "Hantverk", "Natur", "Film"
  ];

  const timeOfDayOptions = [
    "Förmiddag", "Eftermiddag", "Kväll", "Helger"
  ];

  if (!isOpen) return null;

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

  const handleSubmit = () => {
    // Handle registration submission - in real app, save to database and get ID
    console.log("Registration data:", formData);
    onClose();
    // Navigate to success page with clear next steps
    router.push("/profile-success");
  };

  const handleActivityAndInterestToggle = (item: string) => {
    setFormData(prev => ({
      ...prev,
      activitiesAndInterests: prev.activitiesAndInterests.includes(item)
        ? prev.activitiesAndInterests.filter(i => i !== item)
        : [...prev.activitiesAndInterests, item]
    }));
  };

  const handleTimeOfDayToggle = (time: string) => {
    setFormData(prev => ({
      ...prev,
      carePreferences: {
        ...prev.carePreferences,
        timeOfDay: prev.carePreferences.timeOfDay.includes(time)
          ? prev.carePreferences.timeOfDay.filter(t => t !== time)
          : [...prev.carePreferences.timeOfDay, time]
      }
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-light text-primary mb-2">Vem söker du hjälp till?</h3>
              <p className="text-muted-foreground text-sm">Berätta om personen som behöver sällskap</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Förnamn</label>
                <Input
                  value={formData.elderlyCare.name}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    elderlyCare: { ...prev.elderlyCare, name: e.target.value } 
                  }))}
                  placeholder="Erik"
                  className="rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Ålder</label>
                <Input
                  type="number"
                  value={formData.elderlyCare.age}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    elderlyCare: { ...prev.elderlyCare, age: e.target.value } 
                  }))}
                  placeholder="75"
                  className="rounded-xl"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Var bor personen?</label>
              <Input
                value={formData.elderlyCare.location}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  elderlyCare: { ...prev.elderlyCare, location: e.target.value } 
                }))}
                placeholder="Stockholm"
                className="rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Boendesituation</label>
              <select
                value={formData.elderlyCare.livingCondition}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  elderlyCare: { ...prev.elderlyCare, livingCondition: e.target.value } 
                }))}
                className="w-full p-3 border border-border rounded-xl outline-none focus:border-primary/50 bg-background"
              >
                <option value="">Välj boendesituation</option>
                <option value="eget_hem">Eget hem</option>
                <option value="lägenhet">Lägenhet</option>
                <option value="äldreboende">Äldreboende</option>
                <option value="servicehus">Servicehus</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Rörlighet</label>
              <select
                value={formData.elderlyCare.mobilityLevel}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  elderlyCare: { ...prev.elderlyCare, mobilityLevel: e.target.value } 
                }))}
                className="w-full p-3 border border-border rounded-xl outline-none focus:border-primary/50 bg-background"
              >
                <option value="">Välj rörlighet</option>
                <option value="bra">Bra - kan gå ut själv</option>
                <option value="måttlig">Måttlig - behöver stöd ibland</option>
                <option value="begränsad">Begränsad - behöver hjälp att förflytta sig</option>
                <option value="rullstol">Använder rullstol</option>
              </select>
            </div>

          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-light text-primary mb-2">Vad tycker {formData.elderlyCare.name || "personen"} om att göra?</h3>
              <p className="text-muted-foreground text-sm">Välj aktiviteter och intressen som passar</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Aktiviteter och intressen</label>
              <div className="grid grid-cols-2 gap-2">
                {activitiesAndInterests.map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <Checkbox 
                      id={item}
                      checked={formData.activitiesAndInterests.includes(item)}
                      onCheckedChange={() => handleActivityAndInterestToggle(item)}
                    />
                    <label htmlFor={item} className="text-sm">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-700">
                💡 Detta hjälper oss att matcha med rätt typ av sällskap som delar samma intressen
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-light text-primary mb-2">
                Hur ofta och när behöver {formData.elderlyCare.name || "personen"} hjälp?
              </h3>
              <p className="text-muted-foreground text-sm">Berätta om era önskemål för sällskap och stöd</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Hur ofta behövs sällskap?</label>
              <select
                value={formData.carePreferences.frequency}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  carePreferences: { ...prev.carePreferences, frequency: e.target.value } 
                }))}
                className="w-full p-3 border border-border rounded-xl outline-none focus:border-primary/50 bg-background"
              >
                <option value="">Välj frekvens</option>
                <option value="dagligen">Dagligen</option>
                <option value="flera_gånger_per_vecka">Flera gånger per vecka</option>
                <option value="en_gång_per_vecka">En gång per vecka</option>
                <option value="några_gånger_per_månad">Några gånger per månad</option>
                <option value="vid_behov">Vid behov</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Hur länge per besök?</label>
              <select
                value={formData.carePreferences.duration}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  carePreferences: { ...prev.carePreferences, duration: e.target.value } 
                }))}
                className="w-full p-3 border border-border rounded-xl outline-none focus:border-primary/50 bg-background"
              >
                <option value="">Välj duration</option>
                <option value="1-2_timmar">1-2 timmar</option>
                <option value="2-4_timmar">2-4 timmar</option>
                <option value="halvdag">Halvdag</option>
                <option value="heldag">Heldag</option>
                <option value="flexibelt">Flexibelt</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Vilka tider passar bäst?</label>
              <div className="grid grid-cols-2 gap-2">
                {timeOfDayOptions.map((time) => (
                  <div key={time} className="flex items-center space-x-2">
                    <Checkbox 
                      id={time}
                      checked={formData.carePreferences.timeOfDay.includes(time)}
                      onCheckedChange={() => handleTimeOfDayToggle(time)}
                    />
                    <label htmlFor={time} className="text-sm">
                      {time}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">När vill ni börja?</label>
              <select
                value={formData.carePreferences.startDate}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  carePreferences: { ...prev.carePreferences, startDate: e.target.value } 
                }))}
                className="w-full p-3 border border-border rounded-xl outline-none focus:border-primary/50 bg-background"
              >
                <option value="">Välj startdatum</option>
                <option value="omgående">Omgående</option>
                <option value="inom_vecka">Inom en vecka</option>
                <option value="inom_månad">Inom en månad</option>
                <option value="flexibelt">Flexibelt</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Särskilda behov eller önskemål</label>
              <textarea
                value={formData.carePreferences.specialNeeds}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  carePreferences: { ...prev.carePreferences, specialNeeds: e.target.value } 
                }))}
                placeholder="T.ex. allergier, språkpreferenser, särskilda intressen..."
                rows={3}
                className="w-full p-3 border border-border rounded-xl resize-none outline-none focus:border-primary/50"
              />
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h4 className="font-medium text-green-800 mb-2">Så fungerar det:</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Vi låter relevanta vårdgivare veta att ni söker hjälp</li>
                <li>• Bläddra bland vårdgivare själv för att hitta rätt person</li>
                <li>• Vårdgivare kan kontakta er om de passar era behov</li>
                <li>• Första mötet är alltid kostnadsfritt</li>
              </ul>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-light text-primary mb-2">Lite om dig</h3>
              <p className="text-muted-foreground text-sm">Vi behöver kontaktinformation för att komma igång</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
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
                placeholder="din@email.com"
                className="rounded-xl"
              />
            </div>

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
              <label className="block text-sm font-medium mb-2">
                Du är {formData.elderlyCare.name ? `${formData.elderlyCare.name}s` : "personens"}...
              </label>
              <select
                value={formData.relation}
                onChange={(e) => setFormData(prev => ({ ...prev, relation: e.target.value }))}
                className="w-full p-3 border border-border rounded-xl outline-none focus:border-primary/50 bg-background"
              >
                <option value="">Välj relation</option>
                <option value="barn">Barn</option>
                <option value="barnbarn">Barnbarn</option>
                <option value="syskon">Syskon</option>
                <option value="make/maka">Make/Maka</option>
                <option value="vän">Vän</option>
                <option value="annan">Annan</option>
              </select>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-700">
                🔒 Vi använder din information endast för att matcha er med lämpliga sällskap. All data behandlas enligt GDPR.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="relative bg-card rounded-3xl p-6 w-full max-w-2xl mx-4 border border-border/30 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded-full" />
            <span className="font-medium text-primary">TryggVän</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Steg {currentStep} av {totalSteps}
            </span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-6">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={currentStep === 1 ? onOpenLogin : handlePrevious}
            className="rounded-xl"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {currentStep === 1 ? "Logga in istället" : "Föregående"}
          </Button>

          {currentStep === totalSteps ? (
            <Button
              onClick={handleSubmit}
              className="rounded-xl px-6"
            >
              Skapa profil
              <Check className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="rounded-xl px-6"
            >
              Nästa
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}