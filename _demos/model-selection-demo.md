---
title: "Model Selection & Token Efficiency"
date: 2026-06-22 09:00:00 -0400
description: A hands-on workshop for choosing the right GitHub Copilot model for each task and cutting token waste - covering the three model tiers, prompt efficiency, phased Research → Plan → Implement workflows, and practical context management.
tags: [GitHub Copilot, Beginner, Intermediate, Workshop]
repo: https://github.com/katiem0/model-selection-demo
---

This repository accompanies a workshop built around one deceptively simple
question: *which model should I pick, and why?* The answer is almost never "the
most powerful one available." Through a series of small, runnable demos, you'll
learn to match each task to the right model tier and to reduce the token waste
that quietly drives up cost.

> Follow along in the companion repository: [katiem0/model-selection-demo](https://github.com/katiem0/model-selection-demo).
> It pairs with the GitHub blog post
> [Improving token efficiency in GitHub agentic workflows](https://github.blog/ai-and-ml/github-copilot/improving-token-efficiency-in-github-agentic-workflows/).
{: .prompt-info }

## What You'll Learn

- How to match a task to one of three model tiers — reasoning, general-purpose, or lightweight — on purpose, not by habit
- When Auto is the right default, and when it's worth overriding
- How tighter prompts produce smaller, more correct responses on the first try
- How to split agentic work into phases so context stays clean
- Practical ways to manage context: when to reset, compact, or re-anchor a session

## Prerequisites

- An active **GitHub Copilot** subscription with access to a range of models
- **VS Code** with the GitHub Copilot and Copilot Chat extensions, and the model picker handy
- **Python 3.11+** to run the sample demos (each is small and self-contained)
- The `model-selection-demo` repository cloned and set up per its README

## What the Demos Show

The repository is organized as a set of focused demos, each isolating a single
decision about model choice or context. Rather than prescribing exact prompts,
they're designed so you can see the trade-offs for yourself.

### Prompt Efficiency Comes First

Before touching any model setting, the demos show that the cheapest optimization
available is the prompt itself. Using the same model on the same task, you'll
compare vague requests against specific ones and watch how scope, a test used as
a spec, and a clearly named problem all lead to shorter, correct answers.

### The Three Model Tiers

A run of demos matches work to the right tier:

- **Lightweight** models for mechanical, "do the obvious thing" work like
  refactors and cleanups — fast and inexpensive, without over-engineering.
- **General-purpose** models for implementing from a clear specification.
- **Reasoning** models for genuinely hard problems, like diagnosing a subtle bug
  that spans multiple files — where the extra cost actually earns its keep.

You'll also see the flip side: pointing a heavyweight reasoning model at trivial
work tends to produce bloated, over-engineered output, not better results.

### Research → Plan → Implement

One of the most impactful patterns breaks a feature into three phases — research,
planning, and implementation — each in a fresh session with the model best suited
to it. Because each phase hands off through a written artifact instead of a long
chat history, context stays clean and the total cost is usually lower than
running the strongest model for the whole thing.

### Managing Context

A set of demos covers the signals that tell you it's time to intervene in a
session, and what to do about each:

- **Start a new chat** when the task changes entirely.
- **Compact** a long, noisy session down to a short summary and continue.
- **Trim always-on instructions** so you're not paying for redundant guidance on every turn.
- **Re-anchor** to bring a new model (or a returning you) up to speed in a single prompt.

### Operations and Everyday Habits

Further demos apply the same principles to day-to-day work — preserving prompt
cache, keeping the tool surface minimal, tuning reasoning effort, offloading
routine sub-work to subagents, and using slash commands like `/compact`,
`/fork`, and `/chronicle` to control context and surface recurring waste.

## Key Takeaways

> Auto is the right default. The skill is knowing when — and why — to override it.
{: .prompt-tip }

- **Optimize the prompt before changing the model.**
- **Match the model tier to the work** — lightweight for mechanical tasks,
  reasoning only when the problem truly needs it.
- **Better context beats a bigger model**, especially once tasks span multiple files.
- Reset, compact, or re-anchor whenever you catch yourself saying "as I mentioned earlier."
