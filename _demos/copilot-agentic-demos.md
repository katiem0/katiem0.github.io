---
title: "Copilot Beyond Autocomplete: Agentic Workflows"
date: 2026-07-09 09:00:00 -0400
description: A hands-on demo of GitHub Copilot's Agent mode working end-to-end on a real TypeScript codebase — planning a feature, editing across files, generating and running tests, fixing bugs, and refactoring behind a test net.
tags: [GitHub Copilot, Workshop, Beginner]
repo: https://github.com/katiem0/copilot-agentic-demos
---

This repository shows what GitHub Copilot looks like *beyond autocomplete* —
running in Agent mode to plan, code, test, and refactor its way through a real
change. It uses a small, deliberately imperfect TypeScript order-pricing library
so you can watch the agent do the multi-step work rather than just completing the
current line.

> Follow along in the companion repository: [katiem0/copilot-agentic-demos](https://github.com/katiem0/copilot-agentic-demos).
> A step-by-step walkthrough lives in its
> [DEMO-GUIDE.md](https://github.com/katiem0/copilot-agentic-demos/blob/main/docs/DEMO-GUIDE.md).
{: .prompt-info }

## What You'll Learn

- What Agent mode actually does — plan, edit across files, run commands, observe, and iterate toward a goal
- How a clear goal plus a verifiable "done" condition lets the agent run unattended
- How tests and type-checks act as guardrails that keep automation trustworthy
- When and why to add human checkpoints — and that a checkpoint is just splitting a prompt
- How repo customization (instructions and prompt files) keeps the agent grounded

## Prerequisites

- An active **GitHub Copilot** subscription with **Agent mode** available in Chat
- **VS Code** with the GitHub Copilot and Copilot Chat extensions
- **Node.js 18+** to run the sample library (TypeScript, tested with Vitest)
- The `copilot-agentic-demos` repository cloned and set up (`npm install`)

## The Scenario

You maintain an e-commerce order pricing module that computes subtotals, applies
discounts, and adds tax. It works "well enough" today, but it has thin test
coverage, a couple of lurking defects, and one function that has grown unwieldy.
Across the demos, you let Copilot plan, code, test, and refactor its way to a
healthier codebase.

## What the Demos Show

Every demo runs in **Agent mode**, and the default posture is full, end-to-end
automation: the agent plans, edits, runs verification, and only stops when its
goal is met.

### Plan and Code a Feature

Starting from a feature ticket, the agent implements a change that spans several
files — stating a brief plan, making coordinated edits, then running the
type-check and test suite and iterating until everything is green. The lesson is
that a **goal plus a verifiable done-condition** (not a step-by-step checklist)
is what lets the agent run unattended.

### Checkpoints Are Just Prompt Splits

The same feature is then run as two separate prompts — plan first, implement
second — with a human pause between them. This shows that a "checkpoint" isn't a
special mode: it's simply choosing to end one prompt and read what happened
before starting the next. Checkpoints are a **dial you turn up on higher-risk
work**, not a requirement.

### Test and Fix

The agent writes a thorough test suite that treats the intended behavior as the
source of truth, runs it, reads the failures, fixes the underlying code (not the
tests), and re-runs until green. This is where the planted bugs surface — and
where the generate → run → fix → re-run loop proves it can self-correct without a
human gate.

### Refactor Behind a Test Net

With tests now in place, the agent restructures the pricing logic for readability
— extracting small, well-named functions and replacing magic numbers with
constants — while keeping every test passing. The takeaway: aggressive refactors
are safe precisely because deterministic guardrails would stop the agent cold if
behavior changed.

## Customization That Keeps the Agent Grounded

The repository also demonstrates the customization that makes agentic work
repeatable and efficient:

- **Custom instructions** give the agent a map of the project so it doesn't wander the repo to orient itself.
- **Path-scoped instructions** apply rules (like testing conventions) only to the files they're relevant to.
- **Prompt files** capture reusable versions of each phase — plan, implement, test, refactor.

It also follows GitHub's guidance on optimizing AI usage: distinct
research → plan → implement phases, the right model per phase, lean context, and
deterministic guardrails.

## Key Takeaways

> Agent mode is automated by default. Checkpoints are something you add by
> choice — and the simplest way to add one is to split your prompt in two.
{: .prompt-tip }

- **Give a goal and a way to verify it**, then let the agent run the loop.
- **Tests and type-checks are the contract** that makes automation safe.
- **Reserve Agent mode for multi-step work** with real payoff; use inline completion for line-level edits.
