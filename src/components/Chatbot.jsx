'use client';
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, Bot, ArrowLeft, Mic, Smile, Sun, Moon, Code } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';
import ReactMarkdown from 'react-markdown';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [userName, setUserName] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showNameInput, setShowNameInput] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);
  const recognition = useRef(null);

  // Speech recognition setup
  useEffect(() => {
    if (typeof window !== 'undefined' && window.SpeechRecognition) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;

      recognition.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setUserInput(prev => prev + ' ' + transcript);
        setIsListening(false);
      };

      recognition.current.onerror = () => {
        setIsListening(false);
      };
    }
  }, []);

  // Message persistence
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) setMessages(JSON.parse(savedMessages));
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  // Typing animation
  const TypingIndicator = () => (
    <div className="flex items-center space-x-2">
      <div className="dot-flashing"></div>
      <span className="text-sm text-gray-500">AI is typing...</span>
    </div>
  );

  // Quick reply suggestions
  const quickReplies = [
    'What technologies do you use?',
    'Tell me about your experience',
    'How can I contact you?',
    'Show me your skills'
  ];

  // Enhanced bot responses
  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    const responses = {
      skills: `**Technical Skills:**\n- MERN Stack (MongoDB, Express, React, Node.js)\n- Python, Java, C++\n- AI/ML (TensorFlow, PyTorch)\n- Cybersecurity Tools\n\n**Professional Skills:**\n- Agile Development\n- DevOps CI/CD\n- Cloud Computing (AWS, Azure)`,
      experience: `**Professional Experience:**\n- 5+ years in full-stack development\n- Led 10+ projects from concept to deployment\n- Specialized in scalable web applications\n- Certified AWS Solutions Architect`,
      contact: `**Contact Information:**\n📧 Email: contact@dotzohaib.com\n📱 LinkedIn: linkedin.com/in/dotzohaib\n🌐 Portfolio: dotzohaib.tech`,
      technologies: `**Tech Stack Expertise:**\n- Frontend: React, Next.js, TypeScript\n- Backend: Node.js, Django, GraphQL\n- Databases: MongoDB, PostgreSQL\n- DevOps: Docker, Kubernetes, Jenkins`,
      code: "```javascript\nfunction greet() {\n  console.log('Hello World!');\n}\n```"
    };

    if (lowerInput.includes('technologies')) return responses.technologies;
    if (lowerInput.includes('experience')) return responses.experience;
    if (lowerInput.includes('contact')) return responses.contact;
    if (lowerInput.includes('skills')) return responses.skills;
    if (lowerInput.includes('code')) return responses.code;
    
    return "I'm here to help! Feel free to ask about my skills, experience, or projects. 🤖";
  };

  // Voice input handler
  const handleVoiceInput = () => {
    if (isListening) {
      recognition.current?.stop();
    } else {
      recognition.current?.start();
    }
    setIsListening(!isListening);
  };

  // Emoji selection handler
  const onEmojiClick = (emojiData) => {
    setUserInput(prev => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  // Message component with markdown support
  const MessageBubble = ({ message }) => (
    <div className={`p-3 rounded-2xl prose ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white'}`}>
      <ReactMarkdown components={{
        code: ({node, ...props}) => <Code size={16} className="inline-block mr-1" {...props} />,
        a: ({node, ...props}) => <a {...props} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer" />
      }}>
        {message.text}
      </ReactMarkdown>
      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
        {message.time.toLocaleTimeString()}
      </p>
    </div>
  );

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${darkMode ? 'dark' : ''}`}>
      {/* Chat Window */}
      {isOpen && (
        <div className={`w-[350px] h-[600px] rounded-2xl shadow-xl flex flex-col transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot size={24} className="animate-bounce" />
                <div>
                  <h3 className="font-bold">DotZohaib AI</h3>
                  <p className="text-sm opacity-90">Ask me anything!</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-1 hover:bg-white/20 rounded-full"
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Chat Content */}
          <div className={`flex-1 overflow-y-auto p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 animate-messageIn ${message.sender === 'user' ? 'text-right' : ''}`}>
                <MessageBubble message={message} />
                {message.sender === 'bot' && index === messages.length - 1 && (
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {quickReplies.map((reply, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setUserInput(reply);
                          handleSendMessage();
                        }}
                        className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="relative flex gap-2">
              <div className="absolute left-2 bottom-2 flex gap-1">
                <button
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className="p-1 hover:bg-gray-200 rounded-full"
                >
                  <Smile size={18} />
                </button>
                <button
                  onClick={handleVoiceInput}
                  className={`p-1 rounded-full ${isListening ? 'text-red-500 animate-pulse' : ''}`}
                >
                  <Mic size={18} />
                </button>
              </div>
              {showEmojiPicker && (
                <div className="absolute bottom-12 left-0 z-10">
                  <EmojiPicker onEmojiClick={onEmojiClick} />
                </div>
              )}
              <input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="pl-10 pr-4 py-2 w-full rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-4 relative group animate-bounce-slow"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:from-blue-700 hover:to-purple-700 transition-all">
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </div>
        {!isOpen && unreadCount > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
            {unreadCount}
          </div>
        )}
      </button>

      <style jsx global>{`
        @keyframes messageIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .dot-flashing {
          position: relative;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #3b82f6;
          animation: dotFlashing 1s infinite linear alternate;
        }
        
        @keyframes dotFlashing {
          0% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-3px); }
          100% { opacity: 0.3; transform: translateY(0); }
        }

        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
