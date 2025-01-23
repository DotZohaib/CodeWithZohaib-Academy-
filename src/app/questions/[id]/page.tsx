"use client";

import { array as database } from "../../../components/Database";
import { motion, AnimatePresence } from "framer-motion";
import Prism from "prismjs";
import {
  useEffect,
  useState,
  useRef,
  ChangeEvent
} from "react";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import {
  CheckCircle,
  Copy,
  BookmarkPlus,
  Share2,
  Edit,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Textarea } from "@/components/ui/textarea";

interface Question {
  id: number;
  Title: string;
  code: string;
}

interface Comment {
  id: number;
  text: string;
  author: string;
  timestamp: string;
  likes: number;
  isEdited: boolean;
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function QuestionPage({ params }: PageProps) {
  const [id] = useState<string>(params.id);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [showFullCode, setShowFullCode] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  const question: Question | null = database.find(
    (item: any) => item.id === (id ? parseInt(id, 10) : null)
  ) ?? null;

  useEffect(() => {
    const handleBookmarks = () => {
      if (!id || typeof window === "undefined") return;
      try {
        const bookmarks: number[] = JSON.parse(localStorage.getItem("bookmarks") || "[]");
        setIsBookmarked(bookmarks.includes(parseInt(id, 10)));
        Prism.highlightAll();
      } catch (error) {
        console.error("Bookmark error:", error);
      }
    };

    handleBookmarks();
    window.addEventListener("storage", handleBookmarks);
    return () => window.removeEventListener("storage", handleBookmarks);
  }, [id]);

  const showNotificationWithTimeout = (message: string): void => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleCopyCode = async (): Promise<void> => {
    if (!question?.code) return;
    try {
      await navigator.clipboard.writeText(question.code);
      setIsCopied(true);
      showNotificationWithTimeout("Code copied!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      showNotificationWithTimeout("Copy failed!");
    }
  };

  const handleBookmark = (): void => {
    if (typeof window === "undefined" || !id) return;
    try {
      const bookmarks: number[] = JSON.parse(
        localStorage.getItem("bookmarks") || "[]"
      );
      const parsedId = parseInt(id, 10);
      const updatedBookmarks = isBookmarked
        ? bookmarks.filter((bookmarkId) => bookmarkId !== parsedId)
        : [...bookmarks, parsedId];

      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
      setIsBookmarked(!isBookmarked);
      showNotificationWithTimeout(
        isBookmarked ? "Removed from bookmarks" : "Added to bookmarks"
      );
    } catch (error) {
      showNotificationWithTimeout("Bookmark error");
    }
  };

  const handleAddComment = (): void => {
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
    showNotificationWithTimeout("Comment added!");
  };

  const handleEditComment = (commentId: number): void => {
    const comment = comments.find((c) => c.id === commentId);
    if (comment) {
      setIsEditing(commentId);
      setEditText(comment.text);
    }
  };

  const handleDeleteComment = (commentId: number): void => {
    setComments((prev) => prev.filter((comment) => comment.id !== commentId));
    showNotificationWithTimeout("Comment deleted!");
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
              className={`${isBookmarked ? "text-yellow-500" : ""}`}
            >
              {isBookmarked ? (
                <CheckCircle className="mr-2 h-4 w-4" />
              ) : (
                <BookmarkPlus className="mr-2 h-4 w-4" />
              )}
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </Button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Code
          </h2>
          <div className="relative">
            <pre
              className={`language-typescript ${
                showFullCode ? "overflow-y-auto" : "max-h-64 overflow-y-hidden"
              } line-numbers`}
            >
              <code>{question.code}</code>
            </pre>
            {!showFullCode && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-800">
                <button
                  onClick={() => setShowFullCode(true)}
                  className="w-full py-2 text-sm font-medium text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  Show More
                </button>
              </div>
            )}
          </div>
          <Button variant="outline" size="sm" onClick={handleCopyCode}>
            {isCopied ? (
              <CheckCircle className="mr-2 h-4 w-4" />
            ) : (
              <Copy className="mr-2 h-4 w-4" />
            )}
            {isCopied ? "Copied" : "Copy Code"}
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Comments
          </h2>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-2"
              >
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {comment.text}
                </p>
                <div className="flex items-center justify-between">
                  <small className="text-xs text-gray-500 dark:text-gray-400">
                    {comment.author} &bull;{" "}
                    {new Date(comment.timestamp).toLocaleString()}
                  </small>
                  <div className="space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditComment(comment.id)}
                      className="text-gray-500 dark:text-gray-400"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteComment(comment.id)}
                      className="text-gray-500 dark:text-gray-400"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Textarea
              ref={commentInputRef}
              value={newComment}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNewComment(e.target.value)}
              placeholder="Add your comment..."
            />
            <Button onClick={handleAddComment} className="mt-2">
              Post Comment
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
