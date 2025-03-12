// =======================================================
//                  Semantic Versioning
//                    MAJOR.MINOR.PATCH
// =======================================================

// MAJOR version:
// - Significant updates
// - Can introduce breaking changes (API changes)
// - Example: 8.x.x → 9.0.0

// MINOR version:
// - New features, no breaking changes
// - Might initially be slightly unstable due to new features
// - Example: 8.12.x → 8.13.0

// PATCH version:
// - Bug fixes and minor improvements only
// - Example: 8.12.1 → 8.12.2

// =======================================================
//                npm Version Specifiers
// =======================================================

// 1. Caret (^) version: "^8.12.1"
// Installs the latest available version without changing the MAJOR version
// Examples:
// ^8.12.1 ✅ allows: 8.13.0, 8.15.9
// ^8.12.1 ❌ denies: 9.0.0

// 2. Tilde (~) version: "~8.12.1"
// Installs the latest available version without changing MAJOR and MINOR
// Examples:
// ~8.12.1 ✅ allows: 8.12.5, 8.12.9
// ~8.12.1 ❌ denies: 8.13.0, 9.0.0

// 3. Exact version: "8.12.1"
// Only installs that specific version
// Examples:
// 8.12.1 ✅ allows: only version 8.12.1
// 8.12.1 ❌ denies: 8.12.2, 8.13.0

// 4. Latest version: "latest"
// Always installs the most recent version available
// Examples:
// "latest" ✅ allows: 8.12.2, 8.15.0, 9.0.0, 10.0.1
// No restriction on MAJOR, MINOR, or PATCH updates
// ⚠️ Be cautious: Can introduce breaking changes anytime
