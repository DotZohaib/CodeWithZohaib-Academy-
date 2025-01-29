'use client';
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, Bot, Mic, Smile, Sun, Moon } from 'lucide-react';
import dynamic from 'next/dynamic';
import ReactMarkdown from 'react-markdown';

// Lazy load emoji picker
const Picker = dynamic(
  () => import('emoji-picker-react'),
  { ssr: false }
);


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognition = useRef<any>(null);

  // Speech recognition setup
  useEffect(() => {
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;

      recognition.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setUserInput(prev => prev + ' ' + transcript);
        setIsListening(false);
      };

      recognition.current.onerror = () => {
        setIsListening(false);
      };
    }
  }, []);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

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
  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    const responses: { [key: string]: string } = {
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

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user message
    const newMessage: Message = {
      sender: 'user',
      text: userInput,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setUserInput('');
    setShowEmojiPicker(false);

    // Simulate bot response
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      const botMessage: Message = {
        sender: 'bot',
        text: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleVoiceInput = () => {
    if (isListening) {
      recognition.current?.stop();
    } else {
      recognition.current?.start();
    }
    setIsListening(!isListening);
  };

  const onEmojiClick = (emojiObject: any) => {
    setUserInput(prev => prev + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const MessageBubble = ({ message }: { message: Message }) => (
    <div
      className={`p-3 rounded-2xl max-w-[80%] ${
        message.sender === 'user'
          ? 'ml-auto bg-blue-600 text-white'
          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white'
      }`}
    >
      <ReactMarkdown
        components={{
          code: ({ node, ...props }) => (
            <code className="bg-gray-200 dark:bg-gray-600 p-1 rounded" {...props} />
          )
        }}
      >
        {message.text}
      </ReactMarkdown>
      <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${darkMode ? 'dark' : ''}`}>
      {isOpen && (
        <div className={`w-[350px] h-[600px] rounded-2xl shadow-xl flex flex-col transition-all duration-300 ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-white'
        }`}>
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
              <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}>
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
                        className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors dark:bg-blue-900 dark:text-blue-100"
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
                  className="p-1 hover:bg-gray-200 rounded-full dark:hover:bg-gray-600"
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
                <div className="absolute bottom-14 left-0 z-10">
                  <Picker onEmojiClick={onEmojiClick} />
                </div>
              )}

              <input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className={`pl-10 pr-4 py-2 w-full rounded-full border focus:outline-none focus:ring-2 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 focus:ring-blue-500' 
                    : 'bg-white border-gray-200 focus:ring-blue-500'
                }`}
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
        onClick={() => {
          setIsOpen(!isOpen);
          setUnreadCount(0);
        }}
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
    </div>
  );
};

export default Chatbot;
