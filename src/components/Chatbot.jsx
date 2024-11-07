
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, Bot, ArrowLeft } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [userName, setUserName] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showNameInput, setShowNameInput] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUserName = localStorage.getItem('userName') || '';
      setUserName(storedUserName);
      setShowNameInput(!storedUserName);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (userName && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          text: `Hi ${userName}! 👋 How can I assist you today?`,
          sender: "bot",
          time: new Date()
        }]);
      }, 1000);
    }
  }, [userName]);

  // Simulate new message notification when closed
  useEffect(() => {
    if (!isOpen) {
      const timer = setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every 30 seconds
          setUnreadCount(prev => prev + 1);
        }
      }, 30000);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  // Simulate new message notification when closed
  useEffect(() => {
    if (!isOpen) {
      const timer = setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every 30 seconds
          setUnreadCount(prev => prev + 1);
        }
      }, 30000);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
    }
  };

  const handleNameSubmit = () => {
    if (userInput.trim()) {
      localStorage.setItem('userName', userInput);
      setUserName(userInput);
      setShowNameInput(false);
      setUserInput('');
    }
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessage = {
      text: userInput,
      sender: "user",
      time: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setUserInput('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(async () => {
      const response = await getBotResponse(userInput);
      setMessages(prev => [...prev, {
        text: response,
        sender: "bot",
        time: new Date()
      }]);
      setIsTyping(false);
    }, Math.random() * 1000 + 1000);
  };

  const getBotResponse = async (input) => {
    const responses = [
      { keywords: ['hi', 'hello', 'hey'], response: `Hello! How can I help you today? 👋` },
      { keywords: ['bye', 'goodbye'], response: "Goodbye! Have a great day! 👋" },
      { keywords: ['thanks', 'thank you'], response: "You're welcome! Is there anything else you need? 😊" },
      { keywords: ['help'], response: "I'm here to help! What can I assist you with? 💡" },
      { keywords: ['name'], response: "I'm Zohaib Ali." },
      { keywords: ['do', 'work'], response: "I am a Full Stack Developer specializing in MERN Stack." },
      { keywords: ['experience', 'years'], response: "I have several years of experience in web development and IT." },
      { keywords: ['technologies', 'use'], response: "I work with React.js, Next.js, Node.js, Express, MongoDB, and Tailwind CSS." },
      { keywords: ['skills'], response: "My skills include web development, AI, machine learning, and cyber security." },
      { keywords: ['food', 'favorite'], response: "I love Biryani!" },
      { keywords: ['ai', 'artificial intelligence'], response: "I'm passionate about AI, particularly in natural language processing (NLP), machine learning (ML), and deep learning (DL)." },
      { keywords: ['projects', 'work'], response: "I've worked on e-commerce websites, AI chatbots, machine learning models, and portfolio sites." },
      { keywords: ['contact', 'reach'], response: "You can contact me via email at Zuhaibalid@gmail.com." },
      { keywords: ['website'], response: "My website is [www.CodeWithZohaib.com](https://www.CodeWithZohaib.com)." },
      { keywords: ['hiring'], response: "Feel free to contact me through my website or email to discuss availability." },
      { keywords: ['programming', 'language'], response: "I enjoy working with JavaScript, Python, and R, especially for data science and AI." },
      { keywords: ['schedule', 'availability'], response: "You can check my availability by contacting me via email or through my website." },
      { keywords: ['expertise', 'web development'], response: "I have expertise in front-end and back-end development, with a focus on security and performance." },
      { keywords: ['services'], response: "I offer full-stack web development, AI/ML solutions, and digital marketing services." },
      { keywords: ['passion'], response: "I’m passionate about web development, machine learning, and AI." },
      { keywords: ['cloud', 'computing'], response: "Cloud computing allows remote servers to store, manage, and process data over the internet." },
      { keywords: ['ml', 'machine learning'], response: "Machine Learning (ML) is a branch of AI that enables computers to learn from data and improve over time without being explicitly programmed." },
      { keywords: ['dl', 'deep learning'], response: "Deep Learning (DL) is a subset of ML that uses neural networks with many layers to model complex patterns in data." },
      { keywords: ['nlp'], response: "Natural Language Processing (NLP) focuses on the interaction between computers and humans through natural language, enabling machines to understand, interpret, and generate human language." },
      { keywords: ['security', 'web security'], response: "Web security involves protecting websites from attacks, unauthorized access, and vulnerabilities." },
      { keywords: ['optimize', 'performance'], response: "I optimize websites through performance tuning, minimizing load times, and ensuring a smooth user experience." },
      { keywords: ['motivates'], response: "I’m motivated by solving challenging problems and delivering quality results." },
      { keywords: ['challenges', 'in', 'development'], response: "Challenges in development often lead to valuable learning experiences." },
      { keywords: ['maintaining', 'quality'], response: "I focus on maintaining quality throughout the development process." },
      { keywords: ['time', 'management', 'techniques'], response: "I use techniques like the Pomodoro Technique to manage my time." },
      { keywords: ['goals', 'for', 'next', 'year'], response: "My goals for next year include expanding my skills in AI, machine learning, and cloud computing." },
      { keywords: ['learning', 'from', 'mistakes'], response: "I believe in learning from my mistakes to grow as a developer." },
      { keywords: ['approach', 'to', 'design'], response: "I take a user-centered approach to design." },
      { keywords: ['continuous', 'learning'], response: "I engage in continuous learning to stay updated with the latest technologies." },
      { keywords: ['balancing', 'work', 'and', 'personal', 'life'], response: "I balance work and personal life by scheduling time for both." },
      { keywords: ['skills', 'to', 'develop'], response: "I am looking to develop my skills in AI, deep learning, and data science." },
      { keywords: ['collaborative', 'tools'], response: "I use collaborative tools like GitHub for version control." },
      { keywords: ['importance', 'of', 'communication'], response: "Communication is key to successful teamwork." },
      { keywords: ['code', 'review', 'process'], response: "I participate in code reviews to learn from others and improve my coding." },
      { keywords: ['work', 'philosophy'], response: "My work philosophy is to always strive for excellence and improvement." },
      { keywords: ['favorite', 'podcast'], response: "My favorite podcast is about AI, technology trends, and insights." },
      { keywords: ['career', 'advice'], response: "My best career advice is to find a mentor and learn from their experience." },
      { keywords: ['how', 'to', 'stay', 'focused'], response: "I stay focused by minimizing distractions and setting clear goals." },
      { keywords: ['creative', 'process'], response: "My creative process involves brainstorming and prototyping ideas." },
      { keywords: ['learning', 'from', 'others'], response: "I value learning from others’ experiences and insights." },
      { keywords: ['passion', 'for', 'technology'], response: "My passion for technology drives my career choices." },
      { keywords: ['what', 'drives', 'you'], response: "I am driven by the desire to create meaningful and impactful solutions." },
      { keywords: ['dealing', 'with', 'failure'], response: "I deal with failure by analyzing what went wrong and adjusting my approach." },
      { keywords: ['importance', 'of', 'teamwork'], response: "Teamwork is essential for achieving complex project goals." },
      { keywords: ['impact', 'of', 'AI'], response: "I believe AI will significantly impact various industries, including healthcare, finance, and transportation, in the coming years." },
      { keywords: ['how', 'to', 'stay', 'updated'], response: "I stay updated by following tech news, AI/ML blogs, and attending relevant conferences." },
      { keywords: ['project', 'management', 'tools'], response: "I use tools like Trello, Asana, and Jira for project management." },
      { keywords: ['ai', 'artificial intelligence'], response: "I'm passionate about AI, particularly in NLP and deep learning." },
      { keywords: ['projects', 'work'], response: "I've worked on e-commerce websites, AI chatbots, and portfolio sites." },
      { keywords: ['contact', 'reach'], response: "You can contact me via email at Zuhaibalid@gmail.com." },
      { keywords: ['website'], response: "My website is [www.CodeWithZohaib.com](https://www.CodeWithZohaib.com)." },
      { keywords: ['hiring'], response: "Feel free to contact me through my website or email to discuss availability." },
      { keywords: ['programming', 'language'], response: "I enjoy working with JavaScript and Python." },
      { keywords: ['schedule', 'availability'], response: "You can check my availability by contacting me via email or through my website." },
      { keywords: ['expertise', 'web development'], response: "I have expertise in front-end and back-end development, with a focus on security and performance." },
      { keywords: ['services'], response: "I offer full-stack web development, AI solutions, and digital marketing services." },
      { keywords: ['passion'], response: "I’m passionate about web development and AI." },
      { keywords: ['cloud', 'computing'], response: "Cloud computing allows remote servers to store, manage, and process data over the internet." },
      { keywords: ['nlp'], response: "NLP stands for Natural Language Processing, focused on human-computer interactions." },
      { keywords: ['security', 'web security'], response: "Web security involves protecting websites from attacks, unauthorized access, and vulnerabilities." },
      { keywords: ['optimize', 'performance'], response: "I optimize websites through performance tuning, minimizing load times, and ensuring a smooth user experience." },
      { keywords: ['motivates'], response: "I’m motivated by solving challenging problems and delivering quality results." },
      { keywords: ['favorite', 'hobby'], response: "In my free time, I enjoy reading books and exploring new technologies." },
      { keywords: ['learning', 'process'], response: "I believe in continuous learning and regularly take online courses to improve my skills." },
      { keywords: ['teamwork'], response: "I value teamwork and collaboration in projects, as it leads to better outcomes." },
      { keywords: ['leadership'], response: "I enjoy taking the lead on projects and guiding teams towards achieving their goals." },
      { keywords: ['challenges', 'face'], response: "I face challenges head-on and view them as opportunities for growth." },
      { keywords: ['work', 'ethic'], response: "I have a strong work ethic and am dedicated to delivering high-quality work." },
      { keywords: ['current', 'projects'], response: "Currently, I am working on a personal portfolio and several freelance projects." },
      { keywords: ['technology', 'interested'], response: "I am interested in emerging technologies like blockchain and quantum computing." },
      { keywords: ['code', 'review'], response: "I believe code reviews are essential for maintaining code quality and team learning." },
      { keywords: ['frameworks', 'used'], response: "Besides MERN, I also work with Angular and Vue.js for front-end development." },
      { keywords: ['version', 'control'], response: "I use Git for version control and collaboration on projects." },
      { keywords: ['database', 'experience'], response: "I have experience working with both SQL and NoSQL databases." },
      { keywords: ['user', 'experience'], response: "I prioritize user experience in all my projects to ensure usability and accessibility." },
      { keywords: ['testing', 'code'], response: "I write unit tests to ensure my code is reliable and maintainable." },
      { keywords: ['deploy', 'applications'], response: "I have experience deploying applications on platforms like Vercel and Heroku." },
      { keywords: ['responsive', 'design'], response: "I implement responsive design to ensure my applications work on all devices." },
      { keywords: ['web', 'accessibility'], response: "I follow best practices for web accessibility to make my sites usable for everyone." },
      { keywords: ['community', 'involvement'], response: "I am active in the developer community and participate in local meetups." },
      { keywords: ['future', 'goals'], response: "My future goals include expanding my knowledge in AI and contributing to open-source projects." },
      { keywords: ['data', 'science'], response: "I have a keen interest in data science and analytics." },
      { keywords: ['machine', 'learning'], response: "I explore machine learning techniques to enhance applications." },
      { keywords: ['test', 'driven', 'development'], response: "I practice test-driven development to create robust applications." },
      { keywords: ['collaboration'], response: "I enjoy collaborating with designers to create visually appealing applications." },
      { keywords: ['freelance'], response: "I take on freelance projects to diversify my experience and income." },
      { keywords: ['design', 'principles'], response: "I follow design principles like alignment, contrast, and repetition for better UI." },
      { keywords: ['best', 'practices'], response: "I adhere to best practices in coding, such as writing clean and maintainable code." },
      { keywords: ['automation'], response: "I automate repetitive tasks to increase efficiency in my workflow." },
      { keywords: ['community', 'contributions'], response: "I contribute to open-source projects and help other developers." },
      { keywords: ['tools', 'use'], response: "I use tools like Figma for design and Postman for API testing." },
      { keywords: ['frameworks', 'preferences'], response: "I prefer React for front-end development due to its flexibility." },
      { keywords: ['motivational', 'quote'], response: "I believe in the quote: 'Success is not the key to happiness. Happiness is the key to success.'" },
      { keywords: ['time', 'management'], response: "I prioritize tasks and set deadlines to manage my time effectively." },
      { keywords: ['work', 'balance'], response: "I strive to maintain a healthy work-life balance." },
      { keywords: ['goal', 'setting'], response: "I set SMART goals to track my progress." },
      { keywords: ['portfolio', 'importance'], response: "A portfolio showcases my skills and projects to potential employers." },
      { keywords: ['mentorship'], response: "I value mentorship and seek guidance from experienced professionals." },
      { keywords: ['networking'], response: "I actively network to expand my connections in the industry." },
      { keywords: ['innovation'], response: "I embrace innovation and explore new ideas in my projects." },
      { keywords: ['future', 'trends'], response: "I keep an eye on future trends in technology to stay ahead." },
      { keywords: ['code', 'quality'], response: "I prioritize code quality by following coding standards." },
      { keywords: ['feedback'], response: "I welcome feedback to improve my work." },
      { keywords: ['research'], response: "I conduct research to stay updated on industry developments." },
      { keywords: ['documentation'], response: "I document my projects for better understanding and collaboration." },
      { keywords: ['technical', 'writing'], response: "I enjoy technical writing and share my knowledge through articles." },
      { keywords: ['virtual', 'events'], response: "I participate in virtual events and webinars to learn and network." },
      { keywords: ['workshops'], response: "I attend workshops to enhance my skills." },
      { keywords: ['team', 'collaboration'], response: "I believe teamwork leads to better results." },
      { keywords: ['conflict', 'resolution'], response: "I approach conflicts calmly and seek mutual understanding." },
      { keywords: ['code', 'optimization'], response: "I optimize code for better performance and readability." },
      { keywords: ['application', 'security'], response: "I implement security best practices in applications." },
      { keywords: ['data', 'protection'], response: "I take data protection seriously and follow regulations." },
      { keywords: ['user', 'feedback'], response: "I use user feedback to improve applications." },
      { keywords: ['agile', 'methodologies'], response: "I am familiar with Agile methodologies for project management." },
      { keywords: ['scrum'], response: "I have experience working in Scrum teams." },
      { keywords: ['project', 'management'], response: "I use tools like Trello and Asana for project management." },
      { keywords: ['client', 'communication'], response: "I maintain clear communication with clients throughout projects." },
      { keywords: ['design', 'process'], response: "I follow a structured design process to ensure project success." },
      { keywords: ['software', 'lifecycle'], response: "I understand the software development lifecycle (SDLC) and its phases." },
      { keywords: ['problem', 'solving'], response: "I excel in problem-solving and critical thinking." },
      { keywords: ['adaptability'], response: "I adapt quickly to new tools and technologies." },
      { keywords: ['entrepreneurship'], response: "I have an interest in entrepreneurship and startup culture." },
      { keywords: ['skills', 'development'], response: "I invest time in developing new skills to stay competitive." },
      { keywords: ['success', 'definition'], response: "Success is achieving personal and professional goals." },
      { keywords: ['client', 'satisfaction'], response: "Client satisfaction is my top priority." },
      { keywords: ['future', 'aspirations'], response: "I aspire to lead a development team in the future." },
      { keywords: ['life', 'goals'], response: "My life goals include continuous learning and making a positive impact." },
      { keywords: ['career', 'path'], response: "I envision a successful career in tech with leadership roles." },
      { keywords: ['philosophy'], response: "My philosophy is to always strive for excellence." },
      { keywords: ['why', 'developer'], response: "I became a developer because I enjoy solving problems and creating innovative solutions." },
      { keywords: ['work', 'motivation'], response: "I am motivated by the impact my work can have on users and businesses." },
      { keywords: ['favorite', 'language'], response: "My favorite programming language is JavaScript due to its versatility." },
      { keywords: ['software', 'interests'], response: "I am interested in software development methodologies and best practices." },
      { keywords: ['front-end', 'technologies'], response: "I work with HTML, CSS, and JavaScript for front-end development." },
      { keywords: ['back-end', 'technologies'], response: "For back-end development, I primarily use Node.js and Express." },
      { keywords: ['responsive', 'web', 'design'], response: "Responsive web design ensures my applications look good on all devices." },
      { keywords: ['favorite', 'project'], response: "My favorite project was building an AI chatbot for a client." },
      { keywords: ['learning', 'resources'], response: "I use online platforms like Coursera and Udemy for learning new skills." },
      { keywords: ['coding', 'challenges'], response: "I enjoy taking on coding challenges to improve my problem-solving skills." },
      { keywords: ['latest', 'technologies'], response: "I keep updated with the latest technologies by following industry blogs." },
      { keywords: ['collaboration', 'tools'], response: "I use Slack and Microsoft Teams for team collaboration." },
      { keywords: ['user', 'testing'], response: "User testing helps me gather feedback on my applications." },
      { keywords: ['tech', 'community'], response: "I actively engage with the tech community through forums and meetups." },
      { keywords: ['personal', 'projects'], response: "I have several personal projects that I work on during my free time." },
      { keywords: ['favorite', 'framework'], response: "My favorite framework is React because of its component-based architecture." },
      { keywords: ['biggest', 'inspiration'], response: "My biggest inspiration is seeing the positive impact of technology on society." },
      { keywords: ['career', 'development'], response: "I focus on continuous career development through learning and networking." },
      { keywords: ['favorite', 'book'], response: "My favorite book is 'Clean Code' by Robert C. Martin." },
      { keywords: ['importance', 'mentorship'], response: "Mentorship is important for personal and professional growth." },
      { keywords: ['future', 'tech', 'interests'], response: "I am particularly interested in the future of AI and automation." },
      { keywords: ['problem', 'solving', 'skills'], response: "I continuously work on improving my problem-solving skills." },
      { keywords: ['software', 'architecture'], response: "I study software architecture to design scalable applications." },
      { keywords: ['network', 'security'], response: "I understand the basics of network security to protect applications." },
      { keywords: ['cloud', 'technologies'], response: "I am learning about cloud technologies like AWS and Azure." },
      { keywords: ['interview', 'preparation'], response: "I prepare for interviews by practicing common coding challenges." },
      { keywords: ['team', 'building'], response: "I enjoy team-building activities that foster collaboration." },
      { keywords: ['experience', 'learning'], response: "I believe real-world experience is the best way to learn." },
      { keywords: ['advice', 'new', 'developers'], response: "My advice for new developers is to never stop learning and practicing." },
      { keywords: ['favorite', 'tool'], response: "My favorite tool for coding is Visual Studio Code." },
      { keywords: ['maintain', 'work-life', 'balance'], response: "I maintain work-life balance by setting clear boundaries." },
      { keywords: ['biggest', 'challenge'], response: "My biggest challenge was learning how to effectively manage time in projects." },
      { keywords: ['software', 'lifecycle', 'phases'], response: "I understand the phases of the software development lifecycle." },
      { keywords: ['collaborative', 'environment'], response: "I thrive in collaborative environments where ideas can flow freely." },
      { keywords: ['remote', 'work'], response: "I have experience working remotely and enjoy the flexibility it offers." },
      { keywords: ['technology', 'trends'], response: "I stay updated on technology trends by reading articles and attending webinars." },
      { keywords: ['testing', 'importance'], response: "Testing is crucial for delivering reliable and bug-free applications." },
      { keywords: ['biggest', 'achievement'], response: "My biggest achievement was launching a successful e-commerce platform." },
      { keywords: ['strategies', 'project', 'management'], response: "I use Agile strategies for effective project management." },
      { keywords: ['passion', 'development'], response: "My passion for development drives me to create innovative solutions." },
      { keywords: ['coding', 'practices'], response: "I follow best coding practices to write maintainable code." },
      { keywords: ['user', 'feedback', 'importance'], response: "User feedback is vital for improving user experience." },
      { keywords: ['biggest', 'lessons'], response: "My biggest lessons come from failures and mistakes." },
      { keywords: ['adapting', 'to', 'change'], response: "I adapt quickly to changes in technology and project requirements." },
      { keywords: ['code', 'refactoring'], response: "I regularly refactor my code to improve its structure and performance." },
      { keywords: ['learning', 'by', 'doing'], response: "I believe in learning by doing and building real projects." },
      { keywords: ['staying', 'motivated'], response: "I stay motivated by setting personal goals and celebrating achievements." },
      { keywords: ['impact', 'of', 'technology'], response: "I am fascinated by the impact of technology on everyday life." },
      { keywords: ['project', 'collaboration'], response: "I collaborate with designers and developers for project success." },
      { keywords: ['data', 'analytics'], response: "I use data analytics to make informed decisions in projects." },
      { keywords: ['security', 'best', 'practices'], response: "I implement security best practices in all my applications." },
      { keywords: ['future', 'of', 'work'], response: "I believe the future of work will be heavily influenced by technology." },
      { keywords: ['importance', 'of', 'testing'], response: "Testing is crucial to ensure application functionality and user satisfaction." },
      { keywords: ['challenges', 'in', 'development'], response: "Challenges in development often lead to valuable learning experiences." },
      { keywords: ['maintaining', 'quality'], response: "I focus on maintaining quality throughout the development process." },
      { keywords: ['time', 'management', 'techniques'], response: "I use techniques like the Pomodoro Technique to manage my time." },
      { keywords: ['goals', 'for', 'next', 'year'], response: "My goals for next year include expanding my skills in AI and cloud computing." },
      { keywords: ['learning', 'from', 'mistakes'], response: "I believe in learning from my mistakes to grow as a developer." },
      { keywords: ['approach', 'to', 'design'], response: "I take a user-centered approach to design." },
      { keywords: ['continuous', 'learning'], response: "I engage in continuous learning to stay updated with the latest technologies." },
      { keywords: ['balancing', 'work', 'and', 'personal', 'life'], response: "I balance work and personal life by scheduling time for both." },
      { keywords: ['skills', 'to', 'develop'], response: "I am looking to develop my skills in AI and data science." },
      { keywords: ['collaborative', 'tools'], response: "I use collaborative tools like GitHub for version control." },
      { keywords: ['importance', 'of', 'communication'], response: "Communication is key to successful teamwork." },
      { keywords: ['code', 'review', 'process'], response: "I participate in code reviews to learn from others and improve my coding." },
      { keywords: ['work', 'philosophy'], response: "My work philosophy is to always strive for excellence and improvement." },
      { keywords: ['favorite', 'podcast'], response: "My favorite podcast is about technology trends and insights." },
      { keywords: ['career', 'advice'], response: "My best career advice is to find a mentor and learn from their experience." },
      { keywords: ['how', 'to', 'stay', 'focused'], response: "I stay focused by minimizing distractions and setting clear goals." },
      { keywords: ['creative', 'process'], response: "My creative process involves brainstorming and prototyping ideas." },
      { keywords: ['learning', 'from', 'others'], response: "I value learning from others’ experiences and insights." },
      { keywords: ['passion', 'for', 'technology'], response: "My passion for technology drives my career choices." },
      { keywords: ['what', 'drives', 'you'], response: "I am driven by the desire to create meaningful and impactful solutions." },
      { keywords: ['dealing', 'with', 'failure'], response: "I deal with failure by analyzing what went wrong and adjusting my approach." },
      { keywords: ['importance', 'of', 'teamwork'], response: "Teamwork is essential for achieving complex project goals." },
      { keywords: ['impact', 'of', 'AI'], response: "I believe AI will significantly impact various industries in the coming years." },
      { keywords: ['how', 'to', 'stay', 'updated'], response: "I stay updated by following tech news, blogs, and podcasts." },
      { keywords: ['project', 'management', 'tools'], response: "I use tools like Trello and Asana for project management." },
      { keywords: ['impact', 'of', 'user', 'experience'], response: "User experience greatly impacts user satisfaction and retention." },
    
    ];

    const lowerInput = input.toLowerCase();
    for (const { keywords, response } of responses) {
      if (keywords.some(keyword => lowerInput.includes(keyword))) {
        return response;
      }
    }
    return "I'm here to help! Feel free to ask any questions. 🤖";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[360px] h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={24} />
                <div>
                  <h3 className="font-bold">AI Assistant</h3>
                  <p className="text-sm opacity-90">Online</p>
                </div>
              </div>
              <button 
                onClick={handleToggle}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {showNameInput ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 p-4">
                <Bot size={48} className="text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-800">Welcome! 👋</h2>
                <p className="text-gray-600 text-center">Please enter your name to start chatting</p>
                <div className="w-full max-w-sm flex gap-2">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Your name..."
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
                  />
                  <button
                    onClick={handleNameSubmit}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Start
                  </button>
                </div>
              </div>
            ) : (
              <>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-800 shadow-sm'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex mb-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input Area */}
          {!showNameInput && (
            <div className="p-4 bg-white border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleToggle}
        className="relative group"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300">
          {isOpen ? (
            <X size={24} />
          ) : (
            <MessageCircle size={24} />
          )}
        </div>
        
        {/* Unread Count Badge */}
        {!isOpen && unreadCount > 0 && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            {unreadCount}
          </div>
        )}
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
              Chat with DotZohaib
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
