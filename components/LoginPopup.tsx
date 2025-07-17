"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  X,
  Mail,
  Lock,
  ArrowRight,
  Heart,
  User
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

export default function LoginPopup({ isOpen, onClose, onOpenRegister }: LoginPopupProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      // Navigate to dashboard or wherever logged in users go
      router.push("/dashboard");
    }, 1000);
  };

  const handleRegisterClick = () => {
    onClose();
    onOpenRegister();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="relative bg-card rounded-3xl p-8 w-full max-w-md mx-4 border border-border/30">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full transition-colors"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full" />
            <span className="text-lg font-medium text-primary">TryggVän</span>
          </div>
          <h2 className="text-2xl font-light text-primary mb-2">Välkommen tillbaka</h2>
          <p className="text-muted-foreground">Logga in för att fortsätta</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">E-post</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="din@email.com"
                className="pl-10 rounded-xl"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Lösenord</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                placeholder="Ditt lösenord"
                className="pl-10 rounded-xl"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={(e) => setFormData(prev => ({ ...prev, rememberMe: e.target.checked }))}
                className="w-4 h-4 rounded border-border accent-primary"
              />
              <label htmlFor="rememberMe" className="text-sm text-muted-foreground">
                Kom ihåg mig
              </label>
            </div>
            <button
              type="button"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Glömt lösenord?
            </button>
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full rounded-xl"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                <span>Loggar in...</span>
              </div>
            ) : (
              <>
                Logga in
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-border/30" />
          <span className="px-4 text-sm text-muted-foreground">eller</span>
          <div className="flex-1 border-t border-border/30" />
        </div>

        {/* Register Section */}
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Ny användare? Välj vad som passar dig:
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRegisterClick}
              className="flex flex-col items-center space-y-1 p-4 h-auto rounded-xl"
            >
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-xs">Sök sällskap</span>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                onClose();
                router.push('/create-profile');
              }}
              className="flex flex-col items-center space-y-1 p-4 h-auto rounded-xl"
            >
              <User className="h-5 w-5 text-primary" />
              <span className="text-xs">Arbeta som sällskap</span>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Genom att logga in accepterar du våra{" "}
            <a href="#" className="text-primary hover:text-primary/80">villkor</a>
            {" "}och{" "}
            <a href="#" className="text-primary hover:text-primary/80">integritetspolicy</a>
          </p>
        </div>
      </div>
    </div>
  );
}