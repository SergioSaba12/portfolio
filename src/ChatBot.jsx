// ChatBot.jsx - Apple-Style
import React, { useState, useRef, useEffect, memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { findAnswer, welcomeMessage, quickSuggestions } from "./chatKnowledge";

const ChatBot = memo(function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, type: "bot", text: welcomeMessage, timestamp: Date.now() }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSendMessage = (text) => {
        const userMessage = text || inputValue.trim();
        if (!userMessage) return;

        const newUserMessage = {
            id: Date.now(),
            type: "user",
            text: userMessage,
            timestamp: Date.now()
        };
        setMessages(prev => [...prev, newUserMessage]);
        setInputValue("");

        setIsTyping(true);

        setTimeout(() => {
            const response = findAnswer(userMessage);
            const botMessage = {
                id: Date.now() + 1,
                type: "bot",
                text: response.answer,
                timestamp: Date.now()
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 600 + Math.random() * 400);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleClearChat = () => {
        setMessages([
            { id: Date.now(), type: "bot", text: welcomeMessage, timestamp: Date.now() }
        ]);
    };

    return (
        <>
            {/* Floating Chat Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle chat"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.svg
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            key="chat"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-7 w-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                            />
                        </motion.svg>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[400px] max-w-[400px]"
                    >
                        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-200">
                            {/* Header */}
                            <div className="flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white text-sm">
                                        SS
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold">Sergio's Assistant</div>
                                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                            <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                                            <span>Online</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={handleClearChat}
                                    className="text-xs font-medium text-blue-600 hover:text-blue-700"
                                    aria-label="Clear chat"
                                >
                                    Clear
                                </button>
                            </div>

                            {/* Messages */}
                            <div className="h-[400px] overflow-y-auto bg-gray-50 p-4 space-y-3">
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${msg.type === "user"
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-white border border-gray-200"
                                                }`}
                                            style={{ whiteSpace: "pre-line" }}
                                        >
                                            {msg.text}
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Typing Indicator */}
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex justify-start"
                                    >
                                        <div className="rounded-2xl bg-white border border-gray-200 px-4 py-3">
                                            <div className="flex items-center gap-1.5">
                                                <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                                                <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                                                <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Quick Suggestions */}
                            {messages.length === 1 && !isTyping && (
                                <div className="border-t border-gray-200 bg-white px-4 py-3">
                                    <div className="text-xs font-medium text-gray-500 mb-2">Quick questions:</div>
                                    <div className="flex flex-wrap gap-2">
                                        {quickSuggestions.map((suggestion, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleSendMessage(suggestion)}
                                                className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-200 transition"
                                            >
                                                {suggestion}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Input */}
                            <div className="border-t border-gray-200 bg-white p-4">
                                <div className="flex items-end gap-2">
                                    <textarea
                                        ref={inputRef}
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Ask me anything..."
                                        rows={1}
                                        className="flex-1 resize-none rounded-2xl border border-gray-300 bg-white px-4 py-2.5 text-sm placeholder-gray-400 focus:border-blue-600 focus:outline-none transition"
                                        style={{ maxHeight: "100px" }}
                                    />
                                    <button
                                        onClick={() => handleSendMessage()}
                                        disabled={!inputValue.trim()}
                                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
                                        aria-label="Send message"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.5}
                                            stroke="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
});

export default ChatBot;
