'use client';
import { array as database } from "../../../components/Database";
import { motion, AnimatePresence } from 'framer-motion';
import Prism from "prismjs";
import { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/show-language/prism-show-language";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import {
  CheckCircle,
  Copy,
  ChevronUp,
  ChevronDown,
  BookmarkPlus,
  Share2,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Flag,
  Heart,
  Download
} from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface QuestionPageProps {
  params: Promise<{ id: string }>;
}

interface Comment {
  id: number;
  text: string;
  author: string;
  timestamp: string;
}

export default function QuestionPage({ params }: QuestionPageProps) {
  const [id, setId] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showFullCode, setShowFullCode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('typescript');
  const [votes, setVotes] = useState({ up: 0, down: 0 });
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [showReportDialog, setShowReportDialog] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchParams = async () => {
      const unwrappedParams = await params;
      setId(unwrappedParams.id);
      // Load bookmarks state
      if (typeof window !== 'undefined') {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
        setIsBookmarked(bookmarks.includes(parseInt(unwrappedParams.id)));
      }
    };
    fetchParams();
  }, [params]);

  const question = id ? database.find((item: { id: number; }) => item.id === parseInt(id, 10)) : null;

  useEffect(() => {
    Prism.highlightAll();
  }, [question, selectedLanguage, showFullCode]);

  const handleCopyCode = async () => {
    if (question?.code) {
      try {
        await navigator.clipboard.writeText(question.code);
        setIsCopied(true);
        showNotificationMessage('Code copied to clipboard!');
        setTimeout(() => setIsCopied(false), 2000);
      } catch (error) {
        console.error("Failed to copy code:", error);
      }
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    if (typeof window !== 'undefined') {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      if (!isBookmarked) {
        localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, question?.id]));
        showNotificationMessage('Added to bookmarks!');
      } else {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks.filter((id: any) => id !== question?.id)));
        showNotificationMessage('Removed from bookmarks!');
      }
    }
  };

  const handleVote = (type: 'up' | 'down') => {
    if (userVote === type) {
      setUserVote(null);
      setVotes(prev => ({
        ...prev,
        [type]: prev[type] - 1
      }));
    } else {
      if (userVote) {
        setVotes(prev => ({
          ...prev,
          [userVote]: prev[userVote] - 1
        }));
      }
      setUserVote(type);
      setVotes(prev => ({
        ...prev,
        [type]: prev[type] + 1
      }));
    }
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        text: newComment,
        author: 'User',
        timestamp: new Date().toISOString()
      };
      setComments([...comments, comment]);
      setNewComment('');
      showNotificationMessage('Comment added successfully!');
    }
  };

  const handleDownloadCode = () => {
    if (question?.code) {
      const blob = new Blob([question.code], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `solution.${selectedLanguage}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showNotificationMessage('Code downloaded successfully!');
    }
  };

  const showNotificationMessage = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  if (!question) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <p className="text-3xl font-semibold text-red-600">Question not found.</p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 relative"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-bold text-white text-center mb-4"
            >
              {question.Title}
            </motion.h1>
            <div className="absolute right-4 top-4 flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full ${isLiked ? 'bg-red-400' : 'bg-white/20'}`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'text-white fill-current' : 'text-white'}`} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleBookmark}
                className={`p-2 rounded-full ${isBookmarked ? 'bg-yellow-400' : 'bg-white/20'}`}
              >
                <BookmarkPlus className="w-5 h-5 text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowReportDialog(true)}
                className="p-2 rounded-full bg-white/20"
              >
                <Flag className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </motion.div>

          <div className="p-6 space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="prose max-w-none"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2">Answer</span>
                  <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                    Verified
                  </span>
                </h2>
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleVote('up')}
                    className={`p-2 rounded-full ${userVote === 'up' ? 'bg-green-100' : ''}`}
                  >
                    <ThumbsUp className={`w-5 h-5 ${userVote === 'up' ? 'text-green-600' : 'text-gray-400'}`} />
                    <span className="ml-1">{votes.up}</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleVote('down')}
                    className={`p-2 rounded-full ${userVote === 'down' ? 'bg-red-100' : ''}`}
                  >
                    <ThumbsDown className={`w-5 h-5 ${userVote === 'down' ? 'text-red-600' : 'text-gray-400'}`} />
                    <span className="ml-1">{votes.down}</span>
                  </motion.button>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {question.answer}
              </p>
            </motion.div>

            {question.code && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="relative group"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-gray-800">Code Solution</h2>
                  <div className="flex items-center space-x-4">
                    <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="px-3 py-1 rounded-md border border-gray-300 bg-white"
                    >
                      <option value="typescript">TypeScript</option>
                      <option value="javascript">JavaScript</option>
                      <option value="jsx">JSX</option>
                      <option value="tsx">TSX</option>
                    </select>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleDownloadCode}
                      className="p-2 rounded-full bg-gray-100"
                      title="Download code"
                    >
                      <Download className="w-5 h-5 text-gray-600" />
                    </motion.button>
                  </div>
                </div>

                <div className="relative">
                  <pre className={`line-numbers language-${selectedLanguage} ${
                    !showFullCode ? 'max-h-64' : ''
                  } overflow-hidden rounded-lg shadow-inner transition-all duration-500`}>
                    <code className={`language-${selectedLanguage}`}>
                      {question.code}
                    </code>
                  </pre>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyCode}
                    className="absolute top-4 right-4 p-2 bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center space-x-2"
                  >
                    {isCopied ? (
                      <><CheckCircle className="w-4 h-4" /><span>Copied!</span></>
                    ) : (
                      <><Copy className="w-4 h-4" /><span>Copy code</span></>
                    )}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowFullCode(!showFullCode)}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center space-x-2"
                  >
                    {showFullCode ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        <span>Show less</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        <span>Show more</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
