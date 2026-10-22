import test from "node:test";
import assert from "node:assert/strict";

import { DefaultExecutor } from "../../open-sse/executors/default.ts";
import {
  NON_ANTHROPIC_THINKING_PLACEHOLDER,
  requiresReasoningContentPresence,
} from "../../open-sse/utils/reasoningPlaceholder.ts";

// Issue #17385: replaying a DeepSeek thinking-mode conversation whose prior assistant turn
// carries no `reasoning_content` (client omitted it, or the target changed mid-conversation) is
// rejected upstream with
//   400 The reasoning_content in the thinking mode must be passed back to the API
// The native `deepseek` provider must opt in to the same registry echo flag `bai` uses
// (#13599), which injects the plain " " placeholder (never the NON_ANTHROPIC sentinel — see
// #9573/#9610, where DeepSeek echoed the sentinel back as its own reasoning and went silent).

function priorTurnBody(model: string) {
  return {
    model,
    stream: false,
    messages: [
      { role: "user", content: "What is 2+2?" },
      { role: "assistant", content: "4" },
      { role: "user", content: "Now multiply that by 10." },
    ],
  };
}

function transform(model: string, body: unknown) {
  const executor = new DefaultExecutor("deepseek");
  return executor.transformRequest(model, body, false, { apiKey: "sk-deepseek-test" }) as {
    messages: Array<Record<string, unknown>>;
  };
}

test("DefaultExecutor injects a plain-space reasoning_content for native deepseek follow-up turns (#17385)", () => {
  const transformed = transform("deepseek-v4-flash", priorTurnBody("deepseek-v4-flash"));
  const assistantTurn = transformed.messages.find((m) => m.role === "assistant");
  assert.ok(assistantTurn, "expected an assistant message in the transformed body");
  assert.equal(
    assistantTurn!.reasoning_content,
    " ",
    "native deepseek must echo a non-empty placeholder reasoning_content (issue #17385)"
  );
  assert.notEqual(assistantTurn!.reasoning_content, NON_ANTHROPIC_THINKING_PLACEHOLDER);
});

test("DefaultExecutor keeps the client's real deepseek reasoning_content untouched", () => {
  const body = priorTurnBody("deepseek-v4-flash");
  body.messages[1] = {
    role: "assistant",
    content: "4",
    reasoning_content: "2 plus 2 is 4.",
  } as (typeof body.messages)[number];
  const transformed = transform("deepseek-v4-flash", body);
  const assistantTurn = transformed.messages.find((m) => m.role === "assistant");
  assert.equal(assistantTurn!.reasoning_content, "2 plus 2 is 4.");
});

test("deepseek is NOT a sentinel-promoting upstream (guards #9573/#9610)", () => {
  assert.equal(requiresReasoningContentPresence("deepseek", "deepseek-v4-flash"), false);
  assert.equal(requiresReasoningContentPresence("openrouter", "deepseek/deepseek-v4-flash"), false);
});
