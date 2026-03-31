'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { MessageSquare, X, Send, Sparkles, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const { messages, sendMessage, status, setMessages } = useChat();

    const isLoading = status === 'submitted' || status === 'streaming';

    // Set initial message ONCE
    useEffect(() => {
        setMessages([
            {
                id: 'init',
                role: 'assistant',
                parts: [{ type: 'text', text: 'Hello! I am the Oyakganya virtual assistant. How can I help you today?' }],
            },
        ]);
    }, [setMessages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSend = () => {
        if (!input.trim()) return;
        sendMessage({ text: input });
        setInput('');
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
            {isOpen && (
                <div className="mb-4 w-80 md:w-96 bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col border border-gray-200">

                    {/* Header */}
                    <div className="bg-primary p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-3">
                            <Sparkles size={18} />
                            <div>
                                <span className="font-serif font-bold block leading-none">Oyakganya AI</span>
                                <span className="text-[10px] text-gray-300 uppercase tracking-wider">
                                    Consultant Assistant
                                </span>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)}>
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 h-96 overflow-y-auto p-4 bg-slate-50 space-y-6">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex w-full ${message.role === 'user' ? 'justify-end' : 'justify-start'
                                    }`}
                            >
                                {message.role !== 'user' && (
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-accent mr-2">
                                        <Sparkles size={14} />
                                    </div>
                                )}

                                <div
                                    className={`max-w-[80%] p-3 text-sm ${message.role === 'user'
                                            ? 'bg-primary text-white rounded-2xl rounded-tr-sm'
                                            : 'bg-white border border-gray-200 text-gray-700 rounded-2xl rounded-tl-sm'
                                        }`}
                                >
                                    {message.parts.map((part, i) => {
                                        if (part.type === 'text') {
                                            return <div key={i}><ReactMarkdown>{part.text}</ReactMarkdown></div>;
                                        }
                                        return null;
                                    })}
                                </div>

                                {message.role === 'user' && (
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-2">
                                        <User size={16} />
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Typing indicator */}
                        {isLoading && (
                            <div className="flex">
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2">
                                    <Sparkles size={14} />
                                </div>
                                <div className="bg-white border px-4 py-2 rounded-xl text-xs text-gray-400">
                                    Thinking...
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 bg-white border-t flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Type your question..."
                            className="flex-1 bg-gray-50 border rounded-full px-4 py-2 text-sm"
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading || !input.trim()}
                            className="bg-primary text-white p-2 rounded-full"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}

            {/* Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-accent text-primary p-4 rounded-full shadow-xl"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>
        </div>
    );
}

export default ChatWidget;