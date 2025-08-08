---
title: CLI Extensions
icon: fas fa-terminal
order: 5
---

# GitHub CLI Extensions

I develop and maintain several GitHub CLI extensions that help organizations and developers manage their GitHub environments more efficiently. These tools focus on automation, migration, and management of GitHub resources.

## Featured Projects

### [gh-environments](https://github.com/katiem0/gh-environments)

![GitHub Stars](https://img.shields.io/github/stars/katiem0/gh-environments?style=social)
![Release](https://img.shields.io/github/v/release/katiem0/gh-environments)
![License](https://img.shields.io/github/license/katiem0/gh-environments)

A GitHub CLI extension to list and create environment metadata, including secrets and variables.

**Key Features:**
- List environment configurations across repositories
- Generate detailed reports of environment protection rules
- Create environments from templates
- Manage environment secrets and variables

**Installation:**
```bash
gh extension install katiem0/gh-environments
```

### [gh-seva](https://github.com/katiem0/gh-seva)

![GitHub Stars](https://img.shields.io/github/stars/katiem0/gh-seva?style=social)
![Release](https://img.shields.io/github/v/release/katiem0/gh-seva)
![License](https://img.shields.io/github/license/katiem0/gh-seva)

A GitHub CLI extension to manage Secrets and Variables for organizations and repositories.

**Key Features:**
- Export organization and repository-level secrets and variables
- Create secrets and variables from CSV templates
- Copy secrets and variables between organizations
- Support for GitHub Actions, Dependabot, and Codespaces secrets

**Installation:**
```bash
gh extension install katiem0/gh-seva
```

### [gh-bbc-exporter](https://github.com/katiem0/gh-bbc-exporter)

![GitHub Stars](https://img.shields.io/github/stars/katiem0/gh-bbc-exporter?style=social)
![Release](https://img.shields.io/github/v/release/katiem0/gh-bbc-exporter)
![License](https://img.shields.io/github/license/katiem0/gh-bbc-exporter)

A GitHub CLI extension to create a Bitbucket Cloud archive for import to GitHub Cloud.

**Key Features:**
- Creates export archives compatible with GitHub Enterprise Importer
- Preserves repository metadata, git objects, and pull requests
- Maps Bitbucket users to GitHub users
- Supports both Basic Authentication and Access Tokens

**Installation:**
```bash
gh extension install katiem0/gh-bbc-exporter
```

### [gh-migrate-rulesets](https://github.com/katiem0/gh-migrate-rulesets)

![GitHub Stars](https://img.shields.io/github/stars/katiem0/gh-migrate-rulesets?style=social)
![Release](https://img.shields.io/github/v/release/katiem0/gh-migrate-rulesets)
![License](https://img.shields.io/github/license/katiem0/gh-migrate-rulesets)

A GitHub CLI extension to create and generate reports of repository rulesets for repos and orgs.

**Key Features:**
- Generate detailed reports of repository rulesets
- Create rulesets from CSV templates
- Copy rulesets between organizations
- Support for all ruleset types including branch protection and workflow rules

**Installation:**
```bash
gh extension install katiem0/gh-migrate-rulesets
```

### [gh-organization-webhooks](https://github.com/katiem0/gh-organization-webhooks)

![GitHub Stars](https://img.shields.io/github/stars/katiem0/gh-organization-webhooks?style=social)
![Release](https://img.shields.io/github/v/release/katiem0/gh-organization-webhooks)
![License](https://img.shields.io/github/license/katiem0/gh-organization-webhooks)

A GitHub CLI extension to manage organization webhooks.

**Key Features:**
- List organization-level webhooks with detailed information
- Create webhooks from CSV templates
- Copy webhooks between organizations
- Detailed reporting of webhook configurations

**Installation:**
```bash
gh extension install katiem0/gh-organization-webhooks
```

## Using My Extensions

All of my GitHub CLI extensions require the [GitHub CLI](https://cli.github.com/) to be installed and authenticated. Most extensions support both GitHub.com and GitHub Enterprise Server environments.

### General Usage Pattern

Most of my extensions follow a similar pattern:
1. **List/Export**: Generate reports about current configurations
2. **Create/Import**: Create resources based on CSV files or copy from another organization

### Authentication

Depending on the extension, you may need different scopes for your GitHub authentication. Always check the README of each extension for specific authentication requirements.

## Contributing

If you find any issues or have suggestions for improvements, please feel free to open an issue or a pull request on the respective GitHub repository. All contributions are welcome!
