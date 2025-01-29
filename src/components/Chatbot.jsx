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
} from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [userName, setUserName] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showNameInput, setShowNameInput] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);
  const recognition = useRef(null);

  const enhancedResponses = {
    skills: {
      content: `**Technical Expertise** 🔧
      - Full Stack: MERN (MongoDB, Express, React, Node.js)
      - Languages: Python, Java, C++, TypeScript
      - AI/ML: TensorFlow, PyTorch, Computer Vision
      - Cloud: AWS Certified, Azure, Docker, Kubernetes

      **Professional Skills** 💼
      - Agile Development & DevOps Practices
      - Microservices Architecture
      - CI/CD Pipelines
      - Cybersecurity Best Practices`,
      icon: <Code2 className="animate-pulse" />,
    },
    experience: {
      content: `**Professional Journey** 🚀
      - Senior Full Stack Developer @TechCorp (2020-Present)
      - Led 15+ enterprise projects to production
      - 98% client satisfaction rate
      - AWS Solutions Architect Certified

      **Key Achievements** 🏆
      - Reduced system latency by 40% through optimization
      - Implemented security protocols saving $2M+ annually
      - Mentored 20+ junior developers`,
      icon: <Briefcase className="animate-bounce" />,
    },
    education: {
      content: `**Academic Background** 🎓
      - MSc. Computer Science - MIT (2018-2020)
      - BSc. Software Engineering - Stanford (2014-2018)

      **Certifications** 📜
      - AWS Certified Solutions Architect
      - Google Cloud Professional
      - Certified Kubernetes Administrator`,
      icon: <School className="animate-wiggle" />,
    },
    projects: {
      content: `**Notable Projects** 🌟
      1. AI-Powered Healthcare Platform
        - Reduced diagnosis time by 30%
        - 50k+ active users

      2. Blockchain Supply Chain Solution
        - Improved transparency by 80%
        - 12 industry awards

      3. Real-Time Analytics Dashboard
        - Processed 1M+ events/second
        - 99.99% uptime`,
      icon: <Award className="animate-spin-slow" />,
    },
    contact: {
      content: `**Let's Connect** 📬
      📧 Email: contact@dotzohaib.com
      📱 LinkedIn: linkedin.com/in/dotzohaib
      💻 GitHub: github.com/dotzohaib
      🌐 Portfolio: dotzohaib.tech

      **Social Proof** 👍
      - 98% Client Retention Rate
      - 50+ Successful Projects
      - 4.9/5 Average Rating`,
      icon: <Download className="animate-ping" />,
    },
  };

  const responseKeywords = {
    skills: ["skill", "technology", "tool", "stack", "technical"],
    experience: ["experience", "work", "job", "career", "history"],
    education: ["education", "degree", "certification", "learn", "study"],
    projects: ["project", "work", "portfolio", "case study", "showcase"],
    contact: ["contact", "connect", "reach", "hire", "social"],
  };

  const getEnhancedResponse = (input) => {
    const cleanInput = input.toLowerCase().replace(/[^\w\s]/gi, "");
    let bestMatch = { category: null, score: 0 };

    // Advanced keyword matching with scoring
    Object.entries(responseKeywords).forEach(([category, keywords]) => {
      const score = keywords.reduce(
        (acc, keyword) => acc + (cleanInput.includes(keyword) ? 1 : 0),
        0
      );
      if (score > bestMatch.score) {
        bestMatch = { category, score };
      }
    });

    if (bestMatch.score > 0) {
      return enhancedResponses[bestMatch.category];
    }

    // NLP-like fallback
    if (/(hello|hi|hey)/i.test(input))
      return {
        content: "👋 Hello! I'm Zohaib's AI assistant. Ask me about:",
        options: ["Skills", "Experience", "Projects", "Education"],
      };

    if (/(thank|thanks|appreciate)/i.test(input))
      return {
        content: "🤖 You're welcome! Let me know if you need more information.",
      };

    return {
      content: "🔍 I'm constantly learning! Ask me about:",
      options: [
        "Technical Skills",
        "Work Experience",
        "Education",
        "Contact Info",
      ],
    };
  };

  // Enhanced Message Bubble with Animations
  const MessageBubble = ({ message }) => (
    <div
      className={`relative p-4 rounded-3xl max-w-[85%] shadow-lg transform transition-all duration-300 hover:scale-[1.02] ${
        message.sender === "user"
          ? "ml-auto bg-gradient-to-br from-blue-600 to-purple-600 text-white"
          : "bg-gradient-to-tl from-gray-100 to-white text-gray-800 dark:from-gray-700 dark:to-gray-800 dark:text-white"
      }`}
    >
      <div className="flex items-start gap-3">
        {message.icon && <div className="mt-1">{message.icon}</div>}
        <div className="whitespace-pre-line leading-relaxed">
          {message.content.split("\n").map((line, i) => (
            <p key={i} className="mb-2 animate-text-in">
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
              className="px-3 py-1 text-sm bg-black/10 rounded-full backdrop-blur-sm hover:bg-black/20 transition-all"
            >
              {option}
            </button>
          ))}
        </div>
      )}
      <div
        className={`text-xs mt-2 ${
          message.sender === "user" ? "text-blue-100" : "text-gray-500"
        }`}
      >
        {new Date(message.timestamp).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </div>
    </div>
  );

  // Add these styles to your CSS
  const styles = `
    @keyframes text-in {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    .animate-text-in {
      animation: text-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    .animate-spin-slow {
      animation: spin 3s linear infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .animate-wiggle {
      animation: wiggle 2s ease-in-out infinite;
    }

    @keyframes wiggle {
      0%, 100% { transform: rotate(-3deg); }
      50% { transform: rotate(3deg); }
    }

    @media (max-width: 640px) {
      .chat-container {
        width: 100vw;
        height: 100vh;
        bottom: 0;
        right: 0;
        border-radius: 0;
      }
    }
  `;

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${darkMode ? "dark" : ""}`}>
      <style>{styles}</style>

      {isOpen && (
        <div
          className={`chat-container w-[400px] h-[700px] rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white"
          }`}
        >
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-t-2xl relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-noise-pattern"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot size={28} className="animate-bounce hover:animate-spin" />
                <div>
                  <h3 className="font-bold text-xl">Zohaib AI Assistant</h3>
                  <p className="text-sm opacity-90 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Online & Available
                  </p>
                </div>
              </div>
              {/* ... rest of the component */}
            </div>
          </div>

          {/* Enhanced Input Area */}
          <div
            className={`p-4 border-t relative ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="relative flex gap-2">
              <input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything..."
                className={`pl-4 pr-12 py-3 w-full rounded-xl border-2 focus:outline-none focus:border-blue-500 transition-all ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 focus:ring-4 focus:ring-blue-500/20"
                    : "bg-white border-gray-200 focus:ring-4 focus:ring-blue-500/10"
                }`}
              />
              <button
                onClick={handleSendMessage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:scale-110 transition-transform"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Floating Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setUnreadCount(0);
        }}
        className="relative group transform transition-all duration-300 hover:scale-110"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-3xl transition-all">
          {isOpen ? (
            <X
              size={28}
              className="transform transition-transform hover:rotate-90"
            />
          ) : (
            <MessageCircle
              size={28}
              className="transform transition-transform hover:scale-125"
            />
          )}
        </div>
        {!isOpen && unreadCount > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold animate-pulse">
            {unreadCount}
          </div>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
