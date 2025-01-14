'use client';
import { array as database } from "../../../components/Database";
import { motion, AnimatePresence } from "framer-motion";
import Prism from "prismjs";
import { useEffect, useState, useRef } from "react";
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
  MessageSquare,
  Edit,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface QuestionPageProps {
  params: { id: string };
}

interface Comment {
  id: number;
  text: string;
  author: string;
  timestamp: string;
  likes: number;
  isEdited: boolean;
}

export default function QuestionPage({ params }: QuestionPageProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [id, setId] = useState<string | null>(params.id || null);
  const [isCopied, setIsCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showFullCode, setShowFullCode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("typescript");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [votes, setVotes] = useState({ up: 0, down: 0 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showShareModal, setShowShareModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const commentInputRef = useRef<HTMLTextAreaElement>(null);
  const question = id ? database.find((item) => item.id === parseInt(id, 10)) : null;

  useEffect(() => {
    if (id && typeof window !== "undefined") {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
      setIsBookmarked(bookmarks.includes(parseInt(id)));

      // Load dark mode preference
      const darkMode = localStorage.getItem("darkMode") === "true";
      setIsDarkMode(darkMode);
      if (darkMode) {
        document.documentElement.classList.add("dark");
      }
    }
  }, [id]);

  useEffect(() => {
    Prism.highlightAll();
  }, [question, selectedLanguage, showFullCode]);

  const handleCopyCode = async () => {
    if (question?.code) {
      try {
        await navigator.clipboard.writeText(question.code);
        setIsCopied(true);
        setNotificationMessage("Code copied to clipboard!");
        setTimeout(() => setIsCopied(false), 2000);
      } catch (error) {
        console.error("Failed to copy code:", error);
      }
    }
  };

  const handleBookmark = () => {
    if (typeof window === "undefined" || !id) return;

    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    const updatedBookmarks = isBookmarked
      ? bookmarks.filter((bookmarkId: number) => bookmarkId !== parseInt(id))
      : [...bookmarks, parseInt(id)];
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    setIsBookmarked(!isBookmarked);
    setNotificationMessage(isBookmarked ? "Removed from bookmarks!" : "Added to bookmarks!");
  };

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      try {
        await navigator.share({
          title: question?.Title || "Question",
          url: window.location.href,
        });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setShowShareModal(true);
      }
    }
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        text: newComment,
        author: "User", // Replace with actual user data
        timestamp: new Date().toISOString(),
        likes: 0,
        isEdited: false,
      };
      setComments([...comments, comment]);
      setNewComment("");
      setNotificationMessage("Comment added successfully!");
    }
  };

  const handleEditComment = (commentId: number) => {
    const comment = comments.find((c) => c.id === commentId);
    if (comment) {
      setIsEditing(commentId);
      setEditText(comment.text);
    }
  };

  const handleSaveEdit = (commentId: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, text: editText, isEdited: true }
          : comment
      )
    );
    setIsEditing(null);
    setEditText("");
    setNotificationMessage("Comment updated successfully!");
  };

  const handleDeleteComment = (commentId: number) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
    setNotificationMessage("Comment deleted successfully!");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", (!isDarkMode).toString());
  };

  if (!question) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <p className="text-3xl font-semibold text-red-600 dark:text-red-400">Question not found.</p>
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
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Notification */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-4 right-4 z-50"
            >
              <Alert className="bg-green-500 text-white">
                <AlertDescription>{notificationMessage}</AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Question Title and Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {question.Title}
          </motion.h1>

          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleBookmark}
              className={`${isBookmarked ? 'text-yellow-500' : ''}`}
            >
              <BookmarkPlus className="w-4 h-4 mr-2" />
              {isBookmarked ? 'Bookmarked' : 'Bookmark'}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </Button>
          </div>
        </div>

        {/* Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-4 border-b dark:border-gray-700">
            <div className="flex justify-between items-center">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1"
              >
                <option value="typescript">TypeScript</option>
                <option value="javascript">JavaScript</option>
                <option value="jsx">JSX</option>
                <option value="tsx">TSX</option>
              </select>

              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyCode}
                className="ml-2"
              >
                {isCopied ? (
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 mr-2" />
                )}
                {isCopied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>

          <div className="relative">
            <pre className={`line-numbers ${showFullCode ? '' : 'max-h-96 overflow-hidden'}`}>
              <code className={`language-${selectedLanguage}`}>
                {question.code}
              </code>
            </pre>

            {!showFullCode && (
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-800 to-transparent" />
            )}
          </div>

          <div className="p-4 border-t dark:border-gray-700">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFullCode(!showFullCode)}
              className="w-full"
            >
              {showFullCode ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  Show More
                </>
              )}
            </Button>
          </div>
        </motion.div>

        {/* Comments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Comments</h2>

          <div className="space-y-4 mb-6">
            <Textarea
              ref={commentInputRef}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            />
            <Button
              onClick={handleAddComment}
              disabled={!newComment.trim()}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Add Comment
            </Button>
          </div>

          <AnimatePresence>
            {comments.map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="border-b dark:border-gray-700 py-4 last:border-0"
              >
                {isEditing === comment.id ? (
                  <div className="space-y-2">
                    <Textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    />
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        onClick={() => handleSaveEdit(comment.id)}
                      >
                        Save
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setIsEditing(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold dark:text-white">{comment.author}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(comment.timestamp).toLocaleDateString()}
                          {comment.isEdited && " (edited)"}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditComment(comment.id)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteComment(comment.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-800 dark:text-white">{comment.text}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

</motion.div>
  );
}
