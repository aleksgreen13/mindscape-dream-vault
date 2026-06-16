import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { KeyRound, X } from "lucide-react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputSubmit,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { toast } from "sonner";

const transport = new DefaultChatTransport({ api: "/api/chat" });

const INITIAL: UIMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    parts: [
      {
        type: "text",
        text:
          "Welcome, dreamer. I am the **Vault Keeper**. \n\nAsk me for a riddle, a logic puzzle, or bring me one you're stuck on — I'll guide you with hints, never spoilers (unless you insist).",
      },
    ],
  },
];

export function PuzzleChat() {
  const [open, setOpen] = useState(false);
  const { messages, sendMessage, status } = useChat({
    id: "puzzle-chat",
    messages: INITIAL,
    transport,
    onError: (err) => toast.error(err.message || "The vault is quiet. Try again."),
  });

  const isLoading = status === "submitted" || status === "streaming";

  const handleSubmit = (message: PromptInputMessage) => {
    const text = message.text?.trim();
    if (!text || isLoading) return;
    void sendMessage({ text });
  };

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close puzzle chat" : "Open puzzle chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-105 hover:shadow-primary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {open ? <X className="h-6 w-6" /> : <KeyRound className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[min(640px,80vh)] w-[min(420px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4">
          <header className="flex items-center gap-3 border-b border-border/60 bg-gradient-to-br from-primary/10 to-transparent px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
              <KeyRound className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-tight">Vault Keeper</p>
              <p className="text-xs text-muted-foreground">Puzzles, riddles & hints</p>
            </div>
          </header>

          <Conversation className="flex-1">
            <ConversationContent className="space-y-4">
              {messages.map((m) => {
                const text = m.parts
                  .map((p) => (p.type === "text" ? p.text : ""))
                  .join("");
                return (
                  <Message key={m.id} from={m.role}>
                    <MessageContent>
                      {m.role === "assistant" ? (
                        <MessageResponse>{text}</MessageResponse>
                      ) : (
                        <span className="whitespace-pre-wrap">{text}</span>
                      )}
                    </MessageContent>
                  </Message>
                );
              })}
              {status === "submitted" && (
                <Message from="assistant">
                  <MessageContent>
                    <Shimmer>Consulting the vault…</Shimmer>
                  </MessageContent>
                </Message>
              )}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          <div className="border-t border-border/60 p-3">
            <PromptInput onSubmit={handleSubmit}>
              <PromptInputTextarea
                placeholder="Ask for a riddle or paste a puzzle…"
                autoFocus
              />
              <PromptInputFooter className="justify-end">
                <PromptInputSubmit status={status} disabled={isLoading} />
              </PromptInputFooter>
            </PromptInput>
          </div>
        </div>
      )}
    </>
  );
}
