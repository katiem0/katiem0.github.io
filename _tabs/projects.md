---
title: CLI Extensions
icon: fas fa-terminal
order: 5
---

I develop and maintain several GitHub CLI extensions that help organizations and developers manage their GitHub environments more efficiently. These tools focus on automation, migration, and management of GitHub resources.

A full list of extensions can be found [here](https://github.com/katiem0?tab=repositories&q=topic%3Agh-extension&type=&language=&sort=stargazers).

## Featured Extensions

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

### [gh-migrate-rulesets](https://github.com/katiem0/gh-migrate-rulesets)

![GitHub Stars](https://img.shields.io/github/stars/katiem0/gh-migrate-rulesets?style=social)
![Release](https://img.shields.io/github/v/release/katiem0/gh-migrate-rulesets)
![License](https://img.shields.io/github/license/katiem0/gh-migrate-rulesets)

A GitHub CLI extension to create and generate a report of repository rulesets for repos and orgs.

**Key Features:**
- Generate comprehensive reports of existing repository rulesets
- Export ruleset configurations for backup and audit purposes
- Migrate rulesets between organizations or repositories
- Support for both organization-level and repository-level rulesets

**Installation:**

```bash
gh extension install katiem0/gh-migrate-rulesets
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


## Using My Extensions

All of my GitHub CLI extensions require the [GitHub CLI](https://cli.github.com/) to be installed and authenticated. Most extensions support both GitHub.com and GitHub Enterprise Server environments.

## Contributing

If you find any issues or have suggestions for improvements, please feel free to open an issue or a pull request on the respective GitHub repository. All contributions are welcome!
