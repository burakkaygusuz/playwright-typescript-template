# Playwright TypeScript Template

![Playwright](https://img.shields.io/github/v/release/microsoft/playwright?style=for-the-badge&logo=playwright&logoColor=%2345ba4b&label=PLAYWRIGHT&color=%2345ba4b)

## Table of Contents

- [Description](#description)
- [Dependencies](#dependencies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)

## Description

Template project for web testing with Playwright and TypeScript.

## Dependencies

### Development Dependencies

- **[@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker):** Library for generating fake data, useful for test data creation.
- **[@playwright/test](https://www.npmjs.com/package/@playwright/test):** End-to-end testing library for web applications, built on top of Playwright.
- **[@types/node](https://www.npmjs.com/package/@types/node):** TypeScript type definitions for Node.js.
- **[@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin):** ESLint plugin for TypeScript code analysis.
- **[@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser):** ESLint parser for TypeScript code.
- **[eslint](https://www.npmjs.com/package/eslint):** A pluggable and configurable linter for identifying and fixing problems in JavaScript code.
- **[eslint-plugin-playwright](https://www.npmjs.com/package/eslint-plugin-playwright):** ESLint rules for Playwright tests.
- **[prettier](https://www.npmjs.com/package/prettier):** Opinionated code formatter to enforce a consistent code style.
- **[typescript](https://www.npmjs.com/package/typescript):** TypeScript language support.

### Production Dependencies

- **[dotenv](https://www.npmjs.com/package/dotenv):** Zero-dependency module that loads environment variables from a .env file for your Node.js applications.

## Prerequisites

Before you begin, ensure you have Node.js and npm installed on your machine. If not, follow the installation commands below based on your operating system:

| Operating System   | Installation Commands                                     |
| ------------------ | --------------------------------------------------------- |
| **Windows**        | `winget upgrade && winget install --id OpenJS.NodeJS.LTS` |
| **macOS**          | `brew update && brew install node@20`                     |
| **Linux (Ubuntu)** | `sudo apt-get update && sudo apt-get install nodejs npm`  |

## Installation

- Click on the **"Use this template"** button and then **"Create new repository"** menu item.

- Change the directory.

```bash
cd playwright-typescript-template
```

- Install the dependencies and the browsers.

```bash
npm install && npx playwright install
```

- Run the test.

```bash
npx playwright test
```

- Report the test result.

```bash
npm run report
```
