---
title: "GitHub Copilot 101: Understanding GitHub Copilot and Its Capabilities"
date: 2026-05-01 09:00:00 -0400
description: A follow-along tour of what GitHub Copilot can do in VS Code — from context-aware code completions and Chat to the Ask, Edit, and Agent modes, team customization, and real examples across .NET, Python, SQL Server, and mainframe COBOL.
tags: [GitHub Copilot, Workshop, Beginner]
repo: https://github.com/katiem0/copilot-101
---

This walkthrough is a hands-on tour of what GitHub Copilot can do inside VS Code.
Clone the [copilot-101](https://github.com/katiem0/copilot-101) repository, open
it in VS Code, and explore the demos it contains. The first few areas cover the
essentials; the rest show Copilot applied to real-world domains once you're
comfortable with the basics.

> Follow along in the companion repository: [katiem0/copilot-101](https://github.com/katiem0/copilot-101).
{: .prompt-info }

## What You'll Learn

- How Copilot completes code from the context around you
- How to use Copilot Chat to understand, review, translate, and generate code
- When to reach for each chat mode — Ask, Edit, or Agent
- How to customize Copilot so its suggestions follow your team's standards
- How Copilot applies to testing, databases, infrastructure, and legacy code

## Prerequisites

- An active **GitHub Copilot** subscription
- **VS Code** with the GitHub Copilot and Copilot Chat extensions
- The `copilot-101` repository cloned and opened in VS Code
- Language toolchains for the demos you want to try (for example, Python, .NET, and Node.js)

## Code Completions

The completion demos show Copilot acting as a deeply context-aware autocomplete.
You'll see how it draws on your file name, comments, and surrounding code to
suggest what comes next — and how it can even predict the *next* logical edit
after a change. The core lesson: the more relevant context you provide, the more
useful the suggestions become.

## Copilot Chat

The chat demos show how Copilot keeps you in the editor for the questions you'd
normally leave to search for. You'll practice explaining, reviewing, translating,
optimizing, and generating code through conversation, and learn how attaching the
right context is the single biggest factor in the quality of Copilot's answers.

## Chat Modes

These demos help you build intuition for Copilot Chat's three modes and when to
use each:

- **Ask** for understanding code and finding your way around a project.
- **Edit** for making direct, often multi-file changes to your code.
- **Agent** for planning and carrying out multi-step tasks, where Copilot
  discovers context and runs commands on its own.

## Customizing Copilot

A significant part of the repository is dedicated to customization — showing how
teams can encode their standards so Copilot's suggestions follow them
automatically. Through examples you'll learn the role of each customization type:

- **Instructions** — always-on rules applied to every suggestion, including
  language- and file-scoped variants.
- **Prompt files** — reusable templates that make common tasks repeatable.
- **Skills** — task-focused playbooks that surface as slash commands.
- **Custom agents** — specialized roles that give Copilot a particular perspective.

> The takeaway: **instructions define the rules, prompts define the task, skills
> define the process, and agents define the perspective.**
{: .prompt-tip }

## Testing and Test Data

The testing demos walk through the whole loop — finding and running existing
tests, planning edge cases, implementing coverage, and even building an
application test-first. Related examples show Copilot generating realistic test
data so a pre-written suite can pass.

## Real-World Domains

The remaining demos apply Copilot to the kinds of code teams actually maintain,
so you can see how it performs beyond simple examples:

- **Databases** — developing and reviewing SQL, including spotting security risks
  like injection and improving query performance.
- **Legacy and mainframe code** — explaining, reviewing, and modernizing
  unfamiliar COBOL and JCL, including porting logic to a modern language.
- **Infrastructure as code** — scaffolding configuration from intent, even from a
  diagram of the target architecture.
- **Everyday scripts and linting** — cleaning up code alongside a linter and
  building the small utility scripts that come up in real work.

## Documentation and Adoption

The repository also includes supporting material on proving Copilot's value,
driving adoption, and spec-driven development — useful when you want to take what
you've learned back to your team.

## At a Glance

| Area | What you'll take away |
| --- | --- |
| Completions | Context-aware suggestions and next-edit prediction |
| Chat | Understand, review, translate, and generate — without leaving the editor |
| Modes | When to use Ask vs. Edit vs. Agent |
| Customization | Instructions, prompts, skills, and agents that enforce your standards |
| Testing | Planning, writing, and running tests with Copilot |
| Domain demos | Copilot applied to databases, legacy code, and infrastructure |
