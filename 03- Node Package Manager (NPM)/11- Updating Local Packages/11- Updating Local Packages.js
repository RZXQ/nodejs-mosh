/*
 * NPM Dependency Management Guide
 *
 * Organized by commands with detailed explanations
 */

// =============================================
// COMMAND: npm outdated
// =============================================
/*
 * Purpose: Identify outdated dependencies
 * Output shows 3 key versions:
 * - Current: Installed version
 * - Wanted: Max version allowed by your package.json rules (respects semver)
 * - Latest: Absolute newest version in registry
 *
 * Example Output:
 * +-----------+---------+---------+-------------+
 * | package   | current | wanted  | latest      |
 * |-----------|---------|---------|-------------|
 * | mongoose  | 2.4.2   | 2.9.10  | 4.13.6      |
 * | underscore| 1.4.0   | 1.8.2   | 1.8.2       |
 * +-----------+---------+---------+-------------+
 *
 * Key Insight:
 * - mongoose@2.9.10 is the latest 2.x.x version (your package.json likely specifies "^2.0.0")
 * - underscore@1.8.2 is both wanted and latest (your package.json allows minor updates)
 */

// =============================================
// COMMAND: npm update
// =============================================
/*
 * Purpose: Safe update to latest WANTED versions
 * Behavior:
 * - Updates within semver constraints in package.json
 * - Only modifies minor/patch versions (never major)
 * - Updates node_modules AND package-lock.json
 *
 * Expected Result from Example:
 * - mongoose@2.9.10 (latest in 2.x series)
 * - underscore@1.8.2 (reaches wanted/latest)
 *
 * Safety First:
 * - Never jumps major versions (2.x.x → 3.x.x)
 * - Preserves version constraints in package.json
 */

// =============================================
// COMMAND: npm-check-updates
// =============================================
/*
 * Purpose: Force major version upgrades
 * Workflow:
 *
 * 1. Install globally:
 * npm install -g npm-check-updates
 *
 * 2. Check upgrades (dry run):
 * ncu
 *
 * 3. Update package.json:
 * ncu -u
 *
 * 4. Install new versions:
 * npm install
 *
 * Danger Zone:
 * - Directly modifies package.json
 * - Might introduce breaking changes
 * - ALWAYS:
 *   - Test thoroughly after upgrade
 *   - Check changelogs for breaking changes
 *   - Use git before running ncu -u
 */

// =============================================
// BONUS COMMAND: npm install <package>@latest
// =============================================
/*
 * Purpose: Force-specific package to latest
 * Example:
 * npm install mongoose@latest
 *
 * Features:
 * - Ignores semver constraints
 * - Updates package.json version range
 * - Installs absolute latest version
 *
 * Use Case:
 * - When you specifically want latest version
 * - Alternative to npm-check-updates for single packages
 */

/*
 * PRO TIPS:
 * 1. Lockfile Matters: Always commit package-lock.json
 * 2. Upgrade Strategy:
 *    - Test → npm update → test → ncu → test
 * 3. Changelogs: Always check https://github.com/Automattic/mongoose/releases
 * 4. CI Safety: Consider "npm ci" instead of "npm install" in CI/CD pipelines
 */
