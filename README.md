🧪 UI Automation Framework with Playwright, Cucumber, and TypeScript

This project is a UI automation framework built using **Playwright**, **Cucumber (Gherkin)**, and **TypeScript**. It enables writing clean, behavior-driven tests for end-to-end web automation.

📦 Tech Stack
- **Playwright** – for browser automation
- **Cucumber + Gherkin** – for BDD-style test writing
- **TypeScript** – for type-safe coding
- **Node.js & NPM** – for dependency and script management

📁 Folder Structure
----text
├── .gitignore
├── package.json
├── tsconfig.json
├── cucumber.json
└── src
    └── test
        ├── features/       # Feature files
        ├── steps/          # Step definitions
        └── hooks/          # Hooks and fixtures

 🚀 Getting Started

1. 📥 Install dependencies
npm install
2. 🧪 Run Tests
To run all tests with Cucumber + Playwright:
npx cucumber-js
3. 📊 View Playwright Report
After running Playwright tests:
npx playwright show-report
⚙️ Scripts (in package.json)
"scripts": {
  "test": "npx playwright test",
  "bdd": "npx cucumber-js",
 			 "report": "npx playwright show-report"
}
Use them like:
npm run test     # Playwright tests
npm run bdd      # Cucumber BDD tests
npm run report   # Open HTML report
🧹 .gitignore Suggestions
Make sure your .gitignore includes:
node_modules/
playwright-report/
test-results/
.vscode/
*.log
🙋‍♀️ Author
Deepika Mani
https://github.com/DeepikaMalliga

📄 License
This project is licensed under the MIT License. Use it, modify it, and share it!
