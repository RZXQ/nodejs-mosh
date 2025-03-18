// npm install <package_name>
// Installs the package as a runtime dependency (often just called 'dependencies')
// Node.js applications rely on these dependencies to run correctly at runtime
// Example: npm install express

// npm install <package_name> --save-dev
// Installs the package specifically as a development dependency ('devDependencies')
// Development dependencies are tools and libraries used ONLY during the development and build process, not at runtime
// Common examples: linters like ESLint or JSHint, testing frameworks like Jest, build tools like Webpack or Babel
// Example: npm install jshint --save-dev

// Explanation:
// - Since npm v5+, using the '--save' flag explicitly isn't needed anymore; npm automatically updates the package.json file
// - However, when installing development dependencies, you MUST explicitly use the '--save-dev' flag to correctly categorize it under devDependencies in package.json

// Difference between 'dependencies' and 'devDependencies':
// 1. Dependencies (Runtime/Production Dependencies):
//    - Required during application runtime
//    - Stored under "dependencies" in package.json
//    - Examples: express, lodash, mongoose

// 2. devDependencies (Development Dependencies):
//    - Used during development, testing, linting, or build process ONLY
//    - Stored under "devDependencies" in package.json
//    - Examples: eslint, jshint, jest, webpack, prettier, babel

// Storage location:
// - Both types ('dependencies' and 'devDependencies') are downloaded and stored in the 'node_modules' folder
// - The separation is ONLY logical in the package.json file, distinguishing runtime necessities from development-only packages
