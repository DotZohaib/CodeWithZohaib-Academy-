"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  Send,
  X,
  Bot,
  Mic,
  Smile,
  Sun,
  Moon,
  Download,
  Award,
  Briefcase,
  School,
  Code2,
  Github,
  Linkedin,
  Mail,
  Globe,
  Calendar,
  Clock,
  Language,
  Heart,
  Coffee,
  Music,
} from "lucide-react";

const Chatbot = () => {
  // State management
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [theme, setTheme] = useState("blue");
  const messagesEndRef = useRef(null);
  const speechRecognition = useRef(null);

  // Personal information data
  const personalInfo = {
    name: "Your Name",
    title: "Full Stack Developer & AI Enthusiast",
    location: "City, Country",
    languages: ["English", "Arabic", "French"],
    hobbies: ["Coding", "Reading", "Music", "Photography"],
    availability: {
      timezone: "UTC+5",
      workHours: "9 AM - 6 PM",
      response: "Usually within 2 hours",
    },
  };

  // Enhanced responses with more categories and detailed information
  const enhancedResponses = {
    skills: {
      content: `**Technical Expertise** 🔧
      - Full Stack Development
        • Frontend: React, Next.js, Vue.js, Angular
        • Backend: Node.js, Python, Java, Go
        • Mobile: React Native, Flutter

      - Database & Cloud
        • AWS Certified Solutions Architect
        • MongoDB, PostgreSQL, Redis
        • Docker, Kubernetes, Terraform

      - AI/ML Expertise
        • TensorFlow, PyTorch, Scikit-learn
        • Computer Vision & NLP
        • MLOps & Model Deployment

      - Emerging Technologies
        • Blockchain Development
        • Web3 & Smart Contracts
        • IoT Integration`,
      icon: <Code2 className="animate-pulse" />,
    },
    experience: {
      content: `**Professional Journey** 🚀
      - Senior Full Stack Developer (2020-Present)
        • Led team of 12 developers
        • Implemented microservices architecture
        • Reduced system latency by 40%

      - AI Solutions Architect (2018-2020)
        • Developed custom ML models
        • Automated business processes
        • $2M+ cost savings

      **Key Achievements** 🏆
      - Patents: 2 filed, 1 granted
      - Published 5 technical papers
      - Speaker at 10+ tech conferences`,
      icon: <Briefcase className="animate-bounce" />,
    },
    projects: {
      content: `**Featured Projects** 💻
      1. AI-Powered Healthcare Platform
         • 50k+ active users
         • 99.9% uptime
         • Featured in TechCrunch

      2. Blockchain Supply Chain
         • $10M+ transactions processed
         • 80% efficiency improvement
         • Industry recognition award

      3. Smart City IoT Solution
         • 100k+ connected devices
         • Real-time monitoring
         • Open-source contribution`,
      icon: <Award className="animate-spin-slow" />,
    },
    contact: {
      content: `**Let's Connect** 📬
      - Portfolio: yourwebsite.com
      - Email: you@example.com
      - LinkedIn: /in/yourprofile
      - GitHub: /yourusername

      **Availability**
      - Timezone: ${personalInfo.availability.timezone}
      - Hours: ${personalInfo.availability.workHours}
      - Response: ${personalInfo.availability.response}`,
      icon: <Mail className="animate-bounce" />,
    },
    hobbies: {
      content: `**Beyond Coding** 🎯
      ${personalInfo.hobbies.map((hobby) => `• ${hobby}`).join("\n")}

      **Languages**
      ${personalInfo.languages.map((lang) => `• ${lang}`).join("\n")}`,
      icon: <Heart className="animate-pulse" />,
    },
  };

  // Animation classes
  const animations = {
    container: "animate-fade-in-up",
    message: "animate-slide-in",
    button: "animate-pulse hover:animate-bounce",
    icon: "animate-spin-slow hover:animate-ping",
  };

  // Theme colors
  const themes = {
    blue: "from-blue-600 to-purple-600",
    green: "from-green-600 to-teal-600",
    red: "from-red-600 to-pink-600",
    orange: "from-orange-600 to-yellow-600",
  };

  // Helper function to get enhanced response based on user input
  const getEnhancedResponse = (input) => {
    const lowercaseInput = input.toLowerCase();

    if (
      lowercaseInput.includes("skills") ||
      lowercaseInput.includes("expertise")
    ) {
      return enhancedResponses.skills;
    } else if (
      lowercaseInput.includes("experience") ||
      lowercaseInput.includes("work")
    ) {
      return enhancedResponses.experience;
    } else if (
      lowercaseInput.includes("projects") ||
      lowercaseInput.includes("portfolio")
    ) {
      return enhancedResponses.projects;
    } else if (
      lowercaseInput.includes("contact") ||
      lowercaseInput.includes("reach")
    ) {
      return enhancedResponses.contact;
    } else if (
      lowercaseInput.includes("hobbies") ||
      lowercaseInput.includes("interests")
    ) {
      return enhancedResponses.hobbies;
    }

    // Default response
    return {
      content:
        "Hi! I can tell you about my skills, experience, projects, or how to contact me. What would you like to know?",
      icon: <Bot className="animate-pulse" />,
      options: [
        "Tell me about your skills",
        "What's your experience?",
        "Show me your projects",
        "How can I contact you?",
      ],
    };
  };

  // Speech recognition setup
  useEffect(() => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      speechRecognition.current = new SpeechRecognition();
      speechRecognition.current.continuous = false;
      speechRecognition.current.interimResults = false;

      speechRecognition.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setUserInput(transcript);
        handleSendMessage(transcript);
      };
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle voice input
  const toggleVoiceInput = () => {
    if (isListening) {
      speechRecognition.current?.stop();
    } else {
      speechRecognition.current?.start();
    }
    setIsListening(!isListening);
  };

  // Text-to-speech output
  const speak = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
    }
  };

  // Enhanced message handling
  const handleSendMessage = async (voiceInput = null) => {
    const input = voiceInput || userInput;
    if (!input.trim()) return;

    const newUserMessage = {
      content: input,
      sender: "user",
      timestamp: new Date(),
      animate: true,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setUserInput("");
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const response = getEnhancedResponse(input);
      setMessages((prev) => [
        ...prev,
        {
          ...response,
          sender: "bot",
          timestamp: new Date(),
          animate: true,
        },
      ]);
      setIsTyping(false);

      // Optional: Speak the response
      if (isSpeaking) {
        speak(response.content);
      }
    }, Math.random() * 1000 + 500);
  };

  // Message bubble component with enhanced animations
  const MessageBubble = ({ message }) => (
    <div
      className={`relative p-4 rounded-3xl max-w-[85%] shadow-lg transform transition-all duration-300
        ${message.animate ? animations.message : ""}
        ${
          message.sender === "user"
            ? `ml-auto bg-gradient-to-br ${themes[theme]} text-white`
            : `bg-gradient-to-tl from-gray-100 to-white text-gray-800
             dark:from-gray-700 dark:to-gray-800 dark:text-white`
        }`}
    >
      <div className="flex items-start gap-3">
        {message.icon && <div className={animations.icon}>{message.icon}</div>}
        <div className="whitespace-pre-line markdown">
          {message.content.split("\n").map((line, i) => (
            <p key={i} className={`mb-2 ${animations.container}`}>
              {line}
            </p>
          ))}
        </div>
      </div>
      {message.options && (
        <div className="mt-3 flex flex-wrap gap-2">
          {message.options.map((option, i) => (
            <button
              key={i}
              onClick={() => {
                setUserInput(option);
                handleSendMessage();
              }}
              className={`px-3 py-1 text-sm bg-black/10 rounded-full
                hover:bg-black/20 transition-all ${animations.button}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
      <div className="text-xs mt-2 opacity-75 flex items-center gap-1">
        <Clock size={12} />
        {new Date(message.timestamp).toLocaleTimeString()}
      </div>
    </div>
  );

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${darkMode ? "dark" : ""}`}>
      <style>
        {`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes slide-in {
            0% { opacity: 0; transform: translateX(20px); }
            100% { opacity: 1; transform: translateX(0); }
          }

          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.5s ease-out forwards;
          }

          .animate-slide-in {
            animation: slide-in 0.3s ease-out forwards;
          }

          .animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }

          .markdown strong {
            color: inherit;
            font-weight: 600;
          }

          .markdown code {
            background: rgba(0,0,0,0.1);
            padding: 2px 4px;
            border-radius: 4px;
          }
        `}
      </style>

      {isOpen && (
        <div
          className={`w-[400px] h-[600px] bg-white dark:bg-gray-900 rounded-2xl
          shadow-2xl flex flex-col ${animations.container}`}
        >
          {/* Header */}
          <div
            className={`bg-gradient-to-r ${themes[theme]} p-4 rounded-t-2xl
            flex items-center justify-between`}
          >
            <div className="flex items-center gap-3">
              <Bot className={`text-white ${animations.icon}`} size={24} />
              <div>
                <h3 className="font-bold text-white">{personalInfo.name}</h3>
                <p className="text-sm text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  {personalInfo.title}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setTheme(
                    Object.keys(themes)[
                      (Object.keys(themes).indexOf(theme) + 1) %
                        Object.keys(themes).length
                    ]
                  )
                }
                className="p-2 hover:bg-white/10 rounded-full transition-all"
              >
                <Coffee className="text-white" />
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 hover:bg-white/10 rounded-full transition-all"
              >
                {darkMode ? (
                  <Sun className="text-white" />
                ) : (
                  <Moon className="text-white" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-all"
              >
                <X className="text-white" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className="mb-4">
                <MessageBubble message={message} />
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 text-gray-400">
                <div className="animate-bounce">●</div>
                <div className="animate-bounce delay-100">●</div>
                <div className="animate-bounce delay-200">●</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t dark:border-gray-700">
            <div className="relative flex items-center gap-2">
              <button
                onClick={toggleVoiceInput}
                className={`p-2 rounded-full transition-all ${
                  isListening ? "text-red-500 animate-pulse" : "text-gray-400"
                }`}
              >
                <Mic size={20} />
              </button>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="w-full px-4 py-2 rounded-xl border dark:border-gray-700
                  dark:bg-gray-800 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={() => handleSendMessage()}
                className={`p-2 text-white bg-gradient-to-r ${themes[theme]}
                  rounded-xl hover:opacity-90 transition-all ${animations.button}`}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-r ${themes[theme]} rounded-full
          shadow-lg flex items-center justify-center text-white
          hover:shadow-xl transition-all ${animations.button}`}
      >
        {isOpen ? (
          <X size={24} className="animate-spin-slow" />
        ) : (
          <MessageCircle size={24} className="animate-pulse" />
        )}
      </button>
    </div>
  );
};

export default Chatbot;
