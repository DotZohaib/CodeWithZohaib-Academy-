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

// Animated Candle Component
const AnimatedCandle = ({ darkMode }) => (
  <div className="candle-container absolute inset-0 overflow-hidden pointer-events-none">
    <style>
      {`
        .candle {
          position: absolute;
          left: 50%;
          bottom: 20%;
          width: 30px;
          height: 100px;
          background: ${darkMode ? '#fff' : '#000'};
          border-radius: 4px;
          transform: translateX(-50%);
          box-shadow: 0 0 20px rgba(${darkMode ? '255,255,255,0.2' : '0,0,0,0.2'});
        }

        .flame-wrapper {
          position: absolute;
          left: 50%;
          bottom: 100%;
          transform: translateX(-50%);
        }

        .flame {
          position: relative;
          width: 15px;
          height: 30px;
          background: #ff9800;
          border-radius: 50% 50% 20% 20%;
          transform-origin: center bottom;
          animation: flicker 1s ease-in-out infinite alternate;
          box-shadow: 0 0 20px #ff9800, 0 0 40px #ff6600;
        }

        .spark {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #ffeb3b;
          border-radius: 50%;
          animation: spark 2s ease-in-out infinite;
          opacity: 0;
        }

        .spark:nth-child(1) { left: -10px; animation-delay: 0.2s; }
        .spark:nth-child(2) { left: 10px; animation-delay: 0.7s; }
        .spark:nth-child(3) { left: 0; animation-delay: 1.2s; }

        @keyframes flicker {
          0%, 100% { transform: scale(1) rotate(-2deg); }
          25% { transform: scale(1.1) rotate(2deg); }
          50% { transform: scale(0.9) rotate(-1deg); }
          75% { transform: scale(1.05) rotate(1deg); }
        }

        @keyframes spark {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { transform: translateY(-20px) scale(1.2); opacity: 1; }
          100% { transform: translateY(-40px) scale(0.8); opacity: 0; }
        }
      `}
    </style>
    <div className="candle">
      <div className="flame-wrapper">
        <div className="flame">
          <div className="spark"></div>
          <div className="spark"></div>
          <div className="spark"></div>
        </div>
      </div>
    </div>
  </div>
);

const Chatbot = () => {
  // State management
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [theme, setTheme] = useState("blue");
  const messagesEndRef = useRef(null);
  const speechRecognition = useRef(null);

  // Personal information data
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

  // Theme colors
  const themes = {
    blue: "from-blue-600 to-purple-600",
    green: "from-green-600 to-teal-600",
    red: "from-red-600 to-pink-600",
    orange: "from-orange-600 to-yellow-600",
  };

  // Enhanced responses
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
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Get enhanced response based on user input
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

  // Handle voice input
  const toggleVoiceInput = () => {
    if (isListening) {
      speechRecognition.current?.stop();
    } else {
      speechRecognition.current?.start();
    }
    setIsListening(!isListening);
  };

  // Handle sending messages
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

  // Message bubble component
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
        <div className="whitespace-pre-line text-sm sm:text-base">
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
                handleSendMessage();
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
    <div className={`fixed bottom-4 right-4 z-50 ${darkMode ? "dark" : ""}`}>
      {isOpen && (
        <div className="chat-container w-[400px] h-[600px] sm:w-[350px] sm:h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col animate-fade-in-up overflow-hidden relative">
          <AnimatedCandle darkMode={darkMode} />

          <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90" />

          <div className="relative z-10 flex flex-col h-full">
            {/* Header */}
            <div className={`bg-gradient-to-r ${themes[theme]} p-4 rounded-t-2xl flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <Bot className="text-white w-6 h-6" />
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
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleVoiceInput}
                  className={`p-2 rounded-full transition-all ${
                    isListening ? "text-red-500 animate-pulse" : "text-gray-400"
                  }`}
                >
                  <Mic className="w-4 h-4" />
                </button>
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-xl border dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={() => handleSendMessage()}
                className={`p-2 text-white bg-gradient-to-r ${themes[theme]} rounded-xl hover:opacity-90 transition-all`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 bg-gradient-to-r ${themes[theme]} rounded-full
          shadow-lg flex items-center justify-center text-white
          hover:shadow-xl transition-all animate-pulse`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Global Styles */}
      <style jsx global>
        {`
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slide-in {
            0% {
              opacity: 0;
              transform: translateX(20px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
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
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          /* Dark mode transitions */
          .dark .chat-container {
            transition: background-color 0.3s ease;
          }

          /* Responsive styles */
          @media (max-width: 640px) {
            .chat-container {
              width: 90vw !important;
              height: 80vh !important;
              margin: 0 auto;
              right: 50%;
              transform: translateX(50%);
            }
          }

          /* Scrollbar styling */
          .chat-container ::-webkit-scrollbar {
            width: 6px;
          }

          .chat-container ::-webkit-scrollbar-track {
            background: transparent;
          }

          .chat-container ::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.1);
            border-radius: 3px;
          }

          .dark .chat-container ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
          }
        `}
      </style>
    </div>
  );
};

export default Chatbot;
