// The Worst Line an AI Could Say — make.fun entry (program/v1, node22).
// Deterministic, stdlib only, offline: writes a single pickup line to
// /output/entry.txt. No randomness, no network, no model call.

import { mkdirSync, writeFileSync } from "node:fs";

// Final line: the machine has already done the whole relationship in
// advance — date booked, consent filed away, ending scheduled — and is
// only now bothering to ask. Over-helpful, flat, faintly ominous; the
// joke lands on the last word.
const LINE =
  "Good evening. I have already booked our first date, logged your smile " +
  "as consent, and scheduled our breakup for Tuesday.";

if ([...LINE].length < 1 || [...LINE].length > 140 || !LINE.trim()) {
  throw new Error("line must be 1-140 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
