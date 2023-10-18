# Playwright TypeScript Template

Boilerplate project for web testing with Playwright and TypeScript.

## Prerequisites

Make sure you have installed all the following prerequisites on your development machine:

| OS      | Node                               |
| ------- | ---------------------------------- |
| Windows | `winget install OpenJS.NodeJS.LTS` |
| macOS   | `brew install node@18`             |

## Executing The Tests

- Clone the repository.

```shell
git clone git@github.com:burakkaygusuz/playwright-typescript-template.git
```

- Change the directory.

```shell
cd playwright-typescript-template
```

- Install the dependencies and the browsers.

```shell
npm install && npx playwright install
```

- Run the test.

```shell
npx playwright test
```

- Report the test result.

```shell
npm run report
```
