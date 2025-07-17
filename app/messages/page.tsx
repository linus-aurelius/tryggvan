"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { 
  Search,
  MessageCircle,
  Phone,
  Video,
  MoreHorizontal,
  Send,
  ArrowLeft,
  Clock,
  Check,
  CheckCheck,
  Calendar,
  User,
  Heart
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AllPagesDropdown from "@/components/AllPagesDropdown";

export default function MessagesPage() {
  const router = useRouter();
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [messageInput, setMessageInput] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Anna Andersson",
      type: "Familie söker hjälp",
      lastMessage: "Hej! Vi skulle vilja träffa dig för att prata om mamma. Passar imorgon?",
      time: "10:30",
      unread: 2,
      avatar: "/api/placeholder/40/40",
      online: true,
      elderlyPerson: "Erik, 78 år"
    },
    {
      id: 2,
      name: "Maria Lindström",
      type: "Vårdgivare",
      lastMessage: "Tack för det trevliga samtalet! Ser fram emot att träffa er.",
      time: "Igår",
      unread: 0,
      avatar: "/api/placeholder/40/40",
      online: false,
      elderlyPerson: null
    },
    {
      id: 3,
      name: "Per Johansson", 
      type: "Familie söker hjälp",
      lastMessage: "Hej! Kan vi boka ett möte nästa vecka?",
      time: "Måndag",
      unread: 1,
      avatar: "/api/placeholder/40/40",
      online: true,
      elderlyPerson: "Astrid, 82 år"
    }
  ];

  const currentChat = conversations.find(c => c.id === selectedChat);

  const messages = [
    {
      id: 1,
      sender: "Anna Andersson",
      content: "Hej! Jag såg din profil och tror du skulle passa bra för min pappa Erik. Han är 78 år och bor hemma i Stockholm.",
      time: "09:15",
      isMe: false,
      status: "read"
    },
    {
      id: 2,
      sender: "Mig",
      content: "Hej Anna! Tack för att du hörde av dig. Jag skulle gärna vilja veta mer om Erik och vad han tycker om att göra.",
      time: "09:20",
      isMe: true,
      status: "read"
    },
    {
      id: 3,
      sender: "Anna Andersson",
      content: "Han älskar att promenera och fika. Tidigare var han lärare så han tycker om att prata och berätta historier. Han behöver sällskap 2-3 gånger i veckan, cirka 2-3 timmar per gång.",
      time: "09:25",
      isMe: false,
      status: "read"
    },
    {
      id: 4,
      sender: "Mig",
      content: "Det låter precis som något jag skulle trivas med! Jag har arbetat som lärare själv så vi har säkert mycket gemensamt att prata om. Skulle vi kunna träffas för att prata mer?",
      time: "09:30",
      isMe: true,
      status: "read"
    },
    {
      id: 5,
      sender: "Anna Andersson",
      content: "Hej! Vi skulle vilja träffa dig för att prata om mamma. Passar imorgon?",
      time: "10:30",
      isMe: false,
      status: "delivered"
    }
  ];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Add message logic here
      setMessageInput("");
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
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-muted-foreground hover:text-primary">Hem</Link>
              <Link href="/companions" className="text-muted-foreground hover:text-primary">Sök sällskap</Link>
              <Link href="/care-seekers" className="text-muted-foreground hover:text-primary">Familjer</Link>
              <a href="/messages" className="text-primary font-medium">Meddelanden</a>
              <AllPagesDropdown />
              <button className="text-muted-foreground hover:text-primary">Konto</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 flex h-screen">
        {/* Conversations List */}
        <div className="w-80 border-r border-border/30 flex flex-col">
          <div className="p-4 border-b border-border/30">
            <h1 className="text-xl font-medium text-primary mb-4">Meddelanden</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Sök konversationer..." 
                className="pl-10 rounded-xl"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-4 border-b border-border/30 cursor-pointer hover:bg-secondary/50 transition-colors ${
                  selectedChat === conversation.id ? 'bg-secondary/50' : ''
                }`}
                onClick={() => setSelectedChat(conversation.id)}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-muted-foreground" />
                    </div>
                    {conversation.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-sm truncate">{conversation.name}</h3>
                      <span className="text-xs text-muted-foreground">{conversation.time}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`px-2 py-1 rounded-full text-xs ${
                        conversation.type === 'Familie söker hjälp' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {conversation.type}
                      </div>
                      {conversation.elderlyPerson && (
                        <span className="text-xs text-muted-foreground">
                          {conversation.elderlyPerson}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground truncate">
                        {conversation.lastMessage}
                      </p>
                      {conversation.unread > 0 && (
                        <div className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">
                          {conversation.unread}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-border/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-muted-foreground" />
                    </div>
                    {currentChat?.online && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                    )}
                  </div>
                  <div>
                    <h2 className="font-medium">{currentChat?.name}</h2>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        currentChat?.type === 'Familie söker hjälp' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {currentChat?.type}
                      </span>
                      {currentChat?.elderlyPerson && (
                        <span className="text-sm text-muted-foreground">
                          {currentChat?.elderlyPerson}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="rounded-full">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-full">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-full">
                    <Calendar className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-full">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md ${
                      message.isMe 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    } rounded-2xl px-4 py-2`}>
                      <p className="text-sm">{message.content}</p>
                      <div className={`flex items-center gap-1 mt-1 ${
                        message.isMe ? 'justify-end' : 'justify-start'
                      }`}>
                        <span className={`text-xs ${
                          message.isMe ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}>
                          {message.time}
                        </span>
                        {message.isMe && (
                          <div className="text-primary-foreground/70">
                            {message.status === 'read' ? (
                              <CheckCheck className="h-3 w-3" />
                            ) : message.status === 'delivered' ? (
                              <Check className="h-3 w-3" />
                            ) : (
                              <Clock className="h-3 w-3" />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-border/30">
                <div className="flex items-center gap-2">
                  <Input
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Skriv ett meddelande..."
                    className="flex-1 rounded-full"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!messageInput.trim()}
                    size="sm" 
                    className="rounded-full px-4"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-primary mb-2">Välj en konversation</h3>
                <p className="text-muted-foreground">Välj en konversation från listan för att börja chatta</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}