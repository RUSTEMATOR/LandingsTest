import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  testMatch:'**/*.spec.ts',
  testIgnore: '**/*.spec.skip.ts',
  /* Run tests in files in parallel */
  fullyParallel: true,
  expect: {
    toHaveScreenshot: { maxDiffPixels: 20,
     },
    
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: 5,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
            ["list"], 
          //   ['playwright-qase-reporter', {
          //     debug: true,
          //     mode: 'testops',
          //     logging: true,
          //     testops: {
          //       api: {
          //         token: '2b3e65ab1ee17f1440a13c94b9d1da5429f590fdbcc8d080ddc41268ae50305b',
          //       },
          //       project: 'AUTOMATION',
          //       uploadAttachments: true,
          //       run: {
          //         complete: true,
          //         title: 'Regular landing test'
          //       }

          //     }
          //   }
          // ]
          ],
          
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    viewport: {width: 1440, height: 900},
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    screenshot: 'on',
    video: 'on'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium Default',
      use: { ...devices['Desktop Chrome'] },
     
    },

    // { 
    //   name: 'Domains check',
    //   retries: 0,
    //   use: { ...devices['Desktop Chrome'] },
    //   testMatch: ['tests/**/*.check.ts']

    // },
    // {
    //   name: 'chromium 1920x1080',
    //   use: { ...devices['Desktop Chrome'],
    //     viewport: {width: 1920, height:1080}
    //    },
     
    // },
    // {
    //   name: 'chromium 1024x768',
    //   use: { ...devices['Desktop Chrome'],
    //     viewport: {width: 1024, height:768}
    //    } ,
     
    // },
    // {
    //   name: 'chromium 360x660',
    //   use: { ...devices['Desktop Chrome'],
    //     viewport: {width: 360, height:660}
    //    } ,
     
    // },
    // {
    //   name: 'chromium 768x420',
    //   use: { ...devices['Desktop Chrome'],
    //     viewport: {width: 768, height:420}
    //    } ,
    // }
  ]
     
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  // ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
})