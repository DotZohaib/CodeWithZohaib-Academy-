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
import { CheckCircle, Copy, ChevronUp, ChevronDown, BookmarkPlus, Share2, Heart, MessageCircle } from 'lucide-react';

interface QuestionPageProps {
  params: Promise<{ id: string }>; // Update to reflect that params is a Promise
}

export default function QuestionPage({ params }: QuestionPageProps) {
  const [id, setId] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showFullCode, setShowFullCode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('typescript');
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    const fetchParams = async () => {
      const unwrappedParams = await params; // Unwrap the Promise
      setId(unwrappedParams.id);
    };
    fetchParams();
  }, [params]);

  const question = id ? database.find((item) => item.id === parseInt(id, 10)) : null;

  useEffect(() => {
    Prism.highlightAll();
  }, [question, selectedLanguage]);

  const handleCopyCode = async () => {
    if (question?.code) {
      try {
        await navigator.clipboard.writeText(question.code);
        setIsCopied(true);
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
      } else {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks.filter((id: any) => id !== question?.id)));
      }
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: question?.Title || "Question",
          text: `Check out this question: ${question?.Title}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } catch (error) {
        console.error("Failed to copy link:", error);
      }
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  if (!question) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-100 to-purple-100">
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-pink-600"
        >
          Question not found.
        </motion.p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20"
        >
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-8 relative">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl font-bold text-white text-center mb-4"
            >
              {question.Title}
            </motion.h1>
            <div className="absolute right-4 top-4 flex space-x-3">
              <button
                onClick={handleBookmark}
                className={`p-2 rounded-full transition-all ${
                  isBookmarked ? 'bg-yellow-400' : 'bg-white/20'
                }`}
                title={isBookmarked ? 'Bookmarked' : 'Add bookmark'}
              >
                <BookmarkPlus className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
                title="Share"
              >
                <Share2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="prose max-w-none"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">Answer</span>
                <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                  Verified
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {question.answer}
              </p>
            </motion.div>

            {question.Sample && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-white/30 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Example</h2>
                <p className="text-gray-600">{question.Sample}</p>
              </motion.div>
            )}

            {question.code && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="relative group"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-gray-800">Code Solution</h2>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="px-3 py-1 rounded-md border border-gray-300 bg-white/50 backdrop-blur-lg"
                  >
                    <option value="typescript">TypeScript</option>
                    <option value="javascript">JavaScript</option>
                    <option value="jsx">JSX</option>
                    <option value="tsx">TSX</option>
                  </select>
                </div>

                <div className="relative">
                  <pre className={`line-numbers language-${selectedLanguage} ${
                    !showFullCode ? 'max-h-64' : ''
                  } overflow-hidden rounded-lg shadow-inner transition-all duration-500`}>
                    <code className={`language-${selectedLanguage}`}>
                      {question.code}
                    </code>
                  </pre>

                  <button
                    onClick={handleCopyCode}
                    className="absolute top-4 right-4 p-2 bg-pink-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center space-x-2"
                  >
                    {isCopied ? (
                      <><CheckCircle className="w-4 h-4" /><span>Copied!</span></>
                    ) : (
                      <><Copy className="w-4 h-4" /><span>Copy code</span></>
                    )}
                  </button>

                  <button
                    onClick={() => setShowFullCode(!showFullCode)}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 bg-pink-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center space-x-2"
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
                  </button>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex space-x-4"
            >
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 p-2 rounded-full transition-all ${
                  liked ? 'bg-pink-600 text-white' : 'bg-white/30 text-pink-600'
                }`}
              >
                <Heart className="w-5 h-5" />
                <span>{likeCount}</span>
              </button>
              <button
                onClick={() => setShowComments(!showComments)}
                className="flex items-center space-x-2 p-2 rounded-full bg-white/30 text-pink-600 hover:bg-white/40 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Comments</span>
              </button>
            </motion.div>

            <AnimatePresence>
              {showComments && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/30 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
                  <p className="text-gray-600">No comments yet. Be the first to comment!</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
