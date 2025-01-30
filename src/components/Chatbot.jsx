import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle, Send, X, Bot, Code2, Briefcase, Award,
  Mail, Heart, Sun, Moon, Settings, Link, Image,
  FileText, Video, Clock
} from "lucide-react";

const Chatbot = () => {
  // State management
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("blue");
  const [isMinimized, setIsMinimized] = useState(false);
  const [showAttachments, setShowAttachments] = useState(false);
  const messagesEndRef = useRef(null);

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

  // Theme colors with gradients
  const themes = {
    blue: "from-blue-600 via-blue-700 to-indigo-800",
    green: "from-green-600 via-green-700 to-teal-800",
    red: "from-red-600 via-red-700 to-pink-800",
    orange: "from-orange-600 via-orange-700 to-yellow-800",
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
        "I can tell you about my skills, experience, projects, or how to contact me. What would you like to know?",
      icon: <Bot className="animate-pulse" />,
    };
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user message
    const newUserMessage = {
      content: userInput,
      sender: "user",
      timestamp: new Date(),
      id: Date.now(),
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setUserInput("");
    setIsTyping(true);

    // Get bot response based on input
    const response = getEnhancedResponse(userInput);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        content: response.content,
        sender: "bot",
        timestamp: new Date(),
        id: Date.now() + 1,
        icon: response.icon,
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  // Message bubble component with Markdown support
  const MessageBubble = ({ message }) => {
    const formatContent = (content) => {
      return content.split("\n").map((line, index) => {
        if (line.startsWith("**") && line.endsWith("**")) {
          return (
            <h3 key={index} className="font-bold text-lg mb-2">
              {line.replace(/\*\*/g, "")}
            </h3>
          );
        }
        if (line.startsWith("•")) {
          return (
            <li key={index} className="ml-6 mb-1">
              {line}
            </li>
          );
        }
        if (line.startsWith("-")) {
          return (
            <li key={index} className="ml-4 mb-1">
              {line.substring(1)}
            </li>
          );
        }
        return (
          <p key={index} className="mb-1">
            {line}
          </p>
        );
      });
    };

    return (
      <div
        className={`group flex items-start gap-2 mb-4 ${
          message.sender === "user" ? "justify-end" : "justify-start"
        }`}
      >
        {message.sender === "bot" && (
          <div
            className={`w-8 h-8 rounded-full bg-gradient-to-r ${themes[theme]} p-1.5 animate-bounce-slow`}
          >
            {message.icon || <Bot className="text-white w-full h-full" />}
          </div>
        )}

        <div
          className={`relative max-w-[80%] p-4 rounded-2xl shadow-lg
            ${
              message.sender === "user"
                ? `bg-gradient-to-r ${themes[theme]} text-white ml-auto`
                : "bg-white dark:bg-gray-800 dark:text-white"
            }
            transform transition-all duration-300 hover:scale-[1.02]
            animate-fade-in-up`}
        >
          <div className="text-sm sm:text-base">
            {formatContent(message.content)}
          </div>
          <div className="flex items-center gap-1 text-xs opacity-70 mt-2">
            <Clock className="w-3 h-3" />
            {new Date(message.timestamp).toLocaleTimeString()}
          </div>
        </div>

        {message.sender === "user" && (
          <div
            className={`w-8 h-8 rounded-full bg-gradient-to-r ${themes[theme]} p-1.5 animate-bounce-slow`}
          >
            <div className="w-full h-full rounded-full bg-white/30" />
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className={`fixed z-50 ${darkMode ? "dark" : ""}
      ${
        isOpen
          ? "inset-0 sm:inset-auto sm:bottom-4 sm:right-4"
          : "bottom-4 right-4"
      }`}
    >
      {isOpen && (
        <div
          className={`flex flex-col bg-gray-50 dark:bg-gray-900
          ${isOpen ? "fixed inset-0 sm:absolute sm:bottom-16 sm:right-0" : ""}
          ${isMinimized ? "h-20" : "h-full sm:h-[600px]"}
          sm:w-[400px] rounded-lg shadow-2xl animate-fade-in-up`}
        >
          {/* Header */}
          <div
            className={`flex items-center justify-between p-4 bg-gradient-to-r ${themes[theme]} text-white rounded-t-lg`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 p-2 animate-bounce-slow">
                <Bot className="w-full h-full" />
              </div>
              <div>
                <h3 className="font-bold">{personalInfo.name}</h3>
                <p className="text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  {personalInfo.title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 hover:bg-white/20 rounded-full transition-all"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-2 hover:bg-white/20 rounded-full transition-all"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages area */}
          {!isMinimized && (
            <div className="flex-1 overflow-y-auto p-4">
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
              {isTyping && (
                <div className="flex gap-2 p-3">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200"></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Input area */}
          {!isMinimized && (
            <div className="p-4 border-t dark:border-gray-700">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowAttachments(!showAttachments)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800
                    transition-all animate-pulse"
                >
                  <Link className="w-5 h-5 text-gray-500" />
                </button>

                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Ask about skills, experience, projects..."
                    className="w-full px-4 py-2 rounded-full border dark:border-gray-700
                      dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2
                      focus:ring-blue-500"
                  />

                  {showAttachments && (
                    <div
                      className="absolute bottom-full mb-2 left-0 bg-white dark:bg-gray-800
                      rounded-lg shadow-lg border dark:border-gray-700 p-2"
                    >
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                          <Image className="w-5 h-5 text-gray-500" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                          <FileText className="w-5 h-5 text-gray-500" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                          <Video className="w-5 h-5 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleSendMessage}
                  disabled={!userInput.trim()}
                  className={`p-2 rounded-full bg-gradient-to-r ${themes[theme]}
                    disabled:opacity-50 disabled:cursor-not-allowed
                    hover:opacity-90 transition-all animate-pulse`}
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Floating action button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-4 right-4 w-14 h-14 rounded-full
            bg-gradient-to-r ${themes[theme]} text-white shadow-lg
            hover:shadow-xl transition-all ${Animation.pulse}`}
        >
          <MessageCircle className="w-6 h-6 mx-auto" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
