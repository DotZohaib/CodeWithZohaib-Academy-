'use client';

import { array as database } from "../../../components/Database";
import { motion, AnimatePresence } from "framer-motion";
import Prism from "prismjs";
import { useEffect, useState, useRef, SetStateAction, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";
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
import { Textarea } from "@/components/ui/textarea";

type PageProps = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

interface Comment {
  id: number;
  text: string;
  author: string;
  timestamp: string;
  likes: number;
  isEdited: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function QuestionPage({ params, searchParams }: PageProps) {
  const [id] = useState<string>(params.id);
  const [isCopied, setIsCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showFullCode, setShowFullCode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("typescript");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  const question = database.find((item: { id: number | null; }) => item.id === (id ? parseInt(id, 10) : null)) ?? null;

  useEffect(() => {
    const handleDarkMode = () => {
      if (typeof window !== 'undefined') {
        const darkMode = localStorage.getItem("darkMode") === "true";
        setIsDarkMode(darkMode);
        document.documentElement.classList.toggle("dark", darkMode);
      }
    };

    handleDarkMode();
    window.addEventListener('storage', handleDarkMode);
    return () => window.removeEventListener('storage', handleDarkMode);
  }, []);

  useEffect(() => {
    if (!id || typeof window === 'undefined') return;

    try {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
      setIsBookmarked(bookmarks.includes(parseInt(id)));
    } catch (error) {
      console.error("Error loading bookmarks:", error);
      setIsBookmarked(false);
    }
  }, [id]);

  useEffect(() => {
    if (typeof window !== 'undefined' && question?.code) {
      const timeout = setTimeout(() => {
        Prism.highlightAll();
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [question, selectedLanguage, showFullCode]);

  const showNotificationWithTimeout = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    const timeout = setTimeout(() => setShowNotification(false), 3000);
    return () => clearTimeout(timeout);
  };

  const handleCopyCode = async () => {
    if (!question?.code) return;

    try {
      await navigator.clipboard.writeText(question.code);
      setIsCopied(true);
      showNotificationWithTimeout("Code copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
      showNotificationWithTimeout("Failed to copy code!");
    }
  };

  const handleBookmark = () => {
    if (typeof window === "undefined" || !id) return;

    try {
      const bookmarks: number[] = JSON.parse(localStorage.getItem("bookmarks") || "[]");
      const parsedId = parseInt(id, 10);

      const updatedBookmarks = isBookmarked
        ? bookmarks.filter((bookmarkId) => bookmarkId !== parsedId)
        : [...bookmarks, parsedId];

      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
      setIsBookmarked(!isBookmarked);
      showNotificationWithTimeout(
        isBookmarked ? "Removed from bookmarks!" : "Added to bookmarks!"
      );
    } catch (error) {
      console.error("Failed to update bookmarks:", error);
      showNotificationWithTimeout("Failed to update bookmarks!");
    }
  };

  const handleShare = async () => {
    if (typeof window === "undefined") return;

    try {
      if (navigator.share) {
        await navigator.share({
          title: question?.Title || "Question",
          url: window.location.href,
        });
        showNotificationWithTimeout("Shared successfully!");
      } else {
        await navigator.clipboard.writeText(window.location.href);
        showNotificationWithTimeout("URL copied to clipboard!");
      }
    } catch (error) {
      console.error("Failed to share:", error);
      showNotificationWithTimeout("Failed to share!");
    }
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      text: newComment.trim(),
      author: "User",
      timestamp: new Date().toISOString(),
      likes: 0,
      isEdited: false,
    };

    setComments((prev) => [...prev, comment]);
    setNewComment("");
    showNotificationWithTimeout("Comment added successfully!");
  };

  const handleEditComment = (commentId: number) => {
    const comment = comments.find((c) => c.id === commentId);
    if (comment) {
      setIsEditing(commentId);
      setEditText(comment.text);
    }
  };


  const handleDeleteComment = (commentId: number) => {
    setComments((prev) => prev.filter((comment) => comment.id !== commentId));
    showNotificationWithTimeout("Comment deleted successfully!");
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle("dark", newDarkMode);
      localStorage.setItem("darkMode", newDarkMode.toString());
    }
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
          <p className="text-3xl font-semibold text-red-600 dark:text-red-400">
            Question not found
          </p>
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
              onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNewComment(e.target.value)}
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
                      onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEditText(e.target.value)}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    />
                    <div className="flex space-x-2">
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
                    <p className="mt-2 text-gray-800 dark:text-gray-200">{comment.text}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {comments.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400 text-center py-4">
              No comments yet. Be the first to comment!
            </p>
          )}
        </motion.div>

        {/* Question Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Question Details</h2>
          <div className="prose dark:prose-invert max-w-none">
            <div className="space-y-4">
              {question.description && (
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">Description</h3>
                  <p className="text-gray-800 dark:text-gray-200">{question.description}</p>
                </div>
              )}

              {question.tags && question.tags.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {question.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold dark:text-white">Created</h3>
                <p className="text-gray-800 dark:text-gray-200">
                  {new Date(question.createdAt).toLocaleDateString()}
                </p>
              </div>

              {question.lastUpdated && (
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">Last Updated</h3>
                  <p className="text-gray-800 dark:text-gray-200">
                    {new Date(question.lastUpdated).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Related Questions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Related Questions</h2>
          {database
            .filter((q: { id: number; tags: string[]; Title: string; }) =>
              q.id !== parseInt(id) &&
              (q.tags?.some((tag: string) => question.tags?.includes(tag)) ||
               q.Title.toLowerCase().includes(question.Title.toLowerCase()))
            )
            .slice(0, 5)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((relatedQuestion: { id: Key | null | undefined; Title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | Iterable<ReactNode> | null | undefined; tags: string[]; }) => (
              <motion.a
                key={relatedQuestion.id}
                href={`/questions/${relatedQuestion.id}`}
                className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {relatedQuestion.Title}
                </h3>
                {relatedQuestion.tags && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {relatedQuestion.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.a>
            ))}

          {database.filter((q: { id: number; tags: string[]; Title: string; }) =>
            q.id !== parseInt(id) &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (q.tags?.some((tag: any) => question.tags?.includes(tag)) ||
             q.Title.toLowerCase().includes(question.Title.toLowerCase()))
          ).length === 0 && (
            <p className="text-gray-500 dark:text-gray-400 text-center py-4">
              No related questions found.
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
