---
title: "Test First with Copilot: Faster TDD with High-Signal Tests"
date: 2026-08-05 09:00:00 -0400
description: A hands-on demo of test-first development with GitHub Copilot in VS Code, using high-signal boundary and interaction tests to drive a review-policy implementation through red, green, and refactor.
tags: [GitHub Copilot, Testing, Intermediate, Workshop]
repo: https://github.com/katiem0/test-first-copilot-demo
---

This demo uses a small TypeScript review-policy application to show how GitHub
Copilot can accelerate test-driven development without taking ownership of the
behavioral oracle. Starting from one failing contract test and an incomplete
production stub, you build the policy one observable behavior at a time through
red, green, and refactor.

> Follow along in the companion repository:
> [katiem0/test-first-copilot-demo](https://github.com/katiem0/test-first-copilot-demo).
{: .prompt-info }

## What You'll Learn

- How to keep behavioral intent in executable tests while Copilot accelerates implementation
- How to choose boundary, interaction, and counterexample tests with real defect-detection power
- How persistent instructions, prompt files, and custom agents support a repeatable test-first workflow
- Why a verified red result matters before asking Copilot to make the implementation green
- How a proven test suite protects behavior during refactoring

## Prerequisites

- An active **GitHub Copilot** subscription with Agent mode available in Chat
- **VS Code** with the GitHub Copilot and Copilot Chat extensions
- **Node.js** and npm
- The `test-first-copilot-demo` repository cloned and opened in VS Code
- Dependencies installed with `npm install`

Run `npm run typecheck` and `npm run build` before starting. Then run the tests in
watch mode with `npm run test:watch`; the first run should be red by design.

> This session uses GitHub Copilot features inside VS Code only. It does not use
> Copilot CLI, cloud delegation, or Copilot coding agent.
{: .prompt-warning }

## The Scenario

The application evaluates review requirements for a proposed code change. The
policy is revealed incrementally:

1. A ready change of up to 200 lines requires one approval.
2. A change over 200 lines requires two approvals and reports `large change`.
3. An authentication change requires security review, at least two approvals, and reports `authentication change`.
4. A database migration requires at least two approvals and reports `database migration`.
5. Risks compose using the maximum approval count, with reasons ordered by size, authentication, then migration.
6. A draft overrides the other rules: no approvals, no security review, and only the `draft` reason.

## Copilot Customizations

The repository includes several customization layers for the workflow:

| Customization | Purpose |
| --- | --- |
| `.github/copilot-instructions.md` | Supplies durable test-first conventions |
| `/next-high-signal-test` | Adds one focused behavior and stops at red |
| `Test-First Driver` | Keeps red, green, and refactor phases separate |
| `Test Designer` | Provides an isolated, read-only test-design pass |

Requirements stay in the tests rather than the instructions file. The developer
still owns the expected behavior, verifies why a test failed, and decides whether
a proposed example is strong enough.

## Demo Sequence

### Persistent Guardrails

Begin with the failing starter test and ask the default agent to implement only
enough production code to pass it. Review the plan and diff before editing, and
confirm Copilot does not anticipate later policy rules.

### Test the Approval Boundary

Use the `Test-First Driver` to add the 201-line case beside the existing 200-line
case. Confirm the new public-API test fails because it receives one approval
instead of two, then make the smallest production change that returns the suite
to green.

### Compose Risks

Add focused authentication and migration tests, followed by one representative
interaction: a 201-line authentication change with a database migration. This
single case verifies maximum rather than summed approvals, security review, and
deterministic reason ordering without enumerating every permutation.

### Prove Defect Detection

Manually mutate the boundary from `> 200` to `>= 200`. The 200-line test should
fail with a useful behavioral message. Undo the mutation and rerun the suite to
prove it returns to green.

### Refactor Under Protection

Ask Copilot to refactor `evaluateReview` for readability while preserving public
types and observable behavior. Keep the tests unchanged, inspect the proposed
diff, and run the full suite after accepting it.

### Add the Draft Counterexample

As an optional final challenge, add a draft that is also large,
authentication-related, and a database migration. This counterexample proves
that draft status takes precedence instead of merely testing the ordinary draft
path.

## Key Takeaway

> Copilot accelerates the loop, but it does not choose the expected side of a
> boundary, the representative interaction, or the strongest counterexample.
> Let Copilot accelerate the work. Keep the intent in the tests.
{: .prompt-tip }
