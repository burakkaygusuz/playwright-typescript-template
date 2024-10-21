import { defineConfig, devices } from '@playwright/test';
import dotenvx from '@dotenvx/dotenvx';

dotenvx.config({ quiet: true })

export default defineConfig({
  testDir: './tests',
  timeout: 0,
  expect: {
    timeout: 10000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    [
      'html',
      {
        open: 'never',
        outputFolder: 'reports/html',
      },
    ],
  ],
  use: {
    actionTimeout: 10000,
    navigationTimeout: 10000,
    baseURL: process.env.BASE_URL,
    launchOptions: {
      headless: true,
      slowMo: 0,
    },
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: {
      mode: 'retain-on-failure',
    },
    viewport: { width: 1920, height: 1080 },
  },
  projects: [
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: { args: ['--disable-gpu', '--disable-dev-shm-usage'] },
      },
    },

    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox'],
        launchOptions: {
          firefoxUserPrefs: { 'layers.acceleration.force-enabled': true },
        },
      },
    },

    {
      name: 'Webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
