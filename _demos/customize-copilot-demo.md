---
title: "Customizing GitHub Copilot: A Hands-On Demo"
date: 2026-05-15 09:00:00 -0400
description: A beginner-friendly look at how GitHub Copilot's four customization options — instructions, prompts, skills, and custom agents — layer together to turn Copilot from a general assistant into a role-aware, team-aligned reviewer.
tags: [GitHub Copilot, Beginner, Workshop]
repo: https://github.com/katiem0/customize-copilot-demo
---

This repository is a gentle introduction to customizing GitHub Copilot. It uses
a single, relatable scenario — reviewing a pull request before merge — to show
how Copilot's four customization options build on each other. By following along
in VS Code, you'll see how each layer changes the quality and consistency of
Copilot's responses.

> Follow along in the companion repository: [katiem0/customize-copilot-demo](https://github.com/katiem0/customize-copilot-demo).
{: .prompt-info }

## What You'll Learn

- The four ways you can customize Copilot and what each one is for
- How layering customization changes Copilot's output from generic to team-aligned
- How a custom agent shifts Copilot's *perspective* on the same task
- Practical habits for getting consistent, repeatable results

## The Four Customization Layers

The heart of the repository is a set of examples showing each customization type
working toward the same goal. Together they demonstrate how you can encode your
team's expectations so Copilot follows them automatically.

| Layer | What it does |
| --- | --- |
| **Instructions** | Always-on guidance that sets baseline coding, testing, security, and accessibility expectations for every response. |
| **Prompts** | Reusable task templates that give a repeatable structure and output format for common work like reviews. |
| **Skills** | Portable playbooks and checklists Copilot can draw on when a task calls for them. |
| **Custom Agents** | Specialized roles that give Copilot a focused perspective — for example, reviewing as a tech lead. |

## What the Demos Show

The repository includes a progression of short demos built around the same PR
review scenario. Rather than prescribing exact prompts, they're designed to let
you *feel* the difference each layer makes:

- **Starting simple** — a basic, codebase-aware review shows what Copilot does
  with little guidance: useful but general feedback, with inconsistent structure
  and no clear recommendation.
- **Adding the full layer** — combining instructions, a prompt, a skill, and a
  custom agent produces a consistent, well-structured review that reflects your
  standards and ends with a clear merge decision.
- **Isolating the agent** — running the same task with and without a custom agent
  shows that the prompt structures the *work*, while the agent shapes the
  *judgment* and prioritization.

## What to Compare

As you work through the demos, watch how the output changes as customization is
added:

| With little customization | With the full customization layer |
| --- | --- |
| Useful but generic feedback | Feedback aligned to your team's standards |
| Output format varies each time | Consistent, repeatable structure |
| May miss team-specific priorities | Applies your coding, testing, security, and accessibility expectations |
| Identifies issues without ranking them | Prioritizes risks and gives a clear recommendation |
| Reviews like a general assistant | Reviews from a specific, chosen perspective |

## Getting the Most From It

- Start a **new Copilot Chat for each demo** — Chat uses conversation history as
  context, so a clean chat makes the effect of each customization easier to see.
- Read through the example instruction, prompt, skill, and agent files to see how
  each is written, then adapt them to your own projects.

## Key Takeaway

> Instructions define the rules. Prompts define the task. Skills define the
> process. Custom agents define the perspective.
{: .prompt-tip }

Layering these together is what turns Copilot from a helpful generalist into a
reviewer that reflects how *your* team works.
