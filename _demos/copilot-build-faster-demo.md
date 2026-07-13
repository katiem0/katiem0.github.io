---
title: "Building Faster with GitHub Copilot"
date: 2026-05-28 09:00:00 -0400
description: A hands-on demo that follows a single small service through the real workflows of a hackathon — scaffolding under time pressure, debugging, generating tests, expanding synthetic data, and reviewing code, all with GitHub Copilot in VS Code.
tags: [GitHub Copilot, Productivity, Workshop, Beginner]
repo: https://github.com/katiem0/copilot-build-faster-demo
---

This repository shows how GitHub Copilot helps you move quickly when you're
building something new — the kind of fast, iterative work you'd do during a
hackathon. It uses one small project-submission service as a throughline, so you
can see Copilot support the whole flow rather than a set of disconnected tricks.

> Follow along in the companion repository: [katiem0/copilot-build-faster-demo](https://github.com/katiem0/copilot-build-faster-demo).
{: .prompt-info }

## What You'll Learn

- How to use Copilot to scaffold new features quickly when you're short on time
- How Copilot helps you debug — both from a failing test and from unexpected runtime behavior
- How to generate meaningful tests and expand realistic sample data
- How to run an in-editor code review and make it repeatable with custom prompts
- Habits that keep Copilot's output safe and consistent

## Prerequisites

- An active **GitHub Copilot** subscription
- **VS Code** with the GitHub Copilot and Copilot Chat extensions
- **Node.js 18+** to run the sample service (Express, with Jest and Supertest for tests)
- The `copilot-build-faster-demo` repository cloned and set up (`npm install`)

## What the Demos Show

The repository walks through the workflows you actually hit when building under
pressure, each demonstrated against the same service:

- **Scaffolding fast** — adding a small feature and a focused test quickly, so you
  can see Copilot accelerate the "get something working" phase.
- **Debugging with a test** — writing a regression test that exposes a real gap in
  the code, then letting Copilot trace the failure to its root cause.
- **Debugging without a test** — exercising the running API by hand, capturing an
  unexpected response, and asking Copilot to reason through the route, store, and
  validation flow.
- **Making sense of tooling errors** — interpreting terminal, dependency, or
  compiler-style failures and applying the smallest fix.
- **Tests and sample data** — generating edge-case tests and extending synthetic
  fixtures so you have realistic traffic to demo with.
- **In-editor code review** — reviewing a change with Copilot and comparing the
  findings against a reusable review prompt.

> The project includes an intentional gap — duplicate team members aren't
> rejected — so there's a real bug for Copilot to find and fix during the
> debugging demos.
{: .prompt-tip }

## Getting the Most From It

- Read the repo's example instructions and prompt files to see how a little
  up-front setup keeps Copilot's output consistent and cuts down on re-prompting.
- **Use synthetic data only** — never paste real names, secrets, tokens, or
  customer data into prompts.
- Review generated code before accepting it, and run the tests after each
  Copilot-assisted change.

## Key Takeaway

> Copilot shines when you're moving fast — it helps you scaffold, debug,
> test, and review without breaking your flow, as long as you stay in the
> driver's seat and verify what it produces.
{: .prompt-tip }
