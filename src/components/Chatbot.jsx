"use client"
import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  Send,
  X,
  Bot,
  Mic,
  Sun,
  Moon,
  Clock,
  Coffee,
  Code2,
  Briefcase,
  Award,
  Mail,
  Heart,
} from "lucide-react";

const AnimatedCandle = ({ darkMode }) => (
  <div className="candle-wrapper fixed inset-0 overflow-hidden pointer-events-none z-0">
    <style>
      {`
        .candle-wrapper {
          perspective: 1000px;
        }

        .candle {
          position: absolute;
          left: 50%;
          bottom: 15%;
          width: 28px;
          height: 100px;
          background: linear-gradient(to right,
            ${darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.95)'},
            ${darkMode ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,1)'},
            ${darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.95)'}
          );
          border-radius: 4px;
          transform: translateX(-50%);
          box-shadow:
            0 0 20px rgba(255,255,255,0.4),
            inset 0 0 8px rgba(0,0,0,0.1);
        }

        .candle::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 32px;
          height: 10px;
          background: rgba(255,255,255,0.8);
          border-radius: 50%;
          filter: blur(2px);
        }

        .wick {
          position: absolute;
          left: 50%;
          bottom: 100%;
          width: 4px;
          height: 12px;
          background: #2c2c2c;
          border-radius: 2px;
          transform: translateX(-50%);
        }

        .flame-container {
          position: absolute;
          left: 50%;
          bottom: calc(100% + 10px);
          transform: translateX(-50%);
          z-index: 2;
        }

        .flame {
          position: relative;
          width: 16px;
          height: 32px;
          background: linear-gradient(to bottom, #ff6b2c 0%, #ff922c 60%, #ffdc2c 100%);
          border-radius: 50% 50% 20% 20%;
          transform-origin: center bottom;
          animation: flameMove 3s ease-in-out infinite;
          filter: blur(1px);
        }

        .flame::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, transparent 80%);
          border-radius: inherit;
          mix-blend-mode: screen;
        }

        .glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 32px;
          height: 48px;
          background: radial-gradient(ellipse at center, rgba(255,160,40,0.4) 0%, transparent 70%);
          filter: blur(4px);
          animation: glowPulse 2s ease-in-out infinite alternate;
        }

        .spark {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #ffeb3b;
          border-radius: 50%;
          filter: blur(1px);
          animation: sparkFloat 2s ease-out infinite;
          opacity: 0;
        }

        .spark:nth-child(1) { left: -10px; animation-delay: 0.4s; }
        .spark:nth-child(2) { left: 10px; animation-delay: 1.2s; }
        .spark:nth-child(3) { left: 0; animation-delay: 0.8s; }
        .spark:nth-child(4) { left: -5px; animation-delay: 1.6s; }

        @keyframes flameMove {
          0%, 100% { transform: scale(1) rotate(-2deg) translateX(0); }
          25% { transform: scale(1.1) rotate(3deg) translateX(-1px); }
          50% { transform: scale(0.95) rotate(-1deg) translateX(1px); }
          75% { transform: scale(1.05) rotate(2deg) translateX(0); }
        }

        @keyframes sparkFloat {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { transform: translateY(-20px) scale(1.2); opacity: 1; }
          100% { transform: translateY(-40px) scale(0.8); opacity: 0; }
        }

        @keyframes glowPulse {
          0% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
        }

        @media (max-width: 768px) {
          .candle {
            bottom: 12%;
            width: 24px;
            height: 80px;
          }
          .flame {
            width: 14px;
            height: 28px;
          }
          .glow {
            width: 28px;
            height: 42px;
          }
        }

        @media (max-width: 480px) {
          .candle {
            bottom: 10%;
            width: 20px;
            height: 60px;
          }
          .flame {
            width: 12px;
            height: 24px;
          }
          .glow {
            width: 24px;
            height: 36px;
          }
        }
      `}
    </style>
    <div className="candle">
      <div className="wick"></div>
      <div className="flame-container">
        <div className="glow"></div>
        <div className="flame">
          <div className="spark"></div>
          <div className="spark"></div>
          <div className="spark"></div>
          <div className="spark"></div>
        </div>
      </div>
    </div>
  </div>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [theme, setTheme] = useState("blue");
  const messagesEndRef = useRef(null);
  const speechRecognition = useRef(null);

  const personalInfo = {
    name: "ZOHAIB ALI",
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

  const themes = {
    blue: "from-blue-600 to-purple-600",
    green: "from-green-600 to-teal-600",
    red: "from-red-600 to-pink-600",
    orange: "from-orange-600 to-yellow-600",
  };

  const enhancedResponses = {
    skills: {
      content: `**Technical Skills** 🔧
        • Frontend: React, Next.js, Vue.js
        • Backend: Node.js, Python, Java
        • Database: MongoDB, PostgreSQL
        • Cloud: AWS, Docker, Kubernetes`,
      icon: <Code2 className="animate-pulse" />,
    },
    experience: {
      content: `**Work Experience** 💼
        • Senior Developer (2020-Present)
        • AI Solutions Architect (2018-2020)
        • Full Stack Developer (2016-2018)`,
      icon: <Briefcase className="animate-bounce" />,
    },
    projects: {
      content: `**Key Projects** 🚀
        • AI-Powered Healthcare Platform
        • Blockchain Supply Chain Solution
        • Smart City IoT Integration`,
      icon: <Award className="animate-spin-slow" />,
    },
    contact: {
      content: `**Contact Info** 📬
        • Email: you@example.com
        • LinkedIn: /in/yourprofile
        • GitHub: /yourusername`,
      icon: <Mail className="animate-bounce" />,
    },
    hobbies: {
      content: `**Interests** 🎯
        • ${personalInfo.hobbies.join('\n• ')}`,
      icon: <Heart className="animate-pulse" />,
    },
  };

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

      speechRecognition.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getEnhancedResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    if (lowercaseInput.includes("skills")) return enhancedResponses.skills;
    if (lowercaseInput.includes("experience")) return enhancedResponses.experience;
    if (lowercaseInput.includes("projects")) return enhancedResponses.projects;
    if (lowercaseInput.includes("contact")) return enhancedResponses.contact;
    if (lowercaseInput.includes("hobbies")) return enhancedResponses.hobbies;

    return {
      content: "Hi! I can tell you about my skills, experience, projects, or how to contact me. What would you like to know?",
      icon: <Bot className="animate-pulse" />,
      options: ["Tell me about your skills", "What's your experience?", "Show me your projects", "How can I contact you?"],
    };
  };

  const toggleVoiceInput = () => {
    if (isListening) {
      speechRecognition.current?.stop();
    } else {
      speechRecognition.current?.start();
    }
    setIsListening(!isListening);
  };

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
    }, Math.random() * 1000 + 500);
  };

  const MessageBubble = ({ message }) => (
    <div
      className={`relative p-3 sm:p-4 rounded-3xl max-w-[95%] sm:max-w-[85%] shadow-lg transform transition-all duration-300
        ${message.animate ? "animate-slide-in" : ""}
        ${
          message.sender === "user"
            ? `ml-auto bg-gradient-to-br ${themes[theme]} text-white`
            : "bg-gradient-to-tl from-gray-100 to-white text-gray-800 dark:from-gray-700 dark:to-gray-800 dark:text-white"
        }`}
    >
      <div className="flex items-start gap-2 sm:gap-3">
        {message.icon && <div className="w-4 h-4 sm:w-6 sm:h-6">{message.icon}</div>}
        <div className="whitespace-pre-line text-sm sm:text-base break-words">
          {message.content.split("\n").map((line, i) => (
            <p key={i} className="mb-1 sm:mb-2">{line}</p>
          ))}
        </div>
      </div>
      {message.options && (
        <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-2">
          {message.options.map((option, i) => (
            <button
              key={i}
              onClick={() => {
                setUserInput(option);
                handleSendMessage(option);
              }}
              className="px-2 py-1 text-xs sm:text-sm bg-black/10 rounded-full hover:bg-black/20 transition-all"
            >
              {option}
            </button>
          ))}
        </div>
      )}
      <div className="text-[10px] sm:text-xs mt-1 sm:mt-2 opacity-75 flex items-center gap-1">
        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
        {new Date(message.timestamp).toLocaleTimeString()}
      </div>
    </div>
  );

  return (
    <div className={`fixed bottom-0 sm:bottom-4 right-0 sm:right-4 z-50 ${darkMode ? "dark" : ""}`}>
      {isOpen && (
        <div className="chat-container w-full sm:w-[90vw] h-[90vh] sm:h-[80vh] max-w-[450px] max-h-[700px] bg-white dark:bg-gray-900 rounded-none sm:rounded-2xl shadow-2xl flex flex-col animate-fade-in-up overflow-hidden relative">
          <AnimatedCandle darkMode={darkMode} />
          <div className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm" />

          <div className="relative z-10 flex flex-col h-full">
            <div className={`bg-gradient-to-r ${themes[theme]} p-4 rounded-t-2xl flex items-center justify-between`}>
              <div className="flex items-center gap-3">
              <div>
                  <h3 className="font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    {personalInfo.title}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setTheme(Object.keys(themes)[(Object.keys(themes).indexOf(theme) + 1) % Object.keys(themes).length])}
                  className="p-2 hover:bg-white/10 rounded-full transition-all"
                >
                  <Coffee className="text-white w-4 h-4" />
                </button>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 hover:bg-white/10 rounded-full transition-all"
                >
                  {darkMode ? (
                    <Sun className="text-white w-4 h-4" />
                  ) : (
                    <Moon className="text-white w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-all"
                >
                  <X className="text-white w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 p-3 sm:p-4 overflow-y-auto">
              {messages.map((message, index) => (
                <div key={index} className="mb-3 sm:mb-4">
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

            <div className="p-3 sm:p-4 border-t dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleVoiceInput}
                  className={`p-2 rounded-full transition-all ${
                    isListening ? "text-red-500 animate-pulse" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
                >
                  <Mic className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-xl border dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-blue-500 text-sm sm:text-base"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className={`p-2 text-white bg-gradient-to-r ${themes[theme]} rounded-xl hover:opacity-90 transition-all`}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 w-14 h-14 sm:w-12 sm:h-12 bg-gradient-to-r ${themes[theme]} rounded-full
          shadow-lg flex items-center justify-center text-white
          hover:shadow-xl transition-all animate-pulse`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .dark .chat-container {
          transition: background-color 0.3s ease;
        }

        @media (max-width: 640px) {
          .chat-container {
            width: 100vw !important;
            height: 100vh !important;
            max-height: 100vh !important;
            position: fixed;
            left: 0;
            bottom: 0;
            margin: 0;
            border-radius: 0 !important;
          }

          .message-bubble {
            max-width: 85% !important;
            margin: 0.5rem 0;
          }

          .input-container {
            padding: env(safe-area-inset-bottom);
          }
        }

        .chat-container ::-webkit-scrollbar {
          width: 4px;
        }

        .chat-container ::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 2px;
        }

        .dark .chat-container ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
        }

        /* Improved touch targets for mobile */
        @media (max-width: 640px) {
          button {
            min-width: 48px;
            min-height: 48px;
            padding: 0.75rem;
          }

          input {
            min-height: 48px;
            font-size: 16px; /* Prevents iOS zoom */
            padding: 0.75rem 1rem;
          }

          .chat-toggle-button {
            bottom: env(safe-area-inset-bottom);
          }
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
