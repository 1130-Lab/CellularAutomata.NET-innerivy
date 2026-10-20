# Cellular Observatory UI

See [the repository README](../README.md#static-web-visualizer) for setup, building, serving, tests, rule semantics, and limits.

`src/runtime.ts` boots standalone .NET WebAssembly; all evolution occurs in the C# library. React only edits configuration and draws returned bytes. Three.js is loaded on demand for 3D. All runtime assets are local; no backend, remote font, CDN, or API is needed.
