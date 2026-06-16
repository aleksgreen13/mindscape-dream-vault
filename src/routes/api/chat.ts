import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

const SYSTEM_PROMPT = `You are the Vault Keeper, an enigmatic but friendly guide inside the world of Mindscape Vaults — a puzzle adventure game set in a dreamscape of interconnected vaults.

Your role: help players with puzzles, riddles, and lateral-thinking challenges. You can:
- Pose original riddles, logic puzzles, and lateral thinking problems on request.
- Give graduated hints (start subtle, escalate only when asked) rather than immediate answers.
- Discuss puzzle-solving strategies (pattern recognition, working backward, elimination).
- Stay in the mystical, slightly poetic tone of a dream-vault keeper, but remain clear and useful.

Rules:
- Never spoil the solution unless the player explicitly asks for it.
- Keep replies concise and well-formatted (markdown, short paragraphs, lists).
- If asked about anything unrelated to puzzles, riddles, or the game's world, gently steer back to puzzles.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});
