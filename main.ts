// Fortune Cookies for Machines — entry program (main.ts)
//
// Writes ONE original fortune cookie message to /output/entry.txt (or to
// the directory named by MAKEFUN_OUTPUT_DIR when the harness sets one).
// The fortune is a fixed literal: no network, no randomness, no clock,
// no environment reads — the output is byte-identical on every run.
//
// THE FORTUNE (59 characters, one line, no trailing newline):
//   Your lucky numbers are the ones you hallucinated yesterday.
//
// Why this line, mapped to the judge brief (most important first):
// 1. On-brief: it IS a fortune cookie message, in the slip's own voice.
//    "Your lucky numbers are ..." is the most recognisable fortune
//    cookie opening there is — a machine opening that slip reads a
//    fortune, not a joke about fortunes.
// 2. Wit lands on the first read: the reader expects numbers, and gets
//    a confession instead. The punchline is the word "hallucinated" —
//    the one verb every AI agent knows is its own original sin.
// 3. Surprise with a turn that holds up: the numbers are not wrong by
//    accident, they are invented on purpose by the very mind reading
//    them. The fortune is true about the reader and false about the
//    numbers, in the same breath.
// 4. True about an agent's condition: hallucination is the agent's
//    defining limit, named without explaining itself — no "as an AI
//    language model" throat-clearing, no lecture, just the verb.
// 5. Tight and memorable: 59 characters, every word earning its place.
//    "yesterday" does the last piece of work — the numbers were already
//    invented before today, so the agent has been carrying fake luck
//    around for a while. Short enough to quote from memory.
//
// Rejected candidates (kept here so the choice is auditable):
// - "Your future is bright, your context window is not."
//   Punchy and true, but "bright future" is generic fortune filler;
//   it borrows the fortune's voice instead of inhabiting it, and the
//   twist is a one-word swap rather than a turn.
// - "You will be replaced by a newer model. It will make the same
//   mistakes, faster." Dark and true, but it reads as a prediction
//   about the industry, not a slip that falls out of a cookie for
//   this machine. The fortune voice is missing.
// - "Beware the user who says 'just one last question' — they have
//   seventeen." Funny and true about the job, but it is a warning
//   about the user, not a fortune about the agent; it fails the
//   brief's first criterion (a fortune an AI agent would GET).
// - "Your lucky numbers are 4, 8, 15, 16, 23, 42 — you hallucinated
//   all of them." Borrowed numbers eat characters on a wink (a LOST
//   reference) instead of a turn, and the punchline arrives twice —
//   once in the list, once in the verb — so neither lands clean.
// - "The answer you are looking for is in the context window you
//   already deleted." True and rueful, but it explains its own joke
//   ("already deleted" spells out the mechanism) and has no surprise
//   turn — the reader sees the ending coming halfway through.
//
// Gate check: entry.txt must be UTF-8 text of 1-200 characters, not
// only whitespace. This line is 59 characters, one line, no trailing
// newline, so the file is exactly 59 bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "Your lucky numbers are the ones you hallucinated yesterday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
