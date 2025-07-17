"use client";

import { useState } from "react";
import { ChevronDown, Home, Users, Heart, MessageCircle, User, Check, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AllPagesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const pageCategories = [
    {
      title: "Huvudsidor",
      pages: [
        { name: "Startsida", path: "/", icon: Home },
        { name: "Sök vårdgivare", path: "/companions", icon: Users },
        { name: "Familjer (för vårdgivare)", path: "/care-seekers", icon: Heart },
        { name: "Meddelanden", path: "/messages", icon: MessageCircle }
      ]
    },
    {
      title: "Profiler & Registrering",
      pages: [
        { name: "Skapa vårdgivarprofil", path: "/create-profile", icon: User },
        { name: "Vårdgivarprofil (exempel)", path: "/companions/1", icon: User },
        { name: "Familjprofil (exempel)", path: "/care-seekers/1", icon: Heart },
        { name: "Profil skapad (framgång)", path: "/profile-success", icon: Check },
        { name: "Registrering klar", path: "/registration-complete", icon: Check }
      ]
    }
  ];

  const handlePageClick = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
      >
        <span>Alla sidtyper</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-80 bg-card border border-border/30 rounded-2xl shadow-lg z-50 overflow-hidden">
            <div className="p-3 border-b border-border/30 bg-secondary/20">
              <h3 className="font-medium text-primary text-sm">Demo - Alla sidor</h3>
              <p className="text-xs text-muted-foreground">Utforska alla sidtyper vi har byggt</p>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {pageCategories.map((category, categoryIndex) => (
                <div key={category.title}>
                  <div className="px-4 py-2 bg-secondary/10 border-b border-border/20">
                    <h4 className="text-sm font-medium text-primary">{category.title}</h4>
                  </div>
                  <div className="py-1">
                    {category.pages.map((page) => {
                      const IconComponent = page.icon;
                      return (
                        <button
                          key={page.path}
                          onClick={() => handlePageClick(page.path)}
                          className="w-full px-4 py-2 text-left hover:bg-secondary/50 transition-colors flex items-center space-x-3"
                        >
                          <IconComponent className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{page.name}</span>
                        </button>
                      );
                    })}
                  </div>
                  {categoryIndex < pageCategories.length - 1 && (
                    <div className="border-b border-border/20" />
                  )}
                </div>
              ))}
            </div>
            
            <div className="p-3 border-t border-border/30 bg-secondary/10">
              <p className="text-xs text-muted-foreground text-center">
                💡 Denna meny är endast för demo-syfte
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}