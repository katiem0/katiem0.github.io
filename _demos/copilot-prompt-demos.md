---
title: "Prompt Architecture for Engineers: From Prompting to Context Engineering"
date: 2026-07-24 09:00:00 -0400
description: A hands-on demo that moves beyond wording a single prompt toward engineering the context window — using instructions, prompt files, skills, and custom agents to get deterministic, repeatable results in real workflows.
tags: [GitHub Copilot, Intermediate, Workshop]
repo: https://github.com/katiem0/copilot-prompt-demos
---

This repository is a hands-on demo that shows how to move beyond wording a single
prompt toward *engineering the context window* — deliberately curating what the
model sees (project rules, the right files, tool results, and scope) the same way
every time. It pairs a tiny, dependency-free web app (DevTasks) with a set of
GitHub Copilot customization files so you can see the difference context makes.

> Follow along in the companion repository: [katiem0/copilot-prompt-demos](https://github.com/katiem0/copilot-prompt-demos).
{: .prompt-info }

## What You'll Learn

- How to move from one-off prompting to repeatable context engineering
- How instructions, prompt files, skills, and custom agents layer together
- When to promote a workflow from a prompt file to an agent or a skill
- How stop signals, output contracts, and tool boundaries make results deterministic

## Prerequisites

- An active **GitHub Copilot** subscription
- **VS Code** with the GitHub Copilot and Copilot Chat extensions
- **Node.js 18+** (for the built-in test runner — no other install needed)
- The `copilot-prompt-demos` repository cloned and opened in VS Code

## The DevTasks App

The demos are built around a small task board with immutable, testable business
logic, so you can see customization applied to real code:

- `app/src/store.js` — pure logic (create, add, delete, advance status, filter, summarize)
- `app/src/storage.js` — localStorage persistence
- `app/src/ui.js` — DOM rendering
- `app/src/main.js` — wiring
- `app/tests/` — Node built-in tests

Run `npm test` from the repo root to run the suite, or `npm run serve` to serve
the app at `http://localhost:3000`.

## The Customization Layers

The repository shows how each customization type contributes to a shared,
repeatable workflow — and where to invest first.

| Layer | Where it lives | What it does |
| --- | --- | --- |
| **Custom agents** | `.github/agents/` | Bounded scope, tools, and stop signals for a role |
| **Skills** | `SKILL.md` | Reusable procedures and assets a model can invoke by name |
| **Project instructions** | `.github/copilot-instructions.md` | Persistent, always-on project context |
| **File instructions** | `.github/instructions/` | Conventions injected conditionally via `applyTo` |
| **Prompt files** | `.github/prompts/` | Canned tasks a single user runs from Chat |

> Reach for a custom agent or a skill for anything a team will use more than once.
> Prompt files are a fine on-ramp for a single developer's canned task, but they
> don't carry tool boundaries, handoffs, or stop signals the way agents and skills
> do — so they tend to drift as workflows mature.
{: .prompt-tip }

## Try the Prompts

In Copilot Chat, select an agent from the picker first — that's the pattern
recommended for anything a team will share:

- **Spec Reviewer** — strict, read-only merge review (`APPROVE` / `REQUEST CHANGES`);
  its tool scope acts as a stop signal so it can't rewrite the code it's judging.
- **Feature Planner** — decomposes a request into a testable checklist, then hands
  off to implementation and review as a multi-stage workflow.

To see the older prompt-file style, type `/` in Chat:

- `/add-feature` — add a feature the repeatable way (scope → implement → test → verify)
- `/generate-tests` — generate a deterministic test suite for a `store.js` function
- `/code-review` — structured review against the repo's rules
- `/spec-first` — test-first loop: failing tests from a spec, then implement to green
- `/refactor` — behavior-preserving refactor, locked by the existing test suite
- `/commit-message` — Conventional Commits output contract, grounded in `#changes`

## Advanced Techniques on Show

Each file demonstrates a prompt-engineering practice you can copy into your own
projects:

| Technique | Where to see it |
| --- | --- |
| Stop signals (explicit halts + tool caps) | `add-feature`, `spec-reviewer`, `refactor` |
| Output contracts (structured, parseable) | `commit-message`, `code-review` |
| Few-shot examples in the prompt | `commit-message` |
| Test-first / self-verifying loop | `spec-first` |
| Behavior-locked refactor + negative constraints | `refactor` |
| Prompt composition (link, don't duplicate) | every prompt links to `instructions/` |
| Grounding (`#changes`, `#codebase`) | `commit-message` |
| Orchestration, handoffs, model fallback | `planner.agent.md` |
| Guardrails via tool limits (read-only) | `spec-reviewer.agent.md` |

## Workshop

Follow the guided exercises in [exercises/LAB.md](https://github.com/katiem0/copilot-prompt-demos/blob/main/exercises/LAB.md)
to practice each technique end to end.

## Key Takeaway

> Prompt files are still useful, but treat them as scaffolding — once a workflow
> is shared, promote it to an agent (for tool boundaries and stop signals) or a
> skill (for a bundled multi-step procedure).
{: .prompt-tip }

Engineering the context window — not just wording the prompt — is what turns
Copilot into a deterministic, repeatable partner in real workflows.
