// npm list (equivalent to: npm list --depth=0)
// Lists all top-level dependencies only (no nested dependencies):
// ├── mongoose@8.12.1
// └── underscore@1.13.7

// npm list --depth=1
// Lists all top-level dependencies plus their direct immediate dependencies (depth = 1):
// Example output:
// ├── mongoose@8.12.1
// │   ├── bson@x.x.x
// │   ├── mongodb@x.x.x
// │   └── other-direct-dependency@x.x.x
// └── underscore@1.13.7
//     └── (no dependencies or other dependencies if applicable)
