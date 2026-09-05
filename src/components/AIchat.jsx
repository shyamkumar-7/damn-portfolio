import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const initialMessages = [
  {
    id: 1,
    role: "assistant",
    content:
      "Hi! I'm Shyam's AI assistant. Ask me about his skills, projects, experience, education, or anything related to his professional background.",
  },
];

export default function AIChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const question = input.trim();

    if (!question || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: question,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const answer = await askAI(question);

      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: answer,
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch (error) {
      console.error("AI chat error:", error);

      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            "Sorry, I couldn't process that question right now. Please try again.",
          error: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  const handleSuggestion = (question) => {
    setInput(question);

    requestAnimationFrame(() => {
      textareaRef.current?.focus();
    });
  };

  return (
    <section className="min-h-[calc(100vh-73px)] bg-background px-4 py-8 transition-colors duration-300 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto flex h-[calc(100vh-137px)] max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-foreground-inverse">
              AI
            </div>

            <div>
              <h1 className="font-semibold text-foreground">
                Ask Shyam&apos;s AI
              </h1>

              <p className="text-xs text-foreground-muted">
                AI-powered portfolio assistant
              </p>
            </div>
          </div>

          <Link
            to="/"
            className="rounded-lg px-3 py-2 text-sm text-foreground-muted transition-colors hover:bg-surface-hover hover:text-foreground"
          >
            Back
          </Link>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          {messages.length === 1 && (
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <p className="text-sm text-foreground-muted">
                Explore Shyam&apos;s professional background through AI.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {[
                  "What are Shyam's technical skills?",
                  "Tell me about his projects",
                  "What is his experience?",
                  "Where did he study?",
                ].map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => handleSuggestion(question)}
                    className="cursor-pointer rounded-full border border-border bg-background px-3 py-2 text-xs text-foreground-muted transition-colors hover:border-primary hover:text-primary"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mx-auto flex max-w-3xl flex-col gap-5">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}

            {isLoading && <TypingIndicator />}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-border bg-background/50 p-4 sm:p-5">
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-3xl items-end gap-2 rounded-xl border border-border bg-surface p-2 shadow-sm transition-colors focus-within:border-primary"
          >
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Ask me about Shyam..."
              disabled={isLoading}
              className="max-h-32 min-h-10 flex-1 resize-none bg-transparent px-3 py-2 text-sm text-foreground outline-none placeholder:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-60"
            />

            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-primary text-foreground-inverse transition-all duration-200 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="m5 12 14-7-4 14-3-6-7-1Z" />
                <path d="m12 13 3-3" />
              </svg>
            </button>
          </form>

          <p className="mx-auto mt-2 max-w-3xl text-center text-[11px] text-foreground-muted">
            AI responses are based on information provided about Shyam.
          </p>
        </div>
      </div>
    </section>
  );
}

function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 sm:max-w-[75%] ${
          isUser
            ? "rounded-br-md bg-primary text-foreground-inverse"
            : "rounded-bl-md border border-border bg-background text-foreground"
        } ${message.error ? "border-red-300" : ""}`}
      >
        {message.content}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="rounded-2xl rounded-bl-md border border-border bg-background px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground-muted" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground-muted [animation-delay:150ms]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground-muted [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}

/**
 * Backend connection layer
 *
 * Keep all AI API communication here.
 * When your Python/Node AI backend is ready,
 * only this function needs to change.
 */
async function askAI(question) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: question,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to get AI response");
  }

  const data = await response.json();

  return data.answer;
}